import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../../utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import markdownStyles from './markdown-styles.module.css'


function extraerAtributos(cadena) {
  const regex = /---\s*((?:.|\n)?)\s---/; // Expresión regular para encontrar el bloque de atributos
  const match = cadena.match(regex); // Buscar el bloque de atributos en la cadena

  if (match && match[1]) {
    const atributos = match[1];
    const atributosObjeto = {};

    // Dividir los atributos en líneas
    const lineas = atributos.split('\n');

    // Recorrer cada línea de atributos
    lineas.forEach((linea) => {
      // Dividir la línea en clave y valor usando ":" como separador
      const [clave, valor] = linea.split(':').map((item) => item.trim());

      // Agregar el atributo al objeto resultante
      atributosObjeto[clave] = valor;
    });

    return atributosObjeto;
  }

  return null; // Si no se encuentra el bloque de atributos
}


const Post = () => {
  const [posts, setPosts] = useState([]);
  const [postFind, setPostFind] = useState({})

  const { path } = useParams();
  const navigate = useNavigate();

  async function fetchData() {
    try {
      const allPosts = await getAllPosts();
      console.log("AllPosts", allPosts)
      setPosts(allPosts);
      getPostByPath(allPosts)
    } catch (error) {
      console.log("Error al obtener todos los posts", error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [path]);

  // useEffect(() => {
  //   fetch('/_posts/article.md')
  //     .then(response => response.text())
  //     .then(text => {
  //       setContent(text);
  //       const atributosExtraidos = extraerAtributos(text);
  //       setAttributes(atributosExtraidos)
  //     })
  //     .catch(error => {
  //       console.error('Error fetching markdown:', error);
  //     });
  // }, []);

  console.log("path", path)

  const redireccionar = (path) => {
    navigate(`/post/${path}`);

  };

  const getPostByPath = (allPosts) => {

    const postFiltrado = allPosts.filter(post => post.data.path === path);

    if (postFiltrado.length > 0) {
      const postEncontrado = postFiltrado[0];
      console.log("postEncontrado", postEncontrado);
      setPostFind({})
      setPostFind(postEncontrado)
    } else {
      // No se encontró ningún objeto con el atributo path correspondiente
      console.log('No se encontró ningún objeto con la ruta dinámica especificada.');
    }
  }

  return (
    <div style={{ marginTop: '100px' }}>


      <div>
        <h2>Lista de publicaciones:</h2>
        <ul>
          {postFind?.data && postFind.data.title}
        </ul>


        <div className={markdownStyles['markdown']}>

          <ReactMarkdown>
            {postFind.content}
          </ReactMarkdown>
        
        </div>

        <h2>Ver otras publicaciones</h2>
        {posts.map((post, index) => (
          <li>
            <button onClick={() => { redireccionar(post.data.path) }}>
              {post.data.title}
            </button>
          </li>

        ))}

      </div>

    </div>
  );
};

export default Post;