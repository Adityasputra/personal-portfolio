<div className="relative min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 overflow-hidden">
  {/* Grid Pattern */}
  <div
    className="absolute inset-0 pointer-events-none z-0"
    aria-hidden="true"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
      `,
      backgroundSize: "32px 32px",
      maskImage:
        "radial-gradient(circle at center, rgba(0,0,0,1), rgba(0,0,0,0.2))",
    }}
  />

  <div className="relative z-10 p-12 text-center">
    <h1 className="text-5xl font-bold mb-4">Aditya Saputra</h1>
    <p className="text-lg font-light text-neutral-600 dark:text-neutral-300">
      hello
    </p>
  </div>
</div>;
