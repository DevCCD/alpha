import { useEffect } from 'react'
import { IoIosMore } from 'react-icons/io';
import cursos from '../data/cursos';


interface IdiomaProps {
    idioma: string;
}

function MainTablero({ idioma } : IdiomaProps) {

    useEffect(() => {
        document.title = idioma == "es" ? "Alpha | Tablero" : "Alpha | Board"
    }, [idioma])
    
    return (
        <main>
            <div className="white-bg banner__blog">
                <div className="banner__blog__title">
                    <h1>{ idioma == "es" ? "Tablero" : "Board" }</h1>
                    <p>{ idioma == "es" ? "Aquí puedes encontrar tus cursos disponibles. Explora el catálogo para ver todas las opciones." : "Here you can find your available courses. Explore the catalog to see all the options." }</p>
                </div>
            </div>
            <div className='container__tablero'>
                {cursos.map((cur) => (
                    <div key={cur._id} className="card__tablero">
                        <img src={cur.imagen} alt="" />
                        <div className='card__description'>
                            <h2>{cur.nombre}</h2>
                            <p>{cur.descripcion}</p>
                            <div className='tablero__actions'>
                                <a href={`/board/curso/${cur._id}`} >
                                    <IoIosMore />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        </main>
    )
}

export default MainTablero;