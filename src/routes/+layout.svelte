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
</style>
