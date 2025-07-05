"use client";

export default function NeonGrid() {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="w-full h-full opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 255, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          animation: "gridScroll 60s linear infinite",
        }}
      />
      <style jsx global>{`
        @keyframes gridScroll {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 1000px 1000px;
          }
        }
      `}</style>
    </div>
  );
}
