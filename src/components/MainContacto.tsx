import '../styles.css';
import redes from '../data/redes.tsx';
import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

interface IdiomaProps {
    idioma: string;
}

function MainContacto ({ idioma } : IdiomaProps) {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');

    const para = "alphaasesoriaestrategica@gmail.com";

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    
        const mailtoLink = `mailto:${para}?subject=CV desde web Alpha: ${nombre} ${apellido} &body=Nombre: ${nombre}%0D%0AApellido: ${apellido}%0D%0ACorreo: ${correo}`;
    
        window.location.href = mailtoLink;
    };

    useEffect(() => {
        document.title = idioma == "es" ? "Alpha | Contacto" : "Alpha | Contact"
    }, [idioma])

    return (
        <main>
            <div className="banner__container">
                <div className="banner_center">
                    <h1>{ idioma == "es" ? "Contacto" : "Contact" }</h1>
                </div>
            </div>
            <div className="container__contactos">
                <div className='invisible__top' id="contacto" />
                <aside>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712100491/alpha/images/contacto_aside_wkuz1g.svg" alt="aside1" />
                </aside>
                <div className="info__contact">
                    <h1>{ idioma == "es" ? "Alpha Consultoría Estratégica" : "Alpha Strategic Consulting" }</h1>
                    <h3>{ idioma == "es" ? "Si desea obtener más información sobre Alpha asesoría estratégica, escríbanos, un representante de nuestra organización se pondrá en contacto lo antes posible." : "" }</h3>
                    <h3>{ idioma == "es" ? "La información proporcionada se mantendrá en todo momento estrictamente confidencial." : "" }</h3>
                    <h3></h3>
                    <h1>{ idioma == "es" ? "Teléfono principal" : "Main phone" }</h1>
                    <div>
                        <Link to={redes[0].url}>
                            <i><FaPhone /></i>{redes[0].nombre}
                        </Link>
                    </div>
                    <h1>{ idioma == "es" ? "Nuestras Redes" : "Our Networks" }</h1>
                    <div className="social__list">
                        {redes.slice(1).map((red) => (
                            <Link key={red._id} to={red.url}>
                                <i><red.icono /></i>{red.nombre}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container__trabaja">
                <div className='invisible__top' id="trabaja"/>
                <div className="info__trabaja">
                    <h3>{ idioma == "es" ? "Trabaja con nosotros" : "Join us" }</h3>
                    <h1>{ idioma == "es" ? "¡Creemos en tu potencial, experiencia y habilidades blandas!" : "We believe in your potential, experience and soft skills!" }</h1>
                    <p>{ idioma == "es" ? "Sé parte de la institución líder del país en competitividad, con más de una década impulsando el desarrollo nacional, regional, provincial, distrital y comunal" : "Be part of the country's leading institution in competitiveness, with more than a decade promoting national, regional, provincial, district and communal development" }</p>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <div>
                                    <label htmlFor="nombre">{ idioma == "es" ? "Nombre" : "First name" }</label>
                                    <input 
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        placeholder={ idioma == "es" ? "Nombre" : "First name" }required
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="apellido">{ idioma == "es" ? "Apellido" : "Last name" }</label>
                                    <input
                                        type="text"
                                        id="apellido"
                                        name="apellido"
                                        placeholder={ idioma == "es" ? "Apellido" : "Last name" }
                                        required
                                        value={apellido}
                                        onChange={(e) => setApellido(e.target.value)}/>
                                </div>
                            </div>
                            <div className="input-full">
                                <label htmlFor="email">{ idioma == "es" ? "Correo de contacto" : "Contact email" }</label>
                                <input
                                    id="email"
                                    name="email"
                                    placeholder={ idioma == "es" ? "ejemplo@ejemplo.com" : "example@example.com" }
                                    required 
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}/>
                            </div>
                            <button 
                                className="hero-btn"
                                typeof="submit">
                                    { idioma == "es" ? "Enviar" : "Submit" }
                            </button>
                        </form>
                        <div className="message">
                            { idioma == "es" ? "No olvide adjuntar su CV en el correo*" : "Don't forget to attach your CV in the email*" }
                        </div>
                    </div>
                </div>
                <aside>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712100493/alpha/images/aside_trabajo_vyurtg.svg" alt="aside2" />
                </aside>
            </div>
        </main>
    )
}

export default MainContacto;