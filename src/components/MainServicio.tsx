import { useEffect } from 'react';
import '../styles.css';

interface IdiomaProps {
    idioma: string;
}

function MainServicio ({ idioma } : IdiomaProps) {

    useEffect(() => {
        document.title = idioma == "es" ? "Alpha | Servicio Alpha" : "Alpha | Alpha Service"
    }, [idioma])

    return (
        <>
            <main>
                <div className="banner__container">
                    <div className="banner_left">
                        <h1>{ idioma == "es" ? "Servicio Alpha" : "Alpha Service" }</h1>
                    </div>
                    <div className="banner_right">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/f_auto,q_auto/v1/alpha/images/servicio/servicioalpha" />
                    </div>
                </div>
                <div className="display__title">
                    <div className='invisible__top' id='premium' />
                    <h2>{ idioma == "es" ? "Servicio Premium Alpha" : "Alpha Premium Service" }</h2>
                </div>
                <div className="container__servicio">
                    <div className="servicio__left">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/f_auto,q_auto/v1/alpha/images/servicio/Servicio1" />
                        <p><b>{ idioma == "es" ? "Informes mensuales" : "Monthly reports" }</b> { idioma == "es" ? " sobre el contexto global, político, económico e impacto empresarial, reporte financiero e informe sectorial" : " on the global, political, economic and business impact context, financial report and sectoral report" }</p>
                    </div>
                    <div className="servicio__right">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/f_auto,q_auto/v1/alpha/images/servicio/Servicio2" />
                        <p><b>{ idioma == "es" ? "Informes analíticos" : "Analytical reports" }</b>{ idioma == "es" ? " con mayor incidencia en perspectivas" : " with greater impact on perspectives" }</p>
                    </div>
                </div>
                <div className="container__servicio">
                    <div className="servicio__left">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/f_auto,q_auto/v1/alpha/images/servicio/Servicio3" />
                    </div>
                    <div className="servicio__right">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/f_auto,q_auto/v1/alpha/images/servicio/Servicio4" />
                    </div>
                </div>
                <div className="container__servicio__center">
                    <p><b>{ idioma == "es" ? "1 reunión" : "1 meeting" }</b>{ idioma == "es" ? " con clientes de la empresa para presentar la coyuntura macroeconómica, política y social del país" : " with company clients to present the macroeconomic, political and social situation of the country" }</p>
                </div>
                <div className="display__title">
                <div className='invisible__top' id='asistencia' />
                    <h2>{ idioma == "es" ? "Asistencia Técnica Alpha" : "Alpha Technical Assistance" }</h2>
                </div>
                <div className="container__servicio">
                    <div className="servicio__left">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/f_auto,q_auto/v1/alpha/images/servicio/Servicio5" />
                        <p>{ idioma == "es" ? "Diagnosticamos las " : "We diagnose the " } <b>{ idioma == "es" ? "áreas de la empresa y las variables" : "areas of the company and variables" }</b>{ idioma == "es" ? "  globales, económicas, sociales y políticas vinculadas al PyG, y modelamos los impactos principalmente sobre los ingresos, costos/gastos y gastos financieros informe sectorial" : " global, economic, social and political aspects linked to the P&L, and we model the impacts mainly on income, costs/expenses and financial expenses sector report" }</p>
                    </div>
                    <div className="servicio__right">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/f_auto,q_auto/v1/alpha/images/servicio/Servicio6" />
                        <p>{ idioma == "es" ? "Creamos " : "We create " } <b>{ idioma == "es" ? "información centralizada" : "centralized information" }</b>{ idioma == "es" ? " de base de datos, herramientas analíticas y reportes sobre la performance del PyG" : " database, analytical tools and reports on P&L performance" }</p>
                    </div>
                </div>
                <div className="container__servicio">
                    <div className="servicio__left">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/f_auto,q_auto/v1/alpha/images/servicio/Servicio7" />
                        <p>{ idioma == "es" ? "Desarrollamos e insertamos a " : "We develop and insert " }<b>{ idioma == "es" ? "plataformas digitales" : "digital platforms" }</b>{ idioma == "es" ? " existentes la información centralizada que impactan a las cuentas del PyG informe sectorial" : " existing centralized information that impacts P&L sector report accounts"}</p>
                    </div>
                    <div className="servicio__right">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/f_auto,q_auto/v1/alpha/images/servicio/Servicio8" />
                        <p>{ idioma == "es" ? "Fortalecemos " : "We strengthen "} <b>{ idioma == "es" ? "capacidades de los colaboradores" : "capabilities of collaborators" }</b>{ idioma == "es" ? "  en análisis, medición de impactos y seguimiento de variables globales, económicas, sociales y políticas sobre las finanzas y sostenibilidad de la empresa" : " in analysis, measurement of impacts and monitoring of global, economic, social and political variables on the finances and sustainability of the company" }</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainServicio