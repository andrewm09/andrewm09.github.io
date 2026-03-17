<script lang="ts">
  import "../app.css"; // <-- ESTO ES VITAL PARA QUE NO SE VEA COMO HTML DE LOS 90s

  // Svelte 5: Así se reciben los hijos ahora
  let { children } = $props();
</script>

<nav class="navbar">
  <div class="container nav-content">
    <a href="/" class="logo">andres_martin<span>_</span></a>
    <div class="links">
      <a href="/blog">Blog</a>
      <a href="/contact">Contact</a>
      <a href="/projects">Projects</a>
      <a href="https://github.com/andrewm09" target="_blank" rel="noopener"
        >GitHub</a
      >
    </div>
  </div>
</nav>

<main class="container">
  {@render children()}
</main>

<footer class="global-footer">
  <div class="footer-content">
    <div class="footer-left">
      <span>© 2026 Andres Martin</span>
    </div>

    <div class="footer-right">
      <a href="/contact">Email</a>
      <a href="https://github.com/andrewm09" target="_blank" aria-label="GitHub"
        >GitHub</a
      >
      <a
        href="https://x.com/amartsushiro"
        target="_blank"
        aria-label="X (Twitter)">X (Twitter)</a
      >
    </div>
  </div>
</footer>

<style>
  :global(body) {
    background-color: white; /* O el color que uses en tu blog */
    margin: 0;
    transition: background-color 0.2s ease; /* Opcional: para que el cambio no sea brusco */
  }
  .navbar {
    border-bottom: 1px solid var(--border-color);
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 1rem;
  }

  .logo {
    font-family: var(--font-mono);
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--text-main);
    text-decoration: none;
    letter-spacing: -0.02em;
  }

  .logo span {
    color: var(--accent);
    animation: blink 1s step-end infinite;
  }

  .links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .links a {
    color: var(--text-muted);
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .links a:hover {
    color: var(--text-main);
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  /* Agrega esto al final de tu <style> en +layout.svelte */
  @media (max-width: 600px) {
    .nav-content {
      flex-direction: column; /* Apila el logo y los enlaces */
      gap: 1rem;
      padding: 1rem;
    }

    .links {
      width: 100%;
      justify-content: center; /* Centra los enlaces */
      flex-wrap: wrap; /* Si hay muchos enlaces, los pasa a la siguiente línea */
      gap: 1.2rem;
    }
  }

  .global-footer {
    border-top: 1px solid #e2e8f0;
    padding: 2rem 0;
    margin-top: 4rem; /* Empuja el footer hacia abajo */
    background: white;
  }

  .footer-content {
    max-width: 1200px; /* Alineado con tu homepage */
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    color: #64748b;
  }

  .footer-center {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: monospace;
  }

  .status-dot {
    width: 6px;
    height: 6px;
    background-color: #10b981;
    border-radius: 50%;
  }

  .footer-right {
    display: flex;
    gap: 1.5rem;
  }

  .footer-right a {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
  }

  .footer-right a:hover {
    color: #1e293b;
  }

  @media (max-width: 600px) {
    .footer-content {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  }

  /* Corta el scroll horizontal en todo el sitio */
  :global(body, html) {
    overflow-x: hidden;
    max-width: 100%;
  }
</style>
