import { useEffect } from 'react';
import '../styles.css';

interface IdiomaProps {
    idioma: string;
}

function MainCapacidades({ idioma } : IdiomaProps) {

    useEffect(() => {
        document.title = idioma == "es" ? "Alpha | Capacidades" : "Alpha | Capabilities"
    }, [idioma])

    return (
        <>
            <main>
                <div className="banner__container">
                    <div className="banner_left">
                        <h1>{ idioma == "es" ? "Capacidades" : "Capabilities" }</h1>
                    </div>
                    <div className="banner_right">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/f_auto,q_auto/v1/alpha/images/capacidades/capacidades" />
                    </div>
                </div>
                <div className="slogan__slogan">
                    <h3>{ idioma == "es" ? "Dotamos a las empresas de un servicio permanente de inteligencia económica, política y social  que aporte valor a la compañía a través del enriquecimiento de las decisiones y del ensanchamiento de los ámbitos técnicos en los que está presente" : "We provide companies with a permanent economic, political and social intelligence service that adds value to the company through the enrichment of decisions and the expansion of the technical areas in which it is present" }</h3>
                </div>
                <div className="display__title">
                    <h2>{ idioma == "es" ? "Ofrecemos" : "We Offer" }</h2>
                </div>
                <div className="container__capacidades">
                    <div className="grid__capacidades_1">
                        <div>
                            <h3>{ idioma == "es" ? "El talento como ventaja competitiva" : "Talent as a competitive advantage" }</h3>
                            <p>{ idioma == "es" ? "Fortalecemos el perfil técnico/intelectual de los colaboradores claves de la compañía hacia el exterior a través de la creación de herramientas exclusivas de generación de contenidos y reuniones internas" : "We strengthen the technical/intellectual profile of the company's key collaborators externally through the creation of exclusive content generation tools and internal meetings" }</p>
                        </div>
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/f_auto,q_auto/v1/alpha/images/capacidades/talento" />
                    </div>
                    <div className="grid__capacidades_2">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/f_auto,q_auto/v1/alpha/images/capacidades/riesgos" />
                        <div>
                            <h3>{ idioma == "es" ? "Identificación de riesgos y oportunidades" : "Identification of risks and opportunities" }</h3>
                            <p>{ idioma == "es" ? "Fortalecemos el conocimiento de la alta dirección del contexto global, económico, social y político del país. De esta manera, se podrán plantear mejores estrategias tanto ofensivas como defensivas, tomando en consideración la interacción con otros stakeholders" : "We strengthen senior management's knowledge of the country's global, economic, social and political context. In this way, better offensive and defensive strategies can be proposed, taking into consideration the interaction with other stakeholders" }</p>
                        </div>
                    </div>
                    <div className="grid__capacidades_3">
                        <div>
                            <h3>{ idioma == "es" ? "Contactos globales" : "Global contacts" }</h3>
                            <p>{ idioma == "es" ? "Ponemos a disposición de la empresa los contactos de Alpha, lo que permitirá un acceso más directo a los responsables de la formulación de políticas a nivel global" : "We make Alpha contacts available to the company, which will allow more direct access to global decision makers" }</p>
                        </div>
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/f_auto,q_auto/v1/alpha/images/capacidades/contactos" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainCapacidades