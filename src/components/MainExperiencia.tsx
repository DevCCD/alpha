import { useEffect } from 'react';
import '../styles.css';

interface IdiomaProps {
    idioma: string;
}

function MainExperiencia ({ idioma } : IdiomaProps) {

    useEffect(() => {
        document.title = idioma == "es" ? "Alpha | Nuestra Experiencia" : "Alpha | Our Experience"
    }, [idioma])

    return (
        <main>
            <div className="banner__container">
                <div className="banner_center mapimage">
                    <h1>{ idioma == "es" ? "Nuestra Experiencia" : "Our Experience" }</h1>
                </div>
            </div>
            <div className="container__macro">
                <div className="grid__macro_2 grid__micro_2">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160420/alpha/images/experiencia1_emm5de.jpg" />
                    <div>
                        <h1>{ idioma == "es" ? "Crecimiento en entorno cambiante" : "Growth in a changing environment"}</h1>
                        <p>{ idioma == "es" ? "Generamos pensamiento estratégico para empresas en un entorno económico, social  y político cambiante con diversidad de riesgos" : "We generate strategic thinking for companies in a changing economic, social and political environment with a diversity of risks." }
                        </p>
                    </div>
                </div>
                <div className="grid__macro_3 grid__micro_1">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160419/alpha/images/experiencia2_foqbin.jpg"  />
                    <div>
                        <h1>{ idioma == "es" ? "Amplia experiencia" : "Wide experience" }</h1>
                        <p>{ idioma == "es" ? "Brindamos servicio premium limitado basado en la experiencia y trayectoria de su equipo fundador" : "We provide limited premium service based on the experience and trajectory of its founding team" }</p>
                    </div>
                </div>
                <div className="grid__macro_2 grid__micro_2">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160420/alpha/images/experiencia3_dxjgot.jpg" />
                    <div>
                        <h1>{ idioma == "es" ? "Servicio creador de valor" : "Value creating service" }</h1>
                        <p>{ idioma == "es" ? "Aportamos valor a la empresa analizando independientemente las decisiones estratégicas" : "We add value to the company by independently analyzing strategic decisions" }</p>
                    </div>
                </div>
                <div className="grid__macro_3 grid__micro_1">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160420/alpha/images/experiencia4_bzgkw9.jpg"  />
                    <div>
                        <h1>{ idioma == "es" ? "Experiencia en entidades decisoras" : "Experience in decision-making entities" }</h1>
                        <p>{ idioma == "es" ? "Equipo con experiencia en gestión pública y privada local e internacional y desempeño en importantes cargos corporativos, ministerios y bancos centrales" : "Team with experience in local and international public and private management and performance in important corporate positions, ministries and central banks" }</p>
                    </div>
                </div>
                <div className="grid__macro_2 grid__micro_2">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160420/alpha/images/experiencia5_rxeb3c.jpg" />
                    <div>
                        <h1>{ idioma == "es" ? "Organismos líderes en economía" : "Leading economic organizations" }</h1>
                        <p>{ idioma == "es" ? "Equipo con trayectoria internacional relevante, habiendo trabajado en FMI, FED, BID y CAF" : "Team with relevant international experience, having worked at IMF, FED, IDB and CAF" }</p>
                    </div>
                </div>
                <div className="grid__macro_3 grid__micro_1">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160420/alpha/images/experiencia6_qqgsod.jpg"  />
                    <div>
                        <h1>{ idioma == "es" ? "Conglomerados" : "Conglomerates" }</h1>
                        <p>{ idioma == "es" ? "Fuertes conexiones con agencias de desarrollo y conglomerados internacionales" : "Strong connections with international development agencies and international conglomerates" }</p>
                    </div>
                </div>
                <div className="grid__macro_2 grid__micro_2">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160420/alpha/images/experiencia7_sj7lbd.jpg" />
                    <div>
                        <h1>{ idioma == "es" ? "Experiencia multisectorial" : "Multi-sector experience" }</h1>
                        <p>{ idioma == "es" ? "Equipo con experiencia en directorios de empresas en múltiples sectores" : "Team with experience in business directories in multiple sectors"}</p>
                    </div>
                </div>
                <div className="grid__macro_3 grid__micro_1">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160430/alpha/images/experiencia8_hwjmsi.png"  />
                    <div>
                        <h1>{ idioma == "es" ? "Banca internacional" : "International banking" }</h1>
                        <p>{ idioma == "es" ? "Sector bancario nacional e internacional: BBVA Perú, BBVA, ICO, Bankia, GS" : "National and international banking sector: BBVA Perú, BBVA, ICO, Bankia, GS" }</p>
                    </div>
                </div>
                <div className="grid__macro_2 grid__micro_2">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160420/alpha/images/experiencia9_mmvhwo.jpg" />
                    <div>
                        <h1>{ idioma == "es" ? "Política y efecto empresarial" : "Policy and business effect" }</h1>
                        <p>{ idioma == "es" ? "Equipo experto en manejo de comunicación política, manejo de crisis y prospectiva política" : "Expert team in political communication management, crisis management and political foresight" }</p>
                    </div>
                </div>
                <div className="grid__macro_3 grid__micro_1">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160420/alpha/images/experiencia10_fgpgxv.jpg"  />
                    <div>
                        <h1>{ idioma == "es" ? "Solidez analítica" : "Analytical robustness" }</h1>
                        <p>{ idioma == "es" ? "Mundo académico: IE University, Universidad de Navarra, USMP, IESE BS, CEU-San Pablo" : "Academic world: IE University, University of Navarra, USMP, IESE BS, CEU-San Pablo" }</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainExperiencia