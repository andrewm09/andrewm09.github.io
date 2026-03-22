<svelte:head>
  <title>Engineering Portfolio | Andres Martin</title>
</svelte:head>

<div class="full-width-breakout">
  <main class="projects-container">
    <header class="hero-section">
      <h1>Engineering Portfolio</h1>
      <p>
        A selection of tools, engines, and experiments focusing on 3D graphics, 
        Computer Vision, and high-performance web infrastructure.
      </p>
    </header>

    <section class="bento-grid">
      <article class="bento-item kudo-card">
        <div class="thumbnail kudo-thumb">
          <div class="mesh-pattern"></div>
        </div>
        <!-- <div class="content">
          <div class="meta">
            <span class="badge">Flagship Project</span>
            <a href="https://kudo.graphics/" class="launch-btn">Launch Site →</a>
          </div>
          <h2>Kudo<small>(WIP)</small></h2>
          <p>
            A node-based 3D generation engine built natively for the web. 
            Designed to bypass desktop tools like Unity, allowing for AI accessory 
            generation and SpringBone physics handling directly in-browser.
          </p>
        </div> -->
      </article>

      <article class="bento-item inspector-card">
        <div class="thumbnail inspector-thumb">
          <div class="bone-hierarchy-preview">
            <div class="line"></div><div class="line"></div><div class="line"></div>
          </div>
        </div>
        <div class="content">
          <h3>VRM & GLTF Inspector</h3>
          <p>
            Diagnostic tool for Technical Artists. Visualizes bone hierarchies 
            and SpringBone physics.
          </p>
          <div class="privacy-disclaimer">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Processed locally in your browser.
          </div>
          <div class="tech-stack">
            <span>SvelteKit</span><span>Three.js</span>
          </div>
          <a href="/vrm-inspector" class="launch-btn">Launch Tool →</a>
        </div>
      </article>

      <article class="bento-item ide-card">
        <div class="content">
          <div class="header-inline">
            <h3>Venara Editor</h3>
            <div class="tech-stack">
              <span>Rust (Tauri)</span><span>Python</span><span>OpenCV</span>
            </div>
          </div>
          <p>
            Native desktop environment designed for Computer Vision development, 
            isolating camera streams to enable true hot-reloading.
          </p>
          <a href="https://github.com/andrewm09" target="_blank" class="github-link">GitHub</a>
        </div>
      </article>

      <article class="bento-item info-card">
        <div class="content">
          <div class="stat-group">
            <span class="number">2026</span>
            <span class="label">Current Roadmap</span>
          </div>
          <p>Focusing on WebGPU and low-level graphics optimization.</p>
        </div>
      </article>
    </section>
  </main>
</div>

<style>
  :root {
    --card-bg: #ffffff;
    --card-border: #e2e8f0;
    --accent-indigo: #6366f1;
    --text-slate: #475569;
    --text-main: #1e293b;
  }

  /* === TRUCO DE ESCAPE LIMPIO === */
  .full-width-breakout {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    background: transparent; /* <- ESTO QUITA LA FRANJA BLANCA/GRIS */
  }

  .projects-container {
    max-width: 1200px; /* Ancho amplio pero controlado */
    margin: 0 auto;
    padding: 2rem; /* Padding normal, no exagerado */
  }
  /* ============================== */

  .hero-section { margin-bottom: 3rem; }
  .hero-section h1 { 
    font-size: 2.5rem; /* Tamaño normal, no zoom */
    color: var(--text-main); 
    margin-bottom: 1rem; 
    font-weight: 800; 
    letter-spacing: -0.02em; 
  }
  .hero-section p { 
    font-size: 1.15rem; 
    color: var(--text-slate); 
    max-width: 600px; 
    line-height: 1.6; 
  }

  /* BENTO GRID SYSTEM */
  .bento-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(180px, auto); /* Altura normal */
    gap: 1.5rem; /* Separación limpia pero no gigante */
  }

  .bento-item {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 16px; /* Bordes menos exagerados */
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.3s ease;
  }

  .bento-item:hover { 
    transform: translateY(-5px); 
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05); 
  }

  .kudo-card { grid-column: span 2; grid-row: span 2; }
  .inspector-card { grid-column: span 1; grid-row: span 2; }
  .ide-card { grid-column: span 2; }

  /* THUMBNAILS MÁS COMPACTOS */
  .thumbnail { height: 200px; position: relative; overflow: hidden; }
  .kudo-thumb { background: linear-gradient(135deg, #1e293b 0%, #334155 100%); height: 260px; }
  .mesh-pattern { position: absolute; inset: 0; opacity: 0.15; background-image: radial-gradient(#6366f1 1px, transparent 1px); background-size: 20px 20px; }
  .inspector-thumb { background: #f1f5f9; display: flex; align-items: center; justify-content: center; height: 100%; }

  .bone-hierarchy-preview { width: 60%; height: 100px; border-left: 2px solid var(--accent-indigo); padding-left: 15px; display: flex; flex-direction: column; justify-content: center; gap: 15px; }
  .bone-hierarchy-preview .line { height: 2px; background: var(--accent-indigo); opacity: 0.3; width: 80%; }

  /* CONTENIDO EN PROPORCIÓN */
  .content { padding: 1.5rem; display: flex; flex-direction: column; flex: 1; gap: 0.75rem; }
  
  .meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem; }
  .header-inline { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem; }
  .badge { font-size: 0.65rem; text-transform: uppercase; font-weight: 700; background: rgba(99, 102, 241, 0.1); color: var(--accent-indigo); padding: 0.3rem 0.6rem; border-radius: 99px; }
  
  h2 { font-size: 1.5rem; margin: 0; color: var(--text-main); }
  h2 small { font-size: 0.9rem; color: #94a3b8; font-weight: 400; margin-left: 6px; }
  h3 { font-size: 1.25rem; margin: 0; color: var(--text-main); }
  p { font-size: 0.95rem; color: var(--text-slate); line-height: 1.5; margin: 0; }

  .tech-stack { display: flex; gap: 0.5rem; margin-top: auto; }
  .tech-stack span { font-size: 0.75rem; font-family: monospace; background: #f8fafc; color: #64748b; padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid #f1f5f9; }

  .privacy-disclaimer { display: flex; align-items: center; gap: 6px; font-size: 0.75rem; color: #059669; font-weight: 600; }
  .launch-btn, .github-link { display: inline-flex; align-items: center; font-weight: 600; color: var(--accent-indigo); text-decoration: none; font-size: 0.9rem; transition: transform 0.2s; margin-top: 0.5rem;}
  .launch-btn:hover { transform: translateX(4px); }
  .status { font-size: 0.75rem; color: #94a3b8; font-family: monospace; }

  .info-card { background: var(--accent-indigo); color: white; border: none; }
  .info-card p { color: rgba(255, 255, 255, 0.9); }
  .stat-group .number { display: block; font-size: 2rem; font-weight: 800; line-height: 1; margin-bottom: 0.25rem; }
  .stat-group .label { font-size: 0.7rem; text-transform: uppercase; font-weight: 700; opacity: 0.8; }

  .portfolio-footer { margin-top: 5rem; text-align: center; padding: 2rem 0; border-top: 1px solid var(--card-border); color: #94a3b8; font-size: 0.85rem;}

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .bento-grid { grid-template-columns: 1fr; }
    .kudo-card, .inspector-card, .ide-card { grid-column: span 1; grid-row: span 1; }
  }
</style>