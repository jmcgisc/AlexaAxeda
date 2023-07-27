import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Configurar Buffer globalmente
window.Buffer = Buffer;


export async function getAllPosts() {
    const posts = [];
    // Obtener la ruta del directorio _posts
    const baseDir = import.meta.env.BASE_URL;
    const postsDirectory = `${baseDir}_posts`;
    // Leer los archivos del directorio _posts
    const fileNames = ["article.md", "Articulo.md"]
    // Leer el contenido y extraer la data de cada archivo
    for (const fileName of fileNames) {
        const filePath = `${postsDirectory}/${fileName}`;
        const fileContents = await readFile(filePath, 'utf-8');
        const { data, content } = matter(fileContents);
        posts.push({ data, content });
    }
    return posts;
}

// Obtener los nombres de archivo de los archivos .md en el directorio _posts
async function getPostFileNames(postsDirectory) {
    const response = await fetch(`${postsDirectory}/postFiles.json`);
    const fileNames = await response.json();
    return fileNames;
}


// Leer un archivo en formato de texto
async function readFile(filePath, encoding) {
    const response = await fetch(filePath);
    const fileContents = await response.text();
    return fileContents;
}
