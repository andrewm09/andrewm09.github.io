<script lang="ts">
  import { ArrowRight, Calendar } from '@lucide/svelte';
  let { data } = $props();

  // Convierte la fecha a un formato elegante y legible
  function formatDate(dateString: string) {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
</script>

<svelte:head>
  <title>Technical Notes | Andres Martin</title>
</svelte:head>

<div class="blog-container">
  <header class="blog-header">
    <h1>Technical Notes</h1>
    <p>
      Writing about 3D engineering, WebGPU, Rust, and low-level software building.
    </p>
  </header>

  <div class="post-list">
    {#if data.posts && data.posts.length > 0}
      {#each data.posts as post}
        <a href="/blog/{post.slug}" class="post-card">
          <article>
            <div class="post-meta">
              <time datetime={post.date}>
                <Calendar size={14} class="calendar-icon" /> 
                {formatDate(post.date)}
              </time>
              
              {#if post.tags && post.tags.length > 0}
                <span class="separator">•</span>
                <span class="tag">{post.tags[0]}</span>
              {/if}
            </div>
            
            <div class="post-content">
              <h2>{post.title}</h2>
              <div class="icon-wrapper">
                <ArrowRight size={18} class="arrow-icon" />
              </div>
            </div>
            
            <p class="excerpt">{post.excerpt}</p>
          </article>
        </a>
      {/each}
    {:else}
      <div class="empty-state">
        <p>No posts found yet.</p>
      </div>
    {/if}
  </div>
</div>

<style>
  /* === CONTENEDOR PRINCIPAL === */
  .blog-container {
    max-width: 800px; /* Ancho óptimo para lectura y listados */
    margin: 0 auto;
    padding: 6rem 2rem;
  }

  /* === CABECERA === */
  .blog-header {
    margin-bottom: 4rem;
  }

  .blog-header h1 {
    font-size: 3rem;
    letter-spacing: -0.03em;
    margin: 0 0 1rem 0;
    color: #1e293b;
    font-weight: 800;
  }

  .blog-header p {
    font-size: 1.15rem;
    color: #64748b;
    max-width: 600px;
    line-height: 1.6;
    margin: 0;
  }

  /* === LISTA DE POSTS === */
  .post-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  /* === TARJETAS INTERACTIVAS === */
  .post-card {
    display: block;
    text-decoration: none;
    padding: 2.5rem;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .post-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.05);
    border-color: #cbd5e1;
  }

  /* Efecto en la flecha al hacer hover en la tarjeta */
  .post-card:hover .arrow-icon {
    transform: translateX(6px);
    color: #6366f1;
  }

  .post-card:hover .icon-wrapper {
    background: #eef2ff;
  }

  /* === METADATOS (Fecha y Tags) === */
  .post-meta {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1rem;
    font-family: monospace;
    font-size: 0.85rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .post-meta time {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #64748b;
  }

  .calendar-icon {
    opacity: 0.7;
  }

  .separator { 
    color: #cbd5e1; 
  }
  
  .tag { 
    color: #6366f1; 
    font-weight: 700; 
  }

  /* === TÍTULO Y EXTRACTO === */
  .post-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .post-content h2 {
    font-size: 1.6rem;
    margin: 0;
    color: #1e293b;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.01em;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: transparent;
    transition: background 0.3s ease;
    flex-shrink: 0; /* Evita que el ícono se aplaste si el título es largo */
  }

  .arrow-icon {
    color: #cbd5e1;
    transition: all 0.3s ease;
  }

  .excerpt {
    margin: 0;
    color: #475569;
    line-height: 1.6;
    font-size: 1.05rem;
  }

  /* === ESTADO VACÍO === */
  .empty-state {
    padding: 4rem;
    text-align: center;
    color: #94a3b8;
    font-style: italic;
    background: #f8fafc;
    border-radius: 20px;
    border: 1px dashed #cbd5e1;
  }

  /* === RESPONSIVE === */
  @media (max-width: 768px) {
    .blog-container { padding: 4rem 1.5rem; }
    .blog-header { margin-bottom: 3rem; }
    .blog-header h1 { font-size: 2.2rem; }
    .post-card { padding: 1.5rem; }
    .post-content h2 { font-size: 1.3rem; }
  }
</style>