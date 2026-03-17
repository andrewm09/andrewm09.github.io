<svelte:head>
  <title>Andres Martin | Graphics & Vision Engineer</title>
</svelte:head>

<section class="hero">
  <div class="hero-text">
    <h1>Architecting infrastructure <br /> for the 3D.</h1>
    <p class="subtitle">
      Graphics Programmer & Computer Vision Engineer. Focused on low-level web
      ecosystems (WebGL, WebGPU, Rust) to push the boundaries of spatial
      computing and real-time visual tools.
    </p>
  </div>

  <div class="hero-visuals">
    <img src="/avatar.png" alt="Andres Martin" class="avatar" />
  </div>
</section>

<section class="projects-preview">
  <h2>Featured Tools & Engines</h2>

  <div class="card">
    <div class="card-header">
      <h3>VRM Inspector</h3>
    </div>
    <p>
      A zero-friction web tool to parse, diagnose, and visualize .vrm and .gltf
      files directly in the browser.
    </p>
    <a href="/vrm-inspector" class="card-link">View Project →</a>
  </div>

  <!-- <div class="card">
    <div class="card-header">
      <h3>OpenCV Live IDE</h3>
    </div>
    <p>Isolated live-coding environment for Computer Vision. Hot-reloads without blocking the camera stream.</p>
    <a href="https://github.com/andrewm09" class="card-link">View Repository →</a>
  </div> -->
</section>

<style>
  .hero {
    margin: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  .hero-text {
    flex: 1;
  }
  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: var(--text-main);
    letter-spacing: -0.02em;
  }
  .subtitle {
    font-size: 1.1rem;
    color: var(--text-muted);
    max-width: 550px;
    line-height: 1.7;
  }
  .subtitle strong {
    color: var(--text-main);
    font-weight: 600;
  }

  .hero-visuals {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid var(--border-color);
  }

  /* --- 3D CSS Cube --- */
  .scene {
    width: 60px;
    height: 60px;
    perspective: 400px;
  }
  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    animation: rotate 10s infinite linear;
  }
  .face {
    position: absolute;
    width: 60px;
    height: 60px;
    border: 1px solid var(--accent);
    background: rgba(9, 105, 218, 0.1);
  }
  .front {
    transform: rotateY(0deg) translateZ(30px);
  }
  .back {
    transform: rotateY(180deg) translateZ(30px);
  }
  .right {
    transform: rotateY(90deg) translateZ(30px);
  }
  .left {
    transform: rotateY(-90deg) translateZ(30px);
  }
  .top {
    transform: rotateX(90deg) translateZ(30px);
  }
  .bottom {
    transform: rotateX(-90deg) translateZ(30px);
  }
  @keyframes rotate {
    from {
      transform: rotateX(0deg) rotateY(0deg);
    }
    to {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
  /* ------------------- */

  @media (max-width: 768px) {
    .hero {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
    .hero-visuals {
      margin-bottom: 2rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
  }
  .card {
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    background: var(--bg-surface);
  }
  .card-header {
    margin-bottom: 0.5rem;
  }
  .card-header h3 {
    margin: 0;
    font-size: 1.2rem;
  }
  .card p {
    color: var(--text-muted);
    margin-bottom: 1rem;
  }
  .card-link {
    font-weight: 500;
    color: var(--accent);
  }

  /* Agrega esto al final de tu <style> en +page.svelte */
  @media (max-width: 768px) {
    .hero {
      flex-direction: column-reverse; /* Pone el texto abajo y la foto arriba */
      text-align: center; /* Centra el texto en móviles */
      gap: 1.5rem;
      margin: 2rem 0;
    }

    .subtitle {
      margin: 0 auto; /* Centra el subtítulo */
    }

    .hero-visuals {
      justify-content: center;
      width: 100%;
    }

    .avatar {
      width: 100px; /* Foto ligeramente más pequeña en celular */
      height: 100px;
    }

    /* Las tarjetas de proyectos ocupan el 100% y tienen menos padding */
    .card {
      padding: 1.2rem;
    }

    .card-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }
</style>
