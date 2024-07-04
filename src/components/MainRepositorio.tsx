import { useEffect } from 'react';
import '../styles.css';
import '../styles/carousel.css';
/* Slider */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mensuales from '../data/mensuales';
import analicos from '../data/analiticos';
import annual from '../data/annual';
import meettings from '../data/meetings';

interface IdiomaProps {
    idioma: string;
}

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

function Arrow(props: ArrowProps) {
    const { className, style, onClick} = props;
    return (
        <div 
            className={className}
            style={{...style }}
            onClick={onClick}
        />
    )
}

function MainRepositorio({ idioma } : IdiomaProps) {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
                {
                    breakpoint: 1690,
                    settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 1440,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                    }
                },
                {
                    breakpoint: 870,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 620,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
            ]
        };

    useEffect(() => {
        document.title = idioma == "es" ? "Alpha | Repositorio" : "Alpha | Repository"
    }, [idioma])

    return (
        <>
            <main>
                <div className="banner__container">
                    <div className="banner_center">
                        <h1>{ idioma == "es" ? "Repositorio" : "Repository" }</h1>
                    </div>
                </div>
                <div className="welcome__container">
                    <div className="banner__repo__title">
                        <h1>{ idioma == "es" ? "Bienvenido" : "Welcome" }</h1>
                        <p>{ idioma == "es" ? "En este entorno encontrarás información estratégica para las mejores decisiones económicas y financieras." : "In this environment you will find strategic information for the best economic and financial decisions." }</p>
                    </div>
                </div>
                <section className='section__carousel'>
                    <h2>{idioma == "es" ? "Informes Mensuales" : "Monthly Reports"}</h2>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {mensuales.map((mes)=> (
                                <div key={mes._id}>
                                    <article className="cCarousel-item">
                                        <img className='img__analitico'/>
                                        <div className="infos">
                                            <h3>{mes.nombre}</h3>
                                            <a href={mes.url}>{ idioma == "es" ? "Descargar" : "Download" }</a>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </section>
                <section className='section__carousel'>
                    <h2>{idioma == "es" ? "Informes Analíticos" : "Analytical Reports" }</h2>
                    <div className="slider-container">
                        <Slider {...settings}>
                            { analicos.map((an)=> (
                                <div key={an._id}>
                                    <article  className="cCarousel-item">
                                        <img/>
                                        <div className="infos">
                                            <h3>{an.nombre}</h3>
                                            <a href={an.url}>{ idioma == "es" ? "Descargar" : "Download" }</a>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </section>
                <section className='section__carousel'>
                    <h2>{idioma == "es" ? "Reuniones Anuales" : "Annual Meetings"}</h2>
                    <div className='reunion__anual'>

                        { annual.map((ann) => (
                            <div key={ann._id} className="card__reunion">
                                <div className="card__calendar">
                                    <div className="top__calendar"></div>
                                    <div className="card__calendar__date">
                                        <p>{ 
                                            new Date(ann.fecha).toLocaleDateString('es-ES', { year: 'numeric', month:'short' }).replace(/^\w/, c => c.toUpperCase())
                                            }</p>
                                    </div>
                                </div>
                                <div className="card__info__reunion">
                                    <p>{ann.descripcion}</p>
                                    <a href={ann.url}>{ idioma == "es" ? "Descargar" : "Download" }</a>
                                </div>
                            </div>
                        ))}

                    </div>
                </section>
                <section className='section__carousel'>
                    <h2>{idioma == "es" ? "Reunión con Clientes" : "Meeting with Clients"}</h2>
                    <div className='reunion__anual'>

                        { meettings.map((meet) => (
                            <div key={meet._id} className="card__reunion">
                                <div className="card__calendar">
                                    <div className="top__calendar"></div>
                                    <div className="card__calendar__date">
                                        <p>{ 
                                            new Date(meet.fecha).toLocaleDateString('es-ES', { year: 'numeric', month:'short' }).replace(/^\w/, c => c.toUpperCase())
                                            }</p>
                                    </div>
                                </div>
                                <div className="card__info__reunion">
                                    <p>{meet.descripcion}</p>
                                    <a href={meet.url}>{ idioma == "es" ? "Descargar" : "Download" }</a>
                                </div>
                            </div>
                        ))}

                    </div>
                </section>
            </main>
        </>
    )
}

export default MainRepositorio;