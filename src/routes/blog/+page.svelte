<script lang="ts">
  let { data } = $props();

  // Convierte la fecha fea a un formato legible en inglés
  function formatDate(dateString: string) {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
</script>

<svelte:head>
  <title>Blog | Andres Martin</title>
</svelte:head>

<div class="blog-header">
  <h1>Technical Notes & Thoughts</h1>
  <p>
    Writing about 3D engineering, WebGPU, Rust, and low-level software building.
  </p>
</div>

<div class="post-list">
  {#if data.posts && data.posts.length > 0}
    {#each data.posts as post}
      <article class="post-item">
        <time datetime={post.date}>{formatDate(post.date)}</time>
        <h2><a href="/blog/{post.slug}">{post.title}</a></h2>
        <p>{post.excerpt}</p>
      </article>
    {/each}
  {:else}
    <p class="empty-state">No posts found yet.</p>
  {/if}
</div>

<style>
  .blog-header {
    margin: 3rem 0 4rem 0;
  }

  .blog-header h1 {
    font-size: 2.5rem;
    letter-spacing: -0.02em;
    margin-bottom: 0.5rem;
    color: var(--text-main);
  }

  .blog-header p {
    font-size: 1.15rem;
    color: var(--text-muted);
    max-width: 600px;
  }

  .post-list {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 4rem;
  }

  .post-item {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .post-item time {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .post-item h2 {
    font-size: 1.5rem;
    margin: 0;
    line-height: 1.3;
  }

  /* Evita el azul genérico en los títulos */
  .post-item h2 a {
    color: var(--text-main);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .post-item h2 a:hover {
    color: var(--accent);
  }

  .post-item p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.6;
    font-size: 1.05rem;
  }

  .empty-state {
    color: var(--text-muted);
    font-style: italic;
  }

  /* Agrega esto al final de tu <style> en blog/+page.svelte */
  @media (max-width: 768px) {
    .blog-header {
      margin: 2rem 0 3rem 0;
    }

    .post-list {
      gap: 2rem; /* Menos separación entre posts en celular */
    }
  }
</style>
