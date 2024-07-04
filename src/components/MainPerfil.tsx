import { IoMdMail } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';

import equipo, { Perfil } from '../data/equipo';
import { useEffect } from 'react';

interface IdiomaProps {
    idioma: string;
}

function MainPerfil({ idioma } : IdiomaProps) {

    const params = useParams<{ _id: string }>();
    const idPerfil = params._id;
    
    const perfil: Perfil | undefined = equipo.find(item => item._id === idPerfil);
    
    useEffect(() => {
        document.title = "Alpha | "+perfil?.nombre
    }, [perfil?.nombre])

    if (!perfil) {
        return <Link to="/">No se encontró el perfil, volver al inicio</Link>;
    }

    return (
        <main>
            <div className="banner__container bg-profile">
                <div className="banner_left banner__info">
                    <h1>{perfil.nombre}</h1>
                    <h3>{perfil.cargo}</h3>
                    <Link to={perfil.url}><i><IoMdMail /></i></Link>
                </div>
                <div className="banner_right banner__image">
                    <img src={perfil.imageUrl} alt="Perfil" />
                </div>
            </div>
            <div className="container__acercade">
                <div className="container__exp">
                    <div className="line"></div>
                    <h4>{ idioma == "es" ? "ACERCA DE" : "ABOUT" }</h4>
                    <p>{perfil.descripcionLarga}</p>
                </div>
            </div>
        </main>
    )
}

export default MainPerfil;
