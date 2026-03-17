// src/routes/blog/+page.ts
export async function load() {
  // Busca todos los archivos +page.md dentro de las subcarpetas de /blog/
  const paths = import.meta.glob('./*/+page.md', { eager: true });
  
  const posts = [];
  
  for (const path in paths) {
    const file = paths[path] as Record<string, any>;
    // Extrae el nombre de la carpeta para usarlo como URL (slug)
    const slug = path.split('/')[1]; 
    
    if (file && file.metadata) {
      const metadata = file.metadata;
      posts.push({ ...metadata, slug });
    }
  }

  // Ordena los posts del más nuevo al más viejo
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return { posts };
}