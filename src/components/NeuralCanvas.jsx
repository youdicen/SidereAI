import { useEffect, useRef } from 'react'

/* ─────────────────────────────────────────────
   NeuralCanvas
   Sinapsis inspirada en el logo de SidereAI:
   · Nodos que "flotan" lentamente por el canvas
   · Conexiones entre nodos cercanos (<280px)
   · Pulsos de señal que viajan por cada conexión
   · Paleta champán / ivory extraída del logo
   ───────────────────────────────────────────── */

const CHAMPAGNE   = 'rgba(201,168,76,'   // #C9A84C – color primario del logo
const IVORY       = 'rgba(250,248,245,'  // #FAF8F5
const PLASMA      = 'rgba(120,97,255,'   // acento frío para contraste

const NODE_COUNT  = 55     // densidad de la red
const LINK_DIST   = 220    // distancia máxima de conexión (px)
const NODE_SPEED  = 0.28   // velocidad base de drift

// ── Clase Nodo ────────────────────────────────
class Node {
  constructor(w, h) {
    this.reset(w, h, true)
  }
  reset(w, h, initial = false) {
    this.x  = initial ? Math.random() * w : (Math.random() > 0.5 ? 0 : w)
    this.y  = initial ? Math.random() * h : (Math.random() > 0.5 ? 0 : h)
    this.vx = (Math.random() - 0.5) * NODE_SPEED * 2
    this.vy = (Math.random() - 0.5) * NODE_SPEED * 2
    this.r  = Math.random() * 2.8 + 1.2  // radio 1.2 – 4 px
    this.pulse = Math.random() * Math.PI * 2  // fase de latido
    this.pulseSpeed = 0.018 + Math.random() * 0.025
    // algunos nodos son "hubs" más grandes y brillantes
    this.isHub = this.r > 3.5
  }
  update(w, h) {
    this.x += this.vx
    this.y += this.vy
    this.pulse += this.pulseSpeed
    // rebote suave en bordes con amortiguación
    if (this.x < -40 || this.x > w + 40 || this.y < -40 || this.y > h + 40) {
      this.reset(w, h)
    }
  }
}

// ── Clase Pulso de señal ───────────────────────
class SignalPulse {
  constructor(fromNode, toNode) {
    this.from = fromNode
    this.to   = toNode
    this.t    = 0         // progreso 0→1
    this.speed = 0.008 + Math.random() * 0.012
    this.dead = false
  }
  update() {
    this.t += this.speed
    if (this.t >= 1) this.dead = true
  }
  get pos() {
    return {
      x: this.from.x + (this.to.x - this.from.x) * this.t,
      y: this.from.y + (this.to.y - this.from.y) * this.t,
    }
  }
}

// ── Utilidad: distancia ───────────────────────
function dist(a, b) {
  const dx = a.x - b.x, dy = a.y - b.y
  return Math.sqrt(dx * dx + dy * dy)
}

export default function NeuralCanvas({ style = {} }) {
  const canvasRef = useRef(null)
  const stateRef  = useRef({ nodes: [], pulses: [], raf: null, w: 0, h: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    const state  = stateRef.current

    // ── Resize ────────────────────────────────
    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect()
      state.w = canvas.width  = rect.width  || window.innerWidth
      state.h = canvas.height = rect.height || window.innerHeight
      // reiniciar nodos en el nuevo tamaño
      state.nodes = Array.from({ length: NODE_COUNT }, () => new Node(state.w, state.h))
    }
    resize()
    window.addEventListener('resize', resize)

    // ── Spawn inicial de pulsos ───────────────
    function spawnPulse() {
      const { nodes, pulses } = state
      // elegir par aleatorio con distancia válida
      const a = nodes[Math.floor(Math.random() * nodes.length)]
      const b = nodes[Math.floor(Math.random() * nodes.length)]
      if (a !== b && dist(a, b) < LINK_DIST) {
        pulses.push(new SignalPulse(a, b))
      }
    }

    // ── Frame loop ────────────────────────────
    let frameCount = 0
    function draw() {
      const { w, h, nodes, pulses } = state
      ctx.clearRect(0, 0, w, h)

      // Spawn pulsos cada ~22 frames
      frameCount++
      if (frameCount % 22 === 0) spawnPulse()

      // Actualizar nodos
      nodes.forEach(n => n.update(w, h))

      // ─ Dibujar conexiones ─────────────────
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = dist(nodes[i], nodes[j])
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.22  // máx 22% opacidad
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            // línea más brillante si ambos nodos son hubs
            const bright = (nodes[i].isHub || nodes[j].isHub) ? alpha * 1.8 : alpha
            ctx.strokeStyle = `${CHAMPAGNE}${Math.min(bright, 0.38)})`
            ctx.lineWidth   = nodes[i].isHub && nodes[j].isHub ? 0.9 : 0.5
            ctx.stroke()
          }
        }
      }

      // ─ Dibujar nodos ──────────────────────
      nodes.forEach(node => {
        const glowAlpha = 0.55 + Math.sin(node.pulse) * 0.25  // latido 0.3–0.8
        const baseAlpha = 0.7 + Math.sin(node.pulse) * 0.2

        if (node.isHub) {
          // Halo exterior para hubs
          const grd = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r * 5)
          grd.addColorStop(0, `${CHAMPAGNE}${(glowAlpha * 0.4).toFixed(2)})`)
          grd.addColorStop(1, `${CHAMPAGNE}0)`)
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.r * 5, 0, Math.PI * 2)
          ctx.fillStyle = grd
          ctx.fill()
        }

        // Núcleo del nodo
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2)
        ctx.fillStyle = node.isHub
          ? `${CHAMPAGNE}${baseAlpha.toFixed(2)})`
          : `${IVORY}${(baseAlpha * 0.75).toFixed(2)})`
        ctx.fill()
      })

      // ─ Dibujar pulsos de señal ─────────────
      state.pulses = pulses.filter(p => !p.dead)
      state.pulses.forEach(pulse => {
        pulse.update()
        if (pulse.dead) return
        const { x, y } = pulse.pos
        // easing: brillo máximo en el centro del recorrido
        const fade = Math.sin(pulse.t * Math.PI)

        // rastro suave detrás del pulso
        const trailLen = 0.12
        const tx = pulse.from.x + (pulse.to.x - pulse.from.x) * Math.max(0, pulse.t - trailLen)
        const ty = pulse.from.y + (pulse.to.y - pulse.from.y) * Math.max(0, pulse.t - trailLen)
        const grad = ctx.createLinearGradient(tx, ty, x, y)
        grad.addColorStop(0, `${CHAMPAGNE}0)`)
        grad.addColorStop(1, `${CHAMPAGNE}${(fade * 0.9).toFixed(2)})`)
        ctx.beginPath()
        ctx.moveTo(tx, ty)
        ctx.lineTo(x, y)
        ctx.strokeStyle = grad
        ctx.lineWidth   = 1.5
        ctx.stroke()

        // punto luminoso en la punta
        const pGrd = ctx.createRadialGradient(x, y, 0, x, y, 6)
        pGrd.addColorStop(0, `${CHAMPAGNE}${(fade * 0.95).toFixed(2)})`)
        pGrd.addColorStop(0.4, `${CHAMPAGNE}${(fade * 0.5).toFixed(2)})`)
        pGrd.addColorStop(1, `${CHAMPAGNE}0)`)
        ctx.beginPath()
        ctx.arc(x, y, 6, 0, Math.PI * 2)
        ctx.fillStyle = pGrd
        ctx.fill()

        // destellito en el centro del pulso (plasma)
        if (fade > 0.5) {
          ctx.beginPath()
          ctx.arc(x, y, 2, 0, Math.PI * 2)
          ctx.fillStyle = `${IVORY}${((fade - 0.5) * 1.8).toFixed(2)})`
          ctx.fill()
        }
      })

      state.raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(state.raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,          // entre imagen de fondo (z=0) y gradientes (z=2)
        opacity: 0.92,
        ...style,
      }}
    />
  )
}
