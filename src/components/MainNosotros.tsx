import { Link } from 'react-router-dom';
import '../styles.css';
import equipo from '../data/equipo';
import { useEffect } from 'react';

interface IdiomaProps {
    idioma: string;
}

function MainNosotros({ idioma } : IdiomaProps) {
    
    useEffect(() => {
        document.title = idioma == "es" ? "Alpha | Nosotros" : "Alpha | About Us"
    }, [idioma])

    return ( 
        <main>
            <div className="banner__container">
                <div className="banner_center mapimage">
                    <h1>{ idioma == "es" ? "Nuestros Aliados" : "Our Allies" }</h1>
                </div>
            </div>
            <div className="container__empresas">
                <div className='card__container'>
                    <h2>{ idioma == "es" ? "Empresas" : "Companies" }</h2>
                    <div className="sub__container__empresas">
                        <div>
                            <Link to={"#"} target='_blank'>
                                <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712098337/alpha/images/logoccd_ublvsl.png" alt="CCD" />
                            </Link>
                        </div>
                        <div>
                            <Link to={"#"} target='_blank'>
                                <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712098336/alpha/images/logoanalisis_economico_integral_cover_necqnm.png" alt="AEI" />
                            </Link>
                        </div>
                        <div>
                            <Link to={"#"} target='_blank'>
                                <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712098340/alpha/images/logoglobalgradient_enjkcg.png" alt="Global Gradient" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="equipo__title">
                <h2 className="gray-bg">{ idioma == "es" ? "Nuestro Equipo" : "Our team" }</h2>
            </div>
            <div className="nuestro__equipo">
                {equipo.map((eq) => (
                <div key={eq._id} className="card">
                    <img src={eq.imageUrl} className="card-img" />
                    <div className="card-content">
                    <h3 className="card-title">{eq.nombre}</h3>
                    <p className="card-subtitle">{eq.cargo}</p>
                    <p className="card-description">{eq.descripcion}</p>
                    <Link to={`/nosotros/perfil/${eq._id}`} className="read-more">Leer más</Link>
                    </div>
                </div>
                ))}
            </div>
        </main>
    )
}

export default MainNosotros;