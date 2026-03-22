<script lang="ts">
  import {
    Github,
    Twitter,
    Linkedin,
    ArrowRight,
    Terminal,
  } from "@lucide/svelte";

  // Recibimos los datos del +page.ts
  let { data } = $props();
</script>

<svelte:head>
  <title>Andres Martin | Graphics & Vision Engineer</title>
</svelte:head>

<div class="full-width-breakout">
  <main class="home-container">
    <section class="hero-section">
      <div class="hero-content">
        <h1>Architecting infrastructure<br />for the 3D web.</h1>
        <p class="subtitle">
          Programmer & Computer Vision Engineer focused on low-level web
          ecosystems (<strong>WebGPU</strong>, <strong>Rust</strong>) to push
          the boundaries of spatial computing and real-time visual tools.
        </p>
        <div class="action-links">
          <a href="/projects" class="primary-btn"
            >View Projects <ArrowRight size={16} /></a
          >
          <div class="social-links">
            <a
              href="https://github.com/andrewm09"
              target="_blank"
              aria-label="GitHub"><Github size={20} /></a
            >
            <a
              href="https://x.com/amartsushiro"
              target="_blank"
              aria-label="X (Twitter)"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="x-icon"
              >
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg></a
            >
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="avatar-container">
          <div class="avatar-halo"></div>
          <img src="/avatar.png" alt="Andres Martin" class="avatar" />
        </div>
      </div>
    </section>

    <section class="bento-dashboard">
      {#if data.latestPost}
        <a
          href="/blog/{data.latestPost.slug}"
          class="bento-card blog-highlight"
        >
          <div class="card-tag">Latest Technical Note</div>
          <h2>{data.latestPost.title}</h2>
          <p>{data.latestPost.excerpt}</p>
          <span class="read-link">Read Article →</span>
        </a>
      {/if}

      <!-- <a
        href="https://kudo.graphics"
        target="_blank"
        class="bento-card project-highlight"
      >
        <div class="card-tag tag-kudo">Flagship Project</div>
        <h2>Kudo Engine</h2>
        <p>
          Node-based 3D generation engine built natively for the web. Bypassing
          desktop tools for AI accessory generation.
        </p>
        <div class="tech-stack-dark">
          <span>WebGPU</span><span>Rust</span><span>GenAI</span>
        </div>
      </a> -->

      <a href="/vrm-inspector" class="bento-card tool-card">
        <div class="card-tag tag-emerald">Live Tool</div>
        <h3>VRM Inspector</h3>
        <p>In-browser diagnostic tool for Technical Artists.</p>
        <span class="read-link">Launch Tool →</span>
      </a>

      <div class="bento-card terminal-card">
        <div class="terminal-header">
          <Terminal size={14} /> <span>~/contact</span>
        </div>
        <div class="terminal-body">
          <!-- <p><span class="prompt">$</span> contact --email</p>
          <p class="output">andres@kudo.graphics</p> -->
          <p><span class="prompt">$</span> status</p>
          <p class="output">Open to interesting engineering challenges.</p>
        </div>
      </div>
    </section>
  </main>
</div>

<style>
  :root {
    --text-main: #1e293b;
    --text-muted: #64748b;
    --accent: #6366f1;
    --bg-surface: #ffffff;
    --border-color: #e2e8f0;
  }

  .full-width-breakout {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    background: transparent;
  }

  .home-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem 8rem;
  }

  /* === HERO SECTION === */
  .hero-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    margin-bottom: 6rem;
  }
  .hero-content {
    flex: 1;
    max-width: 700px;
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 2rem;
  }
  .pulse {
    width: 8px;
    height: 8px;
    background-color: #10b981;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
    animation: pulse-animation 2s infinite;
  }
  @keyframes pulse-animation {
    0% {
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
    }
    70% {
      box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
    }
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1.1;
    margin: 0 0 1.5rem 0;
    color: var(--text-main);
    letter-spacing: -0.03em;
    font-weight: 800;
  }
  .subtitle {
    font-size: 1.2rem;
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 2.5rem;
  }
  .subtitle strong {
    color: var(--text-main);
    font-weight: 600;
  }

  .action-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .primary-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--text-main);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;
  }
  .primary-btn:hover {
    background: var(--accent);
    transform: translateY(-2px);
  }
  .social-links {
    display: flex;
    gap: 1rem;
  }
  .social-links a {
    color: var(--text-muted);
    transition: color 0.2s ease;
  }
  .social-links a:hover {
    color: var(--text-main);
  }

  .hero-visual {
    flex-shrink: 0;
  }
  .avatar-container {
    position: relative;
    width: 180px;
    height: 180px;
  }
  .avatar-halo {
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    background: linear-gradient(135deg, #eef2ff 0%, #e2e8f0 100%);
    z-index: 0;
  }
  .avatar {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid white;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }

  /* === BENTO DASHBOARD === */
  .bento-dashboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(180px, auto);
    gap: 1.5rem;
  }
  .bento-card {
    background: var(--bg-surface);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 2rem;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease,
      border-color 0.3s ease;
  }
  .bento-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
  }
  a.bento-card:hover {
    border-color: #cbd5e1;
  }

  .card-tag {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
    color: var(--text-muted);
  }
  .tag-emerald {
    color: #10b981;
  }

  .bento-card h2 {
    font-size: 1.6rem;
    color: var(--text-main);
    margin: 0 0 1rem 0;
    line-height: 1.3;
  }
  .bento-card h3 {
    font-size: 1.3rem;
    color: var(--text-main);
    margin: 0 0 0.5rem 0;
  }
  .bento-card p {
    font-size: 1rem;
    color: var(--text-muted);
    line-height: 1.6;
    margin: 0 0 1.5rem 0;
    flex: 1;
  }
  .read-link {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--accent);
    margin-top: auto;
  }

  /* Distribución del Grid y Estilos Específicos */
  .blog-highlight {
    grid-column: span 2;
    grid-row: span 2;
    background: #f8fafc;
    border: none;
  }
  .blog-highlight:hover {
    background: #f1f5f9;
  }

  /* ESTILOS DE LA TARJETA KUDO (Azul Oscuro) */
  .project-highlight {
    grid-column: span 2;
    grid-row: span 1;
    background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
    border: none;
    color: white;
  }
  .project-highlight h2 {
    color: #ffffff;
  }
  .project-highlight p {
    color: #93c5fd;
  } /* Azul muy clarito para legibilidad */
  .project-highlight .tag-kudo {
    color: #60a5fa;
    background: rgba(59, 130, 246, 0.2);
    display: inline-block;
    padding: 4px 10px;
    border-radius: 100px;
    width: fit-content;
  }
  .project-highlight:hover {
    box-shadow: 0 20px 30px -5px rgba(30, 58, 138, 0.4);
    transform: translateY(-4px);
  }

  .tech-stack-dark {
    display: flex;
    gap: 8px;
    margin-top: auto;
  }
  .tech-stack-dark span {
    font-size: 0.75rem;
    font-family: monospace;
    background: rgba(255, 255, 255, 0.1);
    color: #bfdbfe;
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .tool-card {
    grid-column: span 1;
    grid-row: span 1;
  }
  .terminal-card {
    grid-column: span 1;
    grid-row: span 1;
    background: #0f172a;
    color: #f8fafc;
    border: none;
    padding: 1.5rem;
  }

  .terminal-header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: monospace;
    font-size: 0.8rem;
    color: #94a3b8;
    border-bottom: 1px solid #1e293b;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .terminal-body p {
    margin: 0 0 8px 0;
    font-family: monospace;
    font-size: 0.85rem;
    color: #e2e8f0;
  }
  .terminal-body .prompt {
    color: #10b981;
    margin-right: 6px;
  }
  .terminal-body .output {
    color: #94a3b8;
    margin-bottom: 15px;
  }

  @media (max-width: 900px) {
    .bento-dashboard {
      grid-template-columns: repeat(2, 1fr);
    }
    .blog-highlight,
    .project-highlight {
      grid-column: span 2;
    }
    .tool-card,
    .terminal-card {
      grid-column: span 1;
    }
  }

  @media (max-width: 768px) {
    .hero-section {
      flex-direction: column-reverse;
      align-items: flex-start;
      gap: 2rem;
      margin-bottom: 4rem;
    }
    .hero-content {
      max-width: 100%;
    }
    .avatar-container {
      width: 120px;
      height: 120px;
    }
    .bento-dashboard {
      grid-template-columns: 1fr;
    }
    .tool-card,
    .terminal-card {
      grid-column: span 2;
    }
  }
</style>
