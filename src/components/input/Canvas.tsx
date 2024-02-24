import { useLayoutEffect, useRef } from "react";

export const Canvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  useLayoutEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, []);
  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      }}
      onTouchMove={(e) => {
        const ctx = ref.current?.getContext("2d");
        if (!ctx) return;

        ctx.lineWidth = 4;
        ctx.strokeStyle = "#555";
        ctx.lineJoin = "round";

        Array.from(e.touches).forEach((touch) => {
          const x = touch.clientX
          const y = touch.clientY
          console.log(x, y);

          ctx.beginPath();
          ctx.moveTo(x - 1, y - 1)
          ctx.lineTo(x, y);
          ctx.closePath();
          ctx.stroke();
        })
      }}
    />
  )
};
