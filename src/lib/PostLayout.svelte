<script>
  import { ArrowLeft, Calendar } from "@lucide/svelte";

  // MDSvex pasa el frontmatter del Markdown a esta variable
  let { children, title, date, excerpt } = $props();

  function formatDate(dateString) {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
</script>

<svelte:head>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css"
    rel="stylesheet"
  />
</svelte:head>

<div class="article-wrapper">
  <div class="nav-wrapper">
    <a href="/blog" class="back-link">
      <ArrowLeft size={16} /> Back to Notes
    </a>
  </div>

  <article class="post-container">
    <header class="post-header">
      <h1>{title}</h1>
      <div class="meta-data">
        <span><Calendar size={14} /> {formatDate(date)}</span>
      </div>
    </header>

    <hr class="header-divider" />

    <div class="prose">
      {@render children()}
    </div>
  </article>
</div>

<style>
  .article-wrapper {
    background: #ffffff;
    min-height: 100vh;
  }

  .nav-wrapper {
    max-width: 700px;
    margin: 0 auto;
    padding: 3rem 1.5rem 0;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #94a3b8;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.2s;
  }
  .back-link:hover {
    color: #1e293b;
  }

  .post-container {
    max-width: 700px; /* Ancho perfecto para leer */
    margin: 0 auto;
    padding: 2rem 1.5rem 6rem;
  }

  .post-header {
    margin-bottom: 2rem;
  }

  .post-header h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    color: #1e293b;
    line-height: 1.2;
    letter-spacing: -0.03em;
    font-weight: 800;
    margin: 0 0 1rem 0;
  }

  .meta-data {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #64748b;
    font-size: 0.9rem;
    font-weight: 500;
    font-family: monospace;
  }

  .header-divider {
    border: 0;
    height: 1px;
    background: #e2e8f0;
    margin: 0 0 3rem 0;
  }

  /* ========================================================
     LA CLASE PROSE: Estiliza todo el HTML que genera el Markdown 
     ======================================================== */
  :global(.prose) {
    color: #475569;
    font-size: 1.125rem;
    line-height: 1.75;
  }
  :global(.prose p) {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }
  :global(.prose h2) {
    color: #1e293b;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 3rem 0 1rem;
    line-height: 1.3;
  }
  :global(.prose h3) {
    color: #1e293b;
    font-size: 1.4rem;
    font-weight: 600;
    margin: 2.5rem 0 1rem;
  }
  :global(.prose a) {
    color: #6366f1;
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: color 0.2s;
  }
  :global(.prose a:hover) {
    color: #4f46e5;
    text-decoration-thickness: 2px;
  }
  :global(.prose ul, .prose ol) {
    margin-top: 0;
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  :global(.prose li) {
    margin-bottom: 0.5rem;
  }
  :global(.prose blockquote) {
    margin: 2.5rem 0;
    padding: 1.5rem 2rem;
    border-left: 4px solid #6366f1;
    background: #f8fafc;
    border-radius: 0 12px 12px 0;
    font-size: 1.25rem;
    font-style: italic;
    color: #1e293b;
  }
  /* Estilo base del bloque */
  :global(.prose pre) {
    background: #0f172a;
    color: #f8fafc;
    padding: 1.5rem;
    border-radius: 12px;
    overflow-x: auto;
    margin: 2.5rem 0;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
    font-size: 0.9rem;
  }
  :global(.prose code:not(pre code)) {
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    padding: 0.2em 0.4em;
    border-radius: 6px;
    font-family: monospace;
    font-size: 0.85em;
    color: #e11d48;
  }
  /* Reseteo forzoso para el código dentro de bloques oscuros */
  :global(.prose pre code) {
    background: transparent !important;
    border: none !important;
    padding: 0 !important;
    color: inherit !important;
  }

  /* 1. BREAKOUT EN ESCRITORIO
    Hace que el código sea 4rem (64px) más ancho que el texto,
    saliéndose elegantemente por los lados.
  */
  @media (min-width: 768px) {
    :global(.prose pre) {
      width: auto !important; /* Dejamos que los márgenes dicten el ancho */
      margin-left: -2.5rem !important; /* Lo jalamos a la izquierda */
      margin-right: -2.5rem !important; /* Lo empujamos a la derecha */
    }
  }

  /* 2. FULL BLEED EN MÓVIL
    Hace que el código toque los bordes de la pantalla (100vw).
    Quitamos los bordes redondeados y reducimos el padding para ganar espacio.
  */
  @media (max-width: 767px) {
    :global(.prose pre) {
      width: 100vw;
      margin-left: calc(-50vw + 50%);
      border-radius: 0;

      /* ESTAS DOS LÍNEAS SON LA MAGIA: */
      box-sizing: border-box;
      padding: 1.2rem 1.5rem !important; /* Forzamos el margen interno izquierdo y derecho */

      font-size: 0.85rem;
      border-top: 1px solid #1e293b;
      border-bottom: 1px solid #1e293b;
    }
  }

  /* 3. SCROLLBAR ELEGANTE (Solo para los bloques de código) */
  :global(.prose pre::-webkit-scrollbar) {
    height: 8px; /* Scrollbar más delgada */
  }
  :global(.prose pre::-webkit-scrollbar-track) {
    background: #0f172a;
    border-radius: 0 0 12px 12px;
  }
  :global(.prose pre::-webkit-scrollbar-thumb) {
    background: #334155;
    border-radius: 4px;
  }
  :global(.prose pre::-webkit-scrollbar-thumb:hover) {
    background: #475569;
  }
</style>
