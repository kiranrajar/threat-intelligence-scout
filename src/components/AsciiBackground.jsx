import React, { useEffect, useRef } from 'react';

export default function AsciiBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    const chars = '01+-*/=<>$#@%&?!|[]{}~^';

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let time = 0;
    const cols = Math.floor(width / 24);
    const rows = Math.floor(height / 24);

    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);
      ctx.font = '11px "JetBrains Mono", monospace';

      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const wave = Math.sin(x * 0.15 + time) * Math.cos(y * 0.15 + time);
          if (wave > 0.1) {
            const charIdx = Math.floor(Math.abs(wave * chars.length)) % chars.length;
            const alpha = (wave * 0.35).toFixed(2);
            
            ctx.fillStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.fillText(chars[charIdx], x * 24 + 10, y * 24 + 16);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
    />
  );
}
