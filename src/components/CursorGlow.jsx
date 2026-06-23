import React, { useEffect, useRef } from 'react'
import './CursorGlow.css'

function CursorGlow({ position }) {
  const glowRef = useRef(null)

  useEffect(() => {
    if (!glowRef.current) return

    const updateGlow = () => {
      if (glowRef.current) {
        glowRef.current.style.left = position.x + 'px'
        glowRef.current.style.top = position.y + 'px'
      }
    }

    updateGlow()
  }, [position])

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
}

export default CursorGlow
