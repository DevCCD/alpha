import '../styles.css';
import blog from '../data/blog.tsx'
import { useEffect } from 'react';
/* import { useState } from 'react'; */

interface IdiomaProps {
    idioma: string;
}

function MainBlog({ idioma } : IdiomaProps) {

    useEffect(() => {
        document.title = idioma == "es" ? "Alpha | Blog Alpha" : "Alpha | Alpha Blog"
    }, [idioma])


    return (
        <>
            <main>
                <div className="gray-bg banner__blog">
                    <div className="banner__blog__title">
                        <h1>{ idioma == "es" ? "Blog Alpha" : "Alpha Blog" }</h1>
                        <p>{ idioma == "es" ? "Publicaciones sobre nuestra gente, nuestras capacidades, nuestra investigación y el rostro en constante cambio de nuestra empresa" : "Posts about our people, our capabilities, our research and the ever-changing face of our company" }</p>
                    </div>
                </div>
                <div className="container__publi">
                    <div className='container__title__blog'>
                        <div className="title__publi">
                            <p>{ idioma == "es" ? "PUBLICACIONES" : "PUBLICATIONS" }</p>
                        </div>
                        <div className="title__tags">
                            { idioma == "es" ? "Buscar por:" : "Browse by:" } <span>{ idioma == "es" ? "Tema | Fecha" : "Topic | Date" }</span>
                        </div>
                    </div>
                    <div className="subrayado__blog"></div>
                </div>
                <div className="contenedor-cards">
                    {blog.map((bl) => (
                    <div key={bl._idBlog} className="card__blog">
                        <a target="_blank" href={bl.url}>
                        <img src={bl.urlImage} alt="Imagen del artículo 1" />
                        <h3>{bl.title}</h3>
                        <p>{bl.description}</p>
                        </a>
                    </div>
                    ))}
                    {/* { JSON.stringify(data) } */}
                    {/* <ul>
                        {data && data.map((blog: Blog) => (
                            <li key={blog.id}>
                            <h2>{blog.titulo}</h2>
                            <p>{blog.descripcioncorta}</p>
                            <p>Actualizado: {blog.updatedAt}</p>
                            </li>
                        ))}
                    </ul> */}
                </div>
            </main>
        </>
    )
}

export default MainBlog