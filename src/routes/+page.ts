// src/routes/+page.ts
export async function load() {
  // Buscamos los posts en la carpeta blog
  // El patrón asume que están en /src/routes/blog/[slug]/+page.md
  const paths = import.meta.glob('./blog/*/+page.md', { eager: true });
  
  const posts = [];
  
  for (const path in paths) {
    const file = paths[path] as Record<string, any>;
    // path se ve como: './blog/mi-primer-post/+page.md'
    // Al dividirlo por '/', el índice 2 es el nombre de la carpeta (slug)
    const slug = path.split('/')[2]; 
    
    if (file && file.metadata) {
      posts.push({ ...file.metadata, slug });
    }
  }

  // Ordenamos del más reciente al más antiguo
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // Retornamos solo el primero (el más reciente) o null si no hay ninguno
  return { 
    latestPost: posts.length > 0 ? posts[0] : null 
  };
}