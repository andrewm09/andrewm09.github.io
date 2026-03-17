<svelte:head>
  <title>Projects & Architecture | Andres Martin</title>
</svelte:head>

<div class="projects-header">
  <h1>Engineering Portfolio</h1>
  <p>A selection of tools, engines, and experiments I've built focusing on 3D graphics, Computer Vision, and web infrastructure.</p>
</div>

<div class="projects-grid">
  <article class="project-card">
    <div class="project-meta">
      <h2>Kudo Engine <span>(WIP)</span></h2>
      <div class="tech-stack">
        <span>WebGPU</span><span>Node-based</span><span>GenAI</span>
      </div>
    </div>
    <p>
      A node-based 3D generation and composition engine built natively for the web. 
      Designed to bypass heavy desktop tools like Unity, it allows users to import VRM avatars, generate accessories via AI, handle SpringBone physics, and re-export in minutes.
    </p>
    <div class="project-links">
      <span class="status">Private Repository</span>
    </div>
  </article>

  <article class="project-card">
    <div class="project-meta">
      <h2>OpenCV Live IDE</h2>
      <div class="tech-stack">
        <span>Rust (Tauri)</span><span>Python</span><span>OpenCV</span>
      </div>
    </div>
    <p>
      A native desktop environment designed specifically for Computer Vision development. 
      Solves the freezing kernel issue in Jupyter notebooks by isolating the camera stream buffer from the Python execution thread, enabling true hot-reloading for OpenCV scripts.
    </p>
    <div class="project-links">
      <a href="https://github.com/andrewm09" target="_blank">View on GitHub →</a>
    </div>
  </article>

  <article class="project-card">
    <div class="project-meta">
      <h2>VRM & GLTF Inspector</h2>
      <div class="tech-stack">
        <span>SvelteKit</span><span>Three.js</span>
      </div>
    </div>
    <p>
      A client-side only diagnostic tool for Technical Artists and developers. 
      Drag and drop any .vrm or .gltf file to instantly parse JSON extensions, visualize topology, and debug bone hierarchies without opening Blender.
    </p>
    <!-- <div class="project-links">
      <a href="/vrm-inspector">Launch Tool →</a>
    </div> -->
  </article>
</div>

<style>
  .projects-header { margin: 3rem 0; border-bottom: 1px solid var(--border-color); padding-bottom: 2rem; }
  .projects-header h1 { margin-bottom: 0.5rem; color: var(--text-main); }
  .projects-header p { color: var(--text-muted); font-size: 1.1rem; max-width: 650px; }
  
  .projects-grid { display: flex; flex-direction: column; gap: 2.5rem; margin-bottom: 4rem; }
  
  .project-card {
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 2rem;
    background: var(--bg-surface);
  }
  
  .project-meta { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem; }
  .project-meta h2 { margin: 0; font-size: 1.5rem; }
  .project-meta h2 span { font-size: 0.9rem; font-weight: normal; color: var(--text-muted); font-family: var(--font-mono); }
  
  .tech-stack { display: flex; gap: 0.5rem; flex-wrap: wrap; }
  .tech-stack span { 
    font-family: var(--font-mono); font-size: 0.8rem; 
    background: #e0ebf5; color: var(--accent); 
    padding: 0.2rem 0.6rem; border-radius: 4px; 
  }
  
  .project-card p { color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem; font-size: 1.05rem; }
  
  .project-links a { font-weight: 500; color: var(--accent); text-decoration: none; }
  .project-links a:hover { text-decoration: underline; }
  .status { font-family: var(--font-mono); font-size: 0.9rem; color: var(--text-muted); }
</style>