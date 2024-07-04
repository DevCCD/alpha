import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import cursos from "../data/cursos";

import '../styles/collapseModulo.css';
import { FaChevronRight } from "react-icons/fa6";
import { LuFileDown, LuFileEdit, LuMonitorPlay } from "react-icons/lu";

interface IdiomaProps {
    idioma: string;
}

interface Modulo {
    _id: string;
    nombre: string;
    material: string[];
    ejercicios: string[];
    videos: string[];
}

interface Curso {
    _id: string;
    nombre: string;
    imagen: string;
    modulos: Modulo[];
}

function MainCurso({ idioma } : IdiomaProps) {

    const [openModule, setModuleOpen] = useState<number | null>(null);
    const [openSubModules, setOpenSubModules] = useState([false, false, false]); // suponer dos submódulos inicialmente

    const toggleModule = (index: number) => {
        setModuleOpen(prevState => (prevState === index ? null : index));
    };

    const toggleSubModule = (index: number) => {
        setOpenSubModules(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const params = useParams<{ _id: string }>();
    const idCurso = params._id;

    const defaultCurso: Curso = {
        _id: '',
        nombre: '',
        imagen: '',
        modulos: [],
    };

    const curso: Curso = cursos.find(item => item._id === idCurso) || defaultCurso;
    
    useEffect(() => {
        document.title = idioma == "es"? "Alpha | "+curso.nombre : "Alpha | Course"
    }, [curso.nombre, idioma])
    
    if (!curso) {
        return <div>Curso no encontrado</div>;
    }

    return (
        <main>
            <div className="white-bg banner__blog">
                <div className="banner__blog__title">
                    <h1>{curso.nombre}</h1>
                </div>
            </div>
            <div className="container__modulos">
                {curso.modulos.map((modu, index)=> (
                    <div key={modu._id} className="module">
                        <div className="module-header" onClick={() => toggleModule(index)}>
                            <span className={`arrow ${openModule == index ? 'open' : ''}`}><FaChevronRight/></span>
                            <span className="module-title">{modu.nombre}</span>
                        </div>
                        <div className={`module-content ${openModule == index ? 'open' : ''}`}>
                                {/* Material */}
                                <div className="sub-module">
                                    <div className="sub-module-header" onClick={() => toggleSubModule(0)}>
                                        <span className={`arrow ${openSubModules[0] ? 'open' : ''}`}><FaChevronRight/></span>
                                        <span className="sub-module-title">{ idioma == "es" ? "Material del Curso" : "Course Material" }</span>
                                    </div>
                                    <div className={`sub-module-content ${openSubModules[0] ? 'open' : ''}`}>
                                        {modu.material.map((v, i) => (
                                            <a href={v} key={i}><LuFileDown /> Descargar Documento {i+1}</a>
                                        ))}
                                    </div>
                                </div>
                                {/* Ejercicios */}
                                <div className="sub-module">
                                    <div className="sub-module-header" onClick={() => toggleSubModule(1)}>
                                        <span className={`arrow ${openSubModules[1] ? 'open' : ''}`}><FaChevronRight/></span>
                                        <span className="sub-module-title">{ idioma == "es" ? "Ejercicios" : "Exercises" }</span>
                                    </div>
                                    <div className={`sub-module-content ${openSubModules[1] ? 'open' : ''}`}>
                                        {modu.ejercicios.map((v, i) => (
                                            <a href={v} key={i}><LuFileEdit /> Descargar Ejercicio {i+1}</a>
                                        ))}
                                    </div>
                                </div>
                                {/* Videos */}
                                <div className="sub-module">
                                    <div className="sub-module-header" onClick={() => toggleSubModule(2)}>
                                        <span className={`arrow ${openSubModules[2] ? 'open' : ''}`}><FaChevronRight/></span>
                                        <span className="sub-module-title">{ idioma == "es" ? "Videos" : "Videos" }</span>
                                    </div>
                                    <div className={`sub-module-content ${openSubModules[2] ? 'open' : ''}`}>
                                        {modu.videos.map((v, i) => (
                                            <a href={v} key={i}><LuMonitorPlay /> Ver Video {i+1}</a>
                                        ))}
                                    </div>
                                </div>

                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default MainCurso;
