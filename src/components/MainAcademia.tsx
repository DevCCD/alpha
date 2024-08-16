import { useEffect } from 'react';
import '../styles.css';

interface IdiomaProps {
    idioma: string;
}

function MainAcademia({ idioma } : IdiomaProps) {

    useEffect(() => {
        document.title = idioma == "es" ? "Alpha | Academia" : "Alpha | Academy"
    }, [idioma])

    return (
        <main>
            <div className="banner__container">
                <div className="banner_left">
                    <h1>{idioma == "es" ? "Academia" : "Academy" }</h1>
                </div>
                <div className="banner_right">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922036/alpha/images/academia_xbwykz.jpg" />
                </div>
            </div>
            <div className="display__title">
                <h2>{ idioma == "es" ? "Objetivos" : "Goals" }</h2>
            </div>
            <div className="container__academia">
                <div className="grid__academia_1">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712119865/alpha/images/objetivo1_v30kqa.png" />
                    <div>
                        <p>{ idioma == "es" ? "Cerrar brecha de formación en la Carrera de Economía" : "Closing the training gap in the Economics Degree" }</p>
                    </div>
                </div>
                <div className="grid__academia_2">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712120361/alpha/images/objetivo2_sxorg3.jpg" />
                    <div>
                        <p>{ idioma == "es" ? "Contar con economistas de primer nivel que no sólo manejen aspectos teóricos y conceptuales, sino estén capacitados para aplicar sus conocimientos a aspectos concretos de su realidad social y económica" : "Have top-level economists who not only handle theoretical and conceptual aspects but are trained to apply their knowledge to specific aspects of their social and economic reality." }</p>
                    </div>
                </div>
            </div>
            <div className="container__capacidades">
                <div className="grid__capacidades_1">
                    <div>
                        <h3>{ idioma == "es" ? "Beneficiarios" : "Beneficiaries" }</h3>
                        <p>{ idioma == "es" ? "Docentes y estudiantes de la Carrera de Economía (provincias)" : "Teachers and students of the Economics Program (provinces)" }</p>
                    </div>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712120513/alpha/images/objetivo3_qw3u9u.jpg"/>
                </div>
                <div className="grid__capacidades_2">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712120608/alpha/images/objetivo4_lnoc2v.jpg" />
                    <div>
                        <h3>{ idioma == "es" ? "Impacto" : "Impact" }</h3>
                        <p>{ idioma == "es" ? "Desarrollo de Regiones" : "Region Development" }</p>
                    </div>
                </div>
                <div className="grid__capacidades_3">
                    <div>
                        <h3>{ idioma == "es" ? "Bases" : "Bases" }</h3>
                        <p>{ idioma == "es" ? "Capital humano, productividad y crecimiento sostenible" : "Human capital, productivity and sustainable growth" }</p>
                    </div>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712120612/alpha/images/objetivo5_nqmjes.jpg" />
                </div>
            </div>
            <div className="container__caracteristicas">
                <div className="container__etiqueta">
                    <h1>{ idioma == "es" ? "Características" : "Characteristics" }</h1>
                    <p>{ idioma == "es" ? "Universidades beneficiarias: universidades públicas de provincias – alumnos de la carrera de Economía y otras carreras que incluyan cursos de Economía" : "Beneficiary universities: Provincial public universities – Economics major students and other majors that include Economics courses" }</p>
                </div>
                <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922021/alpha/images/ciclo_caracteristicas_dqeor6.png" />
            </div>
            <div className="display__title">
                <h2>{ idioma == "es" ? "Beneficios" : "Benefits" }</h2>
            </div>
            <div className="container__macro">
                <div className="grid__macro_1">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712176046/alpha/images/beneficios1_wrijut.jpg"  />
                    <div>
                        <sub>{ idioma == "es" ? "Gratis" : "Free" }</sub>
                        <p>{ idioma == "es" ? "Gratuito para universidades, docentes y estudiantes" : "Free for universities, teachers and students" }</p>
                    </div>
                </div>
                <div className="grid__macro_2">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712176046/alpha/images/beneficios2_w8o7zg.jpg" />
                    <div>
                        <sub>{ idioma == "es" ? "Cursos" : "Courses" }</sub>
                        <p>{ idioma == "es" ? "Disponibilidad de 26 cursos claves de la Carrera de Economía" : "Availability of 26 key courses in the Economics Program" }</p>
                    </div>
                </div>
                <div className="grid__macro_3">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712176047/alpha/images/beneficios3_mhe082.jpg" />
                    <div>
                        <sub>{ idioma == "es" ? "Clases virtuales" : "Virtual classes" }</sub>
                        <p>{ idioma == "es" ? "Acceso a Clases Virtuales de Cursos Base de la Carrera (asincrónico) - Complementario a Clases" : "Access to Virtual Classes of Career Base Courses (asynchronous) - Complementary to Classes" }</p>
                    </div>
                </div>
                <div className="grid__macro_1">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712176788/alpha/images/beneficios4_zyyugx.jpg" />
                    <div>
                        <sub>{ idioma == "es" ? "Asesorías" : "Consulting" }</sub>
                        <p>{ idioma == "es" ? "Asesorías a docentes locales por parte de docentes internacionales" : "Advice to local teachers by international teachers" }</p>
                    </div>
                </div>
                <div className="grid__macro_2">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712176789/alpha/images/beneficios5_cerg95.jpg" />
                    <div>
                        <sub>{ idioma == "es" ? "Certificado" : "Certificate" }</sub>
                        <p>{ idioma == "es" ? "Certificación" : "Certification" }</p>
                    </div>
                </div>
                <div className="grid__macro_3">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712176790/alpha/images/beneficios6_h6ifb8.jpg" />
                    <div>
                        <sub>{ idioma == "es" ? "Plataforma" : "Platform" }</sub>
                        <p>{ idioma == "es" ? "Plataforma virtual (videos, foros, evaluaciones)" : "Virtual platform (videos, forums, evaluations)" }</p>
                    </div>
                </div>
                <div className="grid__macro_1">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712176791/alpha/images/beneficios7_xhjyke.jpg" />
                    <div>
                        <sub>{ idioma == "es" ? "Foros" : "Forums" }</sub>
                        <p>{ idioma == "es" ? "Participación en foros de cada curso" : "Participation in forums of each course" }</p>
                    </div>
                </div>
                <div className="grid__macro_2">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712176794/alpha/images/beneficios8_xbb8dm.jpg" />
                    <div>
                        <sub>{ idioma == "es" ? "Virtual" : "Virtual" }</sub>
                        <p>{ idioma == "es" ? "Biblioteca virtual" : "Virtual library" }</p>
                    </div>
                </div>
                <div className="grid__macro_3">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712176795/alpha/images/beneficios9_e9jm6b.jpg" />
                    <div>
                        <sub>{ idioma == "es" ? "Candidatos" : "Candidates" }</sub>
                        <p>{ idioma == "es" ? "Identificación de candidatos a maestrías en universidades españolas" : "Identification of candidates for master's degrees in spanish universities" }</p>
                    </div>
                </div>
                <div className="grid__macro_3">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712176799/alpha/images/beneficios10_i6yxox.jpg" />
                    <div>
                        <sub>{ idioma == "es" ? "Investigaciones" : "Research" }</sub>
                        <p>{ idioma == "es" ? "Participación en investigaciones aplicadas en política pública, potenciales publicaciones conjuntas para el desarrollo regional y nacional" : "Participation in applied research in public policy, potential joint publications for regional and national development" }</p>
                    </div>
                </div>
            </div>
            <div id='carrera' className="display__title">
                <h2>{ idioma == "es" ? "Cursos actuales" : "Current courses" }</h2>
            </div>
            <div className="container__macro">
                <div className="grid__macro_3 grid__micro_1">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/f_auto,q_auto/v1/alpha/images/capacidades/current_course" />
                    <div>
                        <h1>{ idioma == "es" ? "I Semestre" : "I Semester" }</h1>
                        <p>{ idioma == "es" ? "• Macroeconomía I" : "• Macroeconomics I" }</p>
                        <p>{ idioma == "es" ? "• Microeconomía I" : "• Microeconomics I" }</p>
                        <p>{ idioma == "es" ? "• Econometría I" : "• Econometrics I" }</p>
                    </div>
                </div>
            </div>
            <div id='carrera' className="display__title">
                <h2>{ idioma == "es" ? "Cursos en preparación" : "Courses" }</h2>
            </div>
            <div className="container__macro">
                <div className="grid__macro_2 grid__micro_2">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712177678/alpha/images/cursos1_aushui.jpg" />
                    <div>
                        <h1>{ idioma == "es" ? "Previo a Facultad" : "Prior to Faculty" }</h1>
                        <p>{ idioma == "es" ? "• Introducción a la Economía" : "• Introduction to Economics" }</p>
                        <p>{ idioma == "es" ? "• Estadística"  : "• Statistics" }</p>
                        <p>{ idioma == "es" ? "• Matemática básica" : "• Basic mathematics" }</p>
                    </div>
                </div>
                <div className="grid__macro_3 grid__micro_1">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712177674/alpha/images/cursos2_wijtbl.jpg" />
                    <div>
                        <h1>{ idioma == "es" ? "I Semestre" : "I Semester" }</h1>
                        <p>{ idioma == "es" ? "• Matemáticas I" : "• Mathematics I" }</p>
                        <p>{ idioma == "es" ? "• Finanzas I" : "• Finance I" }</p>
                    </div>
                </div>
                <div className="grid__macro_2 grid__micro_2">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712177675/alpha/images/cursos3_xzvfez.jpg" />
                    <div>
                        <h1>{ idioma == "es" ? "II Semestre" : "II Semester" }</h1>
                        <p>{ idioma == "es" ? "• Macroeconomía II" : "• Macroeconomics II" }</p>
                        <p>{ idioma == "es" ? "• Microeconomía II" : "• Microeconomics II" }</p>
                        <p>{ idioma == "es" ? "• Matemáticas II" : "• Mathematics II" }</p>
                        <p>{ idioma == "es" ? "• Econometría II" : "• Econometrics II" }</p>
                        <p>{ idioma == "es" ? "• Finanzas II" : "• Finance II" }</p>
                    </div>
                </div>
                <div className="grid__macro_3 grid__micro_1">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712177681/alpha/images/cursos4_d0h0bw.jpg" />
                    <div>
                        <h1>{ idioma == "es" ? "III Semestre" : "III Semester" }</h1>
                        <p>{ idioma == "es" ? "• Crecimiento Económico" : "• Economic growth" }</p>
                        <p>{ idioma == "es" ? "• Teoría y Política Monetaria" : "• Monetary Theory and Policy" }</p>
                        <p>{ idioma == "es" ? "• Comercio Internacional" : "• International Trade" }</p>
                        <p>{ idioma == "es" ? "• Diseño y Evaluación Social de Proyectos" : "• Design and Social Evaluation of Projects" }</p>
                        <p>{ idioma == "es" ? "• Matemáticas III" : "• Mathematics III" }</p>
                        <p>{ idioma == "es" ? "• Finanzas III" : "• Finance III" }</p>
                    </div>
                </div>
                <div className="grid__macro_2 grid__micro_2">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712177683/alpha/images/cursos5_yu3bq5.jpg" />
                    <div>
                        <h1>{ idioma == "es" ? "IV al V Semestre" : "IV to V Semester" }</h1>
                        <p>{ idioma == "es" ? "• Macroeconomía Dinámica" : "• Dynamic Macroeconomics" }</p>
                        <p>{ idioma == "es" ? "• Organización Industrial" : "• Industrial organization" }</p>
                        <p>{ idioma == "es" ? "• Economía Pública" : "• Public Economy" }</p>
                        <p>{ idioma == "es" ? "• Desarrollo Económico" : "• Economic development" }</p>
                        <p>{ idioma == "es" ? "• Recursos Naturales y Medio Ambiente" : "• Natural Resources and Environment" }</p>
                        <p>{ idioma == "es" ? "• Economía Laboral" : "• Economía Laboral" }</p>
                        <p>{ idioma == "es" ? "• Sistemas e Instituciones Financieras" : "• Financial Systems and Institutions" }</p>
                    </div>
                </div>
            </div>
            <div className="display__title">
                <div className='invisible__top' id='publica' />
                <h2>{ idioma == "es" ? "Gestión de Inversión Pública" : "Public Investment Management" }</h2>
            </div>
            <div className="container__macro">
                <div className="grid__macro_3 grid__micro_1">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712177686/alpha/images/cursos6_ij8obi.jpg" />
                    <div>
                        <h1>{ idioma == "es" ? "VI al X Semestre" : "VI to X Semester" }</h1>
                        <sub>{ idioma == "es" ? "Gestión de Inversión Pública" : "Public Investment Management" }</sub>
                        <p>{ idioma == "es" ? "• Gerencia de Proyectos" : "• Proyect Management"}</p>
                        <p>{ idioma == "es" ? "• Invierte.pe y Programación Multianual de Inversiones" : "• Invierte.pe and Multiannual Investment Programming" }</p>
                        <p>{ idioma == "es" ? "• Presupuesto y Tesorería" : "• Budget and Treasury" }</p>
                        <p>{ idioma == "es" ? "• Contrataciones" : "• Hiring" }</p>
                        <p>{ idioma == "es" ? "• Auditoria y Control" : "• Audit and Control" }</p>
                        <p>{ idioma == "es" ? "• APP y OxI" : "• APP y OxI"}</p>
                    </div>
                </div>
            </div>
            <div className="display__title">
                <div className='invisible__top' id='aprendo' />
                <h2>{ idioma == "es" ? "Programa Aprendo Haciendo en Inversión Pública" : "Learn by Doing Program in Public Investment" }</h2>
            </div>
            <div className="container__macro">
                <div className="grid__macro_2 grid__micro_2 container__programa">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712177688/alpha/images/programa_haciendo_nlc2oc.png" />
                    <div>
                        <h1>{ idioma == "es" ? "VIII al X Semestre" : "VIII to X Semester" }</h1>
                        <sub>{ idioma == "es" ? "Programa Aprendo Haciendo en Inversión Pública" : "Learn by Doing Program in Public Investment" }</sub>
                        <p>{ idioma == "es" ? "• Convenio Fortalecimiento de Capacidades en Gestión de Inversión Pública" : "• Agreement to Strengthen Capacities in Public Investment Management" }</p>
                        <p>{ idioma == "es" ? "• Pasantías" : "• Internships" }</p>
                        <p>{ idioma == "es" ? "• Prácticas Preprofesionales" : "• Pre professional practices" }</p>
                        <p>{ idioma == "es" ? "• Observatorio Permanente del Programa Aprendo Haciendo en Inversión Pública" : "• Permanent Observatory of the I Learn by Doing Program in Public Investment" }</p>
                    </div>
                </div>
            </div>
            <div className="display__title">
                <h2>{ idioma == "es" ? "Directores Académicos" : "Academic Directors" }</h2>
            </div>
            <div className="container_personas">
                <div className="Foto">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712263882/alpha/images/Luis-Carranza_zlm0nc.jpg" />
                </div>
                <div className="Descripcion">
                    <h1 className="Nombre">Luis Carranza</h1>
                    <h3 className="Universidad">PhD. Universidad de Minnesota<br />USMP</h3>
                    <p>{ idioma == "es" ? "Algunas publicaciones" : "Some publications" }</p>
                    <p>• Rethinking Fiscal Rules, 2023, JCE</p>
                    <p>• Public Infrastructure Investment and fiscal sustainability in Latin America, 2014, JES</p>
                    <p>• The relationship between investment and large Exchange rate depreciations in dollarized economies, 2011,
                    JIMF
                    </p>
                    <p>• Understanding the relationship between financial develpment and monetary policy, 2010, RIE</p>
                </div>
            </div>
            <div className="container_personas2">
                <div className="Descripcion">
                    <h1 className="Nombre">José Enrique Galdon Sánchez</h1>
                    <h3 className="Universidad">PhD. Universidad de Minnesota<br />Universidad Pública de Navarra</h3>
                    <p>{ idioma == "es" ? "Algunas publicaciones" : "Some publications" }</p>
                    <p>• Loan production and monetary policy, 2019, MD</p>
                    <p>• Outsourcing and peripheral services, 2015, EER</p>
                    <p>• Exchange rate volatility and economic performance, 2003, EMR</p>
                    <p>• Competitive pressure and labor productivity, 2002, AER</p>
                </div>
                <div className="Foto">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/f_auto,q_auto/v1/alpha/images/pgtdnoqhfm1ttwsiouns" />
                </div>
            </div>
            {/* <div className="display__title">
                <h2>{ idioma == "es" ? "Profesores" : "Teachers" }</h2>
            </div>
            <div className="container_personas">
                <div className="Foto">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712265667/alpha/images/JavierGomezBiscarri_wyoldu.jpg" />    
                </div>
                <div className="Descripcion">
                    <h1 className="Nombre">Javier Gómez Biscarri</h1>
                    <h3 className="Universidad">Universidad Pompeu-Fabra, Barcelona</h3>
                    <p>{ idioma == "es" ? "Algunas publicaciones" : "Some publications" }</p>
                    <p>• Understanding the relationship between financial develpment and monetary policy, 2010, RIE</p>
                    <p>• Exchange rate and inflation dynamics, 2009, JDE</p>
                    <p>• Changes in the dynamic behavior of emerging market volatility, 2006, EMR
                    </p>
                    <p>• Stock market cycles, financial liberalization and volatility, 2003, JIMF</p>
                </div>
            </div>
            <div className="container_personas2">
                <div className="Descripcion">
                    <h1 className="Nombre">Julián Diaz Saavedra</h1>
                    <h3 className="Universidad">PhD. Carlos III<br />Universidad de Granada</h3>
                    <p>{ idioma == "es" ? "Algunas publicaciones" : "Some publications" }</p>
                    <p>• Rethinkin fiscal rules, 2023, JCE</p>
                    <p>• The future of spanish pensions, 2017, JPEF</p>
                    <p>• Pension reform, 2015, SAE</p>
                    <p>• Spanish minimun pensions after 2013</p>
                    <p>• Delaying retirement in Spain, 2009, RED</p>
                </div>
                <div className="Foto">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712265813/alpha/images/JulianDiaz_lhbz0p.jpg" />    
                </div>
            </div>
            <div className="container_personas">
                <div className="Foto">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712265848/alpha/images/FotoJavierHualde_monah1.jpg" />
                </div>
                <div className="Descripcion">
                    <h1 className="Nombre">Javier Hualde Bilbao</h1>
                    <h3 className="Universidad">PhD. LSE<br />Universidad Pública de Navarra</h3>
                    <p>{ idioma == "es" ? "Algunas publicaciones" : "Some publications" }</p>
                    <p>• Truncated sum of squares estimation of fractional time series models with deterministic trends, 2020, ET
                    </p>
                    <p>• Fixed bandwidth inference for fractional cointegration, 2019, JTSA</p>
                    <p>• Local whittle estimation of long memory: standard versus bias-reducing techniques, 2019, E&S</p>
                </div>
            </div>
            <div className="container_personas2">
                <div className="Descripcion">
                    <h1 className="Nombre">Marianna Battaglia</h1>
                    <h3 className="Universidad">PhD. Universidad de Bocconi<br />Universidad de Alicante</h3>
                    <p>{ idioma == "es" ? "Algunas publicaciones" : "Some publications" }</p>
                    <p>• Repayment Flexibility and Risk Taking: Experimental Evidence from Credit Contracts, 2023, RES</p>
                    <p>• Segregation, Fertility and Son Preference: the Case of the Roma in Serbia, 2021, JDE</p>
                    <p>• Equal Access to Education: An Evaluation of the Roma Teaching Assistant Program in Serbia, 2015, WD</p>
                </div>
                <div className="Foto">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712265919/alpha/images/MariannaBattaglia_n7lrls.jpg" />
                </div>
            </div> */}
        </main>
    )
}

export default MainAcademia