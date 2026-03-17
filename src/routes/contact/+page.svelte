<script lang="ts">
  import { Mail, Github, MessageSquare } from '@lucide/svelte';
</script>

<svelte:head>
  <title>Contact | Andres Martin</title>
</svelte:head>

<div class="contact-container">
  <header class="contact-header">
    <h1>Get in touch</h1>
    <p>
      I'm currently exploring new opportunities and open to discussing WebGPU, 
      Computer Vision, or low-level graphics architecture.
    </p>
  </header>

  <div class="contact-grid">
    <a href="mailto:andres@kudo.graphics" class="contact-card primary-card">
      <div class="icon-wrapper">
        <Mail size={24} />
      </div>
      <div class="card-content">
        <h2>Email</h2>
        <p>andres@kudo.graphics</p>
      </div>
    </a>

    <a href="https://x.com/amartsushiro" target="_blank" class="contact-card">
      <div class="icon-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </div>
      <div class="card-content">
        <h2>X (Twitter)</h2>
        <p>@amartsushiro</p>
      </div>
    </a>

    <a href="https://github.com/andrewm09" target="_blank" class="contact-card">
      <div class="icon-wrapper">
        <Github size={24} />
      </div>
      <div class="card-content">
        <h2>GitHub</h2>
        <p>github.com/andrewm09</p>
      </div>
    </a>
  </div>
</div>

<style>
  .contact-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 6rem 2rem;
  }

  .contact-header {
    margin-bottom: 4rem;
  }

  .contact-header h1 {
    font-size: 3.5rem;
    letter-spacing: -0.03em;
    margin: 0 0 1.5rem 0;
    color: #1e293b;
    font-weight: 800;
  }

  .contact-header p {
    font-size: 1.25rem;
    color: #64748b;
    max-width: 600px;
    line-height: 1.6;
    margin: 0;
  }

  .contact-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .contact-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .contact-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
    border-color: #cbd5e1;
  }

  .primary-card {
    border-color: #6366f1;
    background: #f8fafc;
  }

  .primary-card:hover {
    border-color: #4f46e5;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: #f1f5f9;
    color: #1e293b;
    flex-shrink: 0;
  }

  .primary-card .icon-wrapper {
    background: #eef2ff;
    color: #6366f1;
  }

  .card-content h2 {
    font-size: 1.25rem;
    margin: 0 0 0.25rem 0;
    color: #1e293b;
    font-weight: 700;
  }

  .card-content p {
    margin: 0;
    color: #64748b;
    font-size: 1rem;
    font-family: monospace;
  }

  @media (max-width: 600px) {
    .contact-container { padding: 4rem 1.5rem; }
    .contact-header h1 { font-size: 2.5rem; }
    .contact-card { padding: 1.5rem; }
  }
</style>