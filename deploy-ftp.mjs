import * as ftp from 'basic-ftp'
import { readdirSync, statSync } from 'fs'
import { join, relative } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const CONFIG = {
  host:     'ftp.cortinametalicaelsalvador.com',
  user:     'portalguanaco@portalguanaco.com',
  password: 'Yuka2040!',
  port:     21,
  secure:   false,   // FTPS explícito — se intentará si el servidor lo soporta
}

// Carpeta local generada por Vite
const LOCAL_DIR  = join(__dirname, 'dist')
// Carpeta remota destino en el servidor
const REMOTE_DIR = '/public_html/SidereAI'

// ─────────────────────────────────────────────
// Sube un directorio entero de forma recursiva
// ─────────────────────────────────────────────
async function uploadDir(client, localPath, remotePath) {
  // Asegurarse de que el directorio remoto exista
  await client.ensureDir(remotePath)
  await client.clearWorkingDir()   // limpia el dir para que ensureDir funcione bien

  const entries = readdirSync(localPath)
  for (const entry of entries) {
    const localEntry  = join(localPath, entry)
    const remoteEntry = remotePath + '/' + entry
    const stat = statSync(localEntry)
    if (stat.isDirectory()) {
      console.log(`  📁  ${remoteEntry}`)
      await uploadDir(client, localEntry, remoteEntry)
    } else {
      console.log(`  ⬆   ${remoteEntry}`)
      await client.uploadFrom(localEntry, remoteEntry)
    }
  }
}

async function deploy() {
  const client = new ftp.Client()
  client.ftp.verbose = false   // pon en true si necesitas debug detallado

  try {
    console.log('\n🚀  SidereAI — Deploy FTP\n')
    console.log(`   Host  : ${CONFIG.host}`)
    console.log(`   User  : ${CONFIG.user}`)
    console.log(`   Dest  : ${REMOTE_DIR}\n`)

    await client.access(CONFIG)
    console.log('✅  Conexión establecida\n')

    console.log('📤  Subiendo archivos...\n')
    await uploadDir(client, LOCAL_DIR, REMOTE_DIR)

    console.log('\n✅  Deploy completado con éxito.')
    console.log(`🌐  URL: https://portalguanaco.com/SidereAI/\n`)
  } catch (err) {
    console.error('\n❌  Error durante el deploy:')
    console.error(err.message || err)
    process.exit(1)
  } finally {
    client.close()
  }
}

deploy()
