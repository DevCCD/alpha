import { Link } from 'react-router-dom';
import '../styles.css';
import  redes  from '../data/redes.tsx';
import { useState } from 'react';

interface IdiomaProps {
    idioma: string;
}

function Footer({ idioma } : IdiomaProps) {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [puesto, setPuesto] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [celular, setCelular] = useState('');
    const [correo, setCorreo] = useState('');
    const [industria, setIndutria] = useState('');
    const [pais, setPais] = useState('');
    const [consulta, setConsulta] = useState('');

	const para = "alphaasesoriaestrategica@gmail.com";

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    
        const mailtoLink = `mailto:${para}?subject=Consulta web de ${nombre} ${apellido} &body=Nombre: ${nombre}%0D%0AApellido: ${apellido}%0D%0AEmpresa: ${empresa}%0D%0AIndustria: ${industria}%0D%0APaís: ${pais}%0D%0ACelular: ${celular}%0D%0AConsulta: ${consulta}`;
    
        window.location.href = mailtoLink;
    };

    return (
        <>
            {/* <!--Footer Contacto --> */}
            <div className="formulario__contacto">
                <div className='invisible__top' id="contactar" />
                <div className="informacion">
                    <h2>{idioma == "es" ? "Contáctanos" : "Contact us"}</h2>
                    <p>
                        {idioma == "es" ? "Si desea obtener más información sobre nuestros servicios, complete el formulario y cuéntenos un poco más sobre usted y lo que está buscando. Un miembro del equipo se pondrá en contacto contigo lo antes posible. Nunca compartiremos tus datos con terceros y podrás darte de baja en cualquier momento." : "If you would like more information about our services, please fill out the form and tell us a little more about yourself and what you are looking for. A member of the team will contact you as soon as possible. We will never share your data with third parties and you can unsubscribe at any time."}
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="campos">
                        <div className="campo nombre">
                            <label>{idioma == "es" ? "Nombre" : "First name"}</label>
                            <input 
                                type="text" 
                                id="nombre" 
                                name={"nombre"} 
                                placeholder={idioma == "es" ? "Nombre" : "First name"}
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}/>
                        </div>
                        <div className="campo apellido">
                            <label>{idioma == "es" ? "Apellido" : "Last name"}</label>
                            <input 
                                type="text"
                                id="apellido"
                                name={"apellido"}
                                placeholder={idioma == "es" ? "Apellido" : "Last name"}
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)} />
                        </div>
                        <div className="campo puesto">
                            <label>{idioma == "es" ? "Puesto" : "Employment"}</label>
                            <input
                                type="text"
                                id="puesto"
                                name={"puesto"}
                                placeholder="Puesto"
                                value={puesto}
                                onChange={(e) => setPuesto(e.target.value)} />
                        </div>
                        <div className="campo empresa">
                            <label>{idioma == "es" ? "Empresa" : "Company"}</label>
                            <input
                                type="text"
                                id="empresa"
                                name={"empresa"}
                                placeholder={idioma == "es" ? "Empresa" : "Company"}
                                value={empresa}
                                onChange={(e) => setEmpresa(e.target.value)} />
                        </div>
                        <div className="campo celular">
                            <label>{idioma == "es" ? "Celular" : "Phone number"}</label>
                            <input 
                                type="tel" 
                                id="celular" 
                                name={"celular"} 
                                placeholder={idioma == "es" ? "Celular" : "Phone number"}
                                value={celular}
                                onChange={(e) => setCelular(e.target.value)} />
                        </div>
                        <div className="campo email">
                            <label>{idioma == "es" ? "Correo" : "Email"}</label>
                            <input 
                                id="email" 
                                name={"email"} 
                                placeholder={idioma == "es" ? "Correo" : "Email"}
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)} />
                        </div>
                        <div className="campo industria">
                            <label>{idioma == "es" ? "Industria" : "Industry"}</label>
                            <select
                                value={industria} 
                                id="industria" 
                                name={idioma == "es" ? "Industria" : "Industry"}
                                onChange={(e) => setIndutria(e.target.value)} >
                                <option value="Minería">Minería</option>
                                <option value="Servicios Financieros">Servicios Financieros</option>
                                <option value="Petróleo / Gas">Petróleo / Gas</option>
                                <option value="Comercio">Comercio</option>
                                <option value="Alimentos">Alimentos</option>
                                <option value="Energía Eléctrica">Energía Eléctrica</option>
                                <option value="Telecomunicaciones">Telecomunicaciones</option>
                                <option value="Bebidas / Licores">Bebidas / Licores </option>
                                <option value="Multisector">Multisector</option>
                                <option value="Construcción">Construcción</option>
                                <option value="Salud">Salud</option>
                                <option value="Agroindustria">Agroindustria</option>
                                <option value="Automotriz">Automotriz</option>
                                <option value="Electrónica">Electrónica</option>
                                <option value="Química / Fermacéutica">Química / Fermacéutica</option>
                            </select>
                        </div>
                        <div className="campo pais">
                            <label>{idioma == "es" ? "País" : "Country"}</label>
                            <select
                                id="pais"
                                name={"pais"}
                                value={pais}
                                onChange={(e) => setPais(e.target.value)} >
                                <option value="Afganistán">Afganistán</option>
                                <option value="Albania">Albania</option>
                                <option value="Alemania">Alemania</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antártida">Antártida</option>
                                <option value="Antigua y Barbuda">Antigua y Barbuda</option>
                                <option value="Antillas Holandesas">Antillas Holandesas</option>
                                <option value="Arabia Saudí">Arabia Saudí</option>
                                <option value="Argelia">Argelia</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaiyán">Azerbaiyán</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrein">Bahrein</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Bélgica">Bélgica</option>
                                <option value="Belice">Belice</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermudas">Bermudas</option>
                                <option value="Bielorrusia">Bielorrusia</option>
                                <option value="Birmania">Birmania</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bosnia y Herzegovina">Bosnia y Herzegovina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Brasil">Brasil</option>
                                <option value="Brunei">Brunei</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Bután">Bután</option>
                                <option value="Cabo Verde">Cabo Verde</option>
                                <option value="Camboya">Camboya</option>
                                <option value="Camerún">Camerún</option>
                                <option value="Canadá">Canadá</option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Chipre">Chipre</option>
                                <option value="Ciudad del Vaticano (Santa Sede)">Ciudad del Vaticano (Santa Sede)</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comores">Comores</option>
                                <option value="Congo">Congo</option>
                                <option value="Congo, República Democrática del">Congo, República Democrática del</option>
                                <option value="Corea">Corea</option>
                                <option value="Corea del Norte">Corea del Norte</option>
                                <option value="Costa de Marfíl">Costa de Marfíl</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Croacia (Hrvatska)">Croacia (Hrvatska)</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Dinamarca">Dinamarca</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egipto">Egipto</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Emiratos Árabes Unidos">Emiratos Árabes Unidos</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Eslovenia">Eslovenia</option>
                                <option value="España">España</option>
                                <option value="Estados Unidos">Estados Unidos</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Etiopía">Etiopía</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Filipinas">Filipinas</option>
                                <option value="Finlandia">Finlandia</option>
                                <option value="Francia">Francia</option>
                                <option value="Gabón">Gabón</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Granada">Granada</option>
                                <option value="Grecia">Grecia</option>
                                <option value="Groenlandia">Groenlandia</option>
                                <option value="Guadalupe">Guadalupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guayana">Guayana</option>
                                <option value="Guayana Francesa">Guayana Francesa</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea Ecuatorial">Guinea Ecuatorial</option>
                                <option value="Guinea-Bissau">Guinea-Bissau</option>
                                <option value="Haití">Haití</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hungría">Hungría</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Irak">Irak</option>
                                <option value="Irán">Irán</option>
                                <option value="Irlanda">Irlanda</option>
                                <option value="Isla Bouvet">Isla Bouvet</option>
                                <option value="Isla de Christmas">Isla de Christmas</option>
                                <option value="Islandia">Islandia</option>
                                <option value="Islas Caimán">Islas Caimán</option>
                                <option value="Islas Cook">Islas Cook</option>
                                <option value="Islas de Cocos o Keeling">Islas de Cocos o Keeling</option>
                                <option value="Islas Faroe">Islas Faroe</option>
                                <option value="Islas Heard y McDonald">Islas Heard y McDonald</option>
                                <option value="Islas Malvinas">Islas Malvinas</option>
                                <option value="Islas Marianas del Norte">Islas Marianas del Norte</option>
                                <option value="Islas Marshall">Islas Marshall</option>
                                <option value="Islas menores de Estados Unidos">Islas menores de Estados Unidos</option>
                                <option value="Islas Palau">Islas Palau</option>
                                <option value="Islas Salomón">Islas Salomón</option>
                                <option value="Islas Svalbard y Jan Mayen">Islas Svalbard y Jan Mayen</option>
                                <option value="Islas Tokelau">Islas Tokelau</option>
                                <option value="Islas Turks y Caicos">Islas Turks y Caicos</option>
                                <option value="Islas Vírgenes (EEUU)">Islas Vírgenes (EEUU)</option>
                                <option value="Islas Vírgenes (Reino Unido)">Islas Vírgenes (Reino Unido)</option>
                                <option value="Islas Wallis y Futuna">Islas Wallis y Futuna</option>
                                <option value="Israel">Israel</option>
                                <option value="Italia">Italia</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japón">Japón</option>
                                <option value="Jordania">Jordania</option>
                                <option value="Kazajistán">Kazajistán</option>
                                <option value="Kenia">Kenia</option>
                                <option value="Kirguizistán">Kirguizistán</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Laos">Laos</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Letonia">Letonia</option>
                                <option value="Líbano">Líbano</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libia">Libia</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lituania">Lituania</option>
                                <option value="Luxemburgo">Luxemburgo</option>
                                <option value="Macedonia, Ex-República Yugoslava de">Macedonia, Ex-República Yugoslava de</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malasia">Malasia</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Maldivas">Maldivas</option>
                                <option value="Malí">Malí</option>
                                <option value="Malta">Malta</option>
                                <option value="Marruecos">Marruecos</option>
                                <option value="Martinica">Martinica</option>
                                <option value="Mauricio">Mauricio</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="México">México</option>
                                <option value="Micronesia">Micronesia</option>
                                <option value="Moldavia">Moldavia</option>
                                <option value="Mónaco">Mónaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Níger">Níger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk">Norfolk</option>
                                <option value="Noruega">Noruega</option>
                                <option value="Nueva Caledonia">Nueva Caledonia</option>
                                <option value="Nueva Zelanda">Nueva Zelanda</option>
                                <option value="Omán">Omán</option>
                                <option value="Países Bajos">Países Bajos</option>
                                <option value="Panamá">Panamá</option>
                                <option value="Papúa Nueva Guinea">Papúa Nueva Guinea</option>
                                <option value="Paquistán">Paquistán</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Perú">Perú</option>
                                <option value="Pitcairn">Pitcairn</option>
                                <option value="Polinesia Francesa">Polinesia Francesa</option>
                                <option value="Polonia">Polonia</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Reino Unido">Reino Unido</option>
                                <option value="República Centroafricana">República Centroafricana</option>
                                <option value="República Checa">República Checa</option>
                                <option value="República de Sudáfrica">República de Sudáfrica</option>
                                <option value="República Dominicana">República Dominicana</option>
                                <option value="República Eslovaca">República Eslovaca</option>
                                <option value="Reunión">Reunión</option>
                                <option value="Ruanda">Ruanda</option>
                                <option value="Rumania">Rumania</option>
                                <option value="Rusia">Rusia</option>
                                <option value="Sahara Occidental">Sahara Occidental</option>
                                <option value="Saint Kitts y Nevis">Saint Kitts y Nevis</option>
                                <option value="Samoa">Samoa</option>
                                <option value="Samoa Americana">Samoa Americana</option>
                                <option value="San Marino">San Marino</option>
                                <option value="San Vicente y Granadinas">San Vicente y Granadinas</option>
                                <option value="Santa Helena">Santa Helena</option>
                                <option value="Santa Lucía">Santa Lucía</option>
                                <option value="Santo Tomé y Príncipe">Santo Tomé y Príncipe</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leona">Sierra Leona</option>
                                <option value="Singapur">Singapur</option>
                                <option value="Siria">Siria</option>
                                <option value="Somalia">Somalia</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="St Pierre y Miquelon">St Pierre y Miquelon</option>
                                <option value="Suazilandia">Suazilandia</option>
                                <option value="Sudán">Sudán</option>
                                <option value="Suecia">Suecia</option>
                                <option value="Suiza">Suiza</option>
                                <option value="Surinam">Surinam</option>
                                <option value="Tailandia">Tailandia</option>
                                <option value="Taiwán">Taiwán</option>
                                <option value="Tanzania">Tanzania</option>
                                <option value="Tayikistán">Tayikistán</option>
                                <option value="Territorios franceses del Sur">Territorios franceses del Sur</option>
                                <option value="Timor Oriental">Timor Oriental</option>
                                <option value="Togo">Togo</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad y Tobago">Trinidad y Tobago</option>
                                <option value="Túnez">Túnez</option>
                                <option value="Turkmenistán">Turkmenistán</option>
                                <option value="Turquía">Turquía</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Ucrania">Ucrania</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistán">Uzbekistán</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Yugoslavia">Yugoslavia</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabue">Zimbabue</option>
                            </select> {/* JSON */}
                        </div>
                        <div className="campo mensaje">
                            <label>{idioma == "es" ? "Consulta" : "Message"}</label>
                            <textarea 
                                id="mensaje"
                                name={"consulta"}
                                placeholder={idioma == "es" ? "Escríbenos tus consultas" : "Write us your questions"}
                                value={consulta}
                                onChange={(e) => setConsulta(e.target.value)}></textarea>
                        </div>
                        <div className="campo enviar">
                            <button typeof='submit'>
                                {idioma == "es" ? "Enviar" : "Submit"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* <!--Footer Enlaces --> */}
            <div className="container-footer">
                <div className="Suscribete">
                    {/* <div className="texto">
                        <h3>{ idioma == "es" ? "Suscríbete a nuestro newsletter para recibir las últimas noticias" : "Subscribe to our newsletter to receive the latest news" } </h3>
                    </div>
                    <div className="correo">
                        <form action="#">
                            <input name="email" placeholder={idioma == "es" ? "Correo" : "Email"} />
                            <button type="submit">{idioma == "es" ? "Enviar" : "Submit"}</button>
                        </form>
                    </div> */}
                </div>
                <div className="enlaces">
                    <div className="columna Columna1">
                    <ul>
                        <li>
                            <Link to="/capacidades">
                                <h3>{ idioma == "es" ? "Servicio Alpha" : "Alpha Service"}</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/capacidades/servicio#premium">{ idioma == "es" ? "Servicio Premium Alpha" : "Alpha Premium Service" }</Link>
                        </li>
                        <li>
                            <Link to="/capacidades/servicio#asistencia">{ idioma == "es" ? "Asistencia Técnica Alpha" : "Alpha Technical Assistance" }</Link>
                        </li>
                        <li>
                            <Link to="/capacidades/consultoria">
                                <h3>{ idioma == "es" ? "Consultoría" : "Consultancy" }</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/capacidades/consultoria#macro">{ idioma == "es" ? "Macro" : "Macro" }</Link>
                        </li>
                        <li>
                            <Link to="/capacidades/consultoria#micro">{ idioma == "es" ? "Micro" : "Micro" }</Link>
                        </li>
                        <li>
                            <Link to="/capacidades/consultoria#estructuracion">{ idioma == "es" ? "Estructuración y Financiamiento de Proyectos" : "Project Structuring and Financing" }</Link>
                        </li>
                        <li>
                            <Link to="/capacidades/consultoria#ifd">{ idioma == "es" ? "IFD" : "DFI" }</Link>
                        </li>
                        <li>
                            <Link to="/capacidades/consultoria#peritajes">{ idioma == "es" ? "Peritajes" : "Expert reports" }</Link>
                        </li>
                        <li>
                            <Link to="/capacidades/academia">
                                <h3>{ idioma == "es" ? "Academia" : "Academy" }</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/capacidades/academia">{ idioma == "es" ? "Formación Carrera de Economía" : "Economics Career Training"}</Link>
                        </li>
                        <li>
                            <Link to="/capacidades/academia#publica">{ idioma == "es" ? "Gestión Inversión Pública" : "Public Investment Management" }</Link>
                        </li>
                        <li>
                            <Link to="/capacidades/academia#aprendo">{ idioma == "es" ?  "Programa Aprendo Haciendo en Inversión Pública" : "Learn by Doing Program in Public Investment" }</Link>
                        </li>
                    </ul>
                    </div>
                    <div className="columna Columna2">
                    <ul>
                        <li>
                            <Link to="/observatorio">
                                <h3>{ idioma == "es" ? "Observatorio" : "Obsevatory" }</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/observatorio#observatorio1">{ idioma == "es" ? "Indicador de Actividad Económica (IAE)" : "Economic Activity Indicator (EAI)" }</Link>
                        </li>
                        <li>
                            <Link to="/observatorio#observatorio2">{ idioma == "es" ? "Indicador de Condiciones Externas (ICE)" : "External Conditions Indicator (ECI)" }</Link>
                        </li>
                        <li>
                            <Link to="/observatorio#observatorio3">{ idioma == "es" ? "Indicador de Condiciones Monetarias (ICM)" : "Monetary Conditions Indicator (MCI)" }</Link>
                        </li>
                        <li>
                            <Link to="/observatorio#observatorio4">{ idioma == "es" ? "Indicador de Condiciones Crediticias (ICC)" : "Credit Conditions Indicator (CCI)" }</Link>
                        </li>
                    </ul>
                    </div>
                    <div className="columna Columna3">
                    <ul>
                        <li>
                            <Link to="/nosotros">
                                <h3>{ idioma == "es" ? "Nosotros" : "About us"}</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/nosotros">{ idioma == "es" ? "Quienes somos" : "Who we are" }</Link>
                        </li>
                        <li>
                            <Link to="/nosotros/experiencia">{ idioma == "es" ? "Nuestra experiencia" : "Our experience" }</Link>
                        </li>
                    </ul>
                    </div>
                    <div className="columna Columna4">
                    <ul>
                        <li>
                            <Link to="/blog">
                                <h3>{ idioma == "es" ? "Blog Alpha" : "Alpha Blog" }</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/repositorio">
                                <h3>{ idioma == "es" ? "Repositorio" : "Repository" }</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacto">
                                <h3>{ idioma == "es" ? "Contacto" : "Contact" }</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacto#contacto">{ idioma == "es" ? "Contáctanos" : "Contact us" }</Link>
                        </li>
                        <li>
                            <Link to="/contacto#trabaja">{ idioma == "es" ? "Trabaja con nosotros" : "Join us" }</Link>
                        </li>
                        <li className="logos-redes">
                            {redes.map((red) => (
                                <Link key={red._id} to={red.url}>
                                    <i><red.icono /></i>
                                </Link>
                            ))}
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="linea">
                    <hr />
                </div>
                <div className="LogoCopy">
                    <div className="logofooter">
                        <Link to={"/"}>
                            <svg width="164" height="43" viewBox="0 0 164 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                d="M46.8092 0L46.8115 0.00128791L31.3304 25.8121C29.5079 29.1247 25.8901 31.3814 21.7248 31.3814C15.7258 31.3814 10.8625 26.7002 10.8625 20.9256C10.8625 15.2654 15.5351 10.6556 21.3698 10.4753L21.3621 10.4624L31.2523 10.4624L37.5275 0H21.7248L21.7329 0.0134471L21.7245 0.0134456C9.72641 0.0134456 0 9.37591 0 20.9251C0 32.4743 9.72641 41.8367 21.7245 41.8367C30.0114 41.8367 37.2145 37.3705 40.8778 30.8023L59.3528 0H46.8092Z" />
                                <path
                                d="M65.4761 37.3091C65.3078 37.3162 65.1323 37.3324 64.9497 37.3574C64.7707 37.3789 64.5934 37.4147 64.418 37.4648C64.2461 37.5114 64.0832 37.5723 63.9292 37.6475C63.7752 37.7227 63.641 37.8122 63.5264 37.916C63.4118 38.0199 63.3223 38.1398 63.2578 38.2759C63.1934 38.4119 63.1647 38.5659 63.1719 38.7378C63.1755 38.8739 63.2005 38.9938 63.2471 39.0977C63.2972 39.1979 63.3599 39.2821 63.4351 39.3501C63.5138 39.4146 63.6034 39.4647 63.7036 39.5005C63.8039 39.5327 63.9113 39.5488 64.0259 39.5488C64.1727 39.5488 64.3105 39.5345 64.4395 39.5059C64.5684 39.4772 64.6901 39.436 64.8047 39.3823C64.9229 39.325 65.0356 39.257 65.1431 39.1782C65.2541 39.0994 65.3651 39.0081 65.4761 38.9043V37.3091ZM62.4575 35.644C62.4575 35.4614 62.5112 35.2896 62.6187 35.1284C62.7261 34.9673 62.8765 34.8276 63.0698 34.7095C63.2632 34.5877 63.4924 34.4928 63.7573 34.4248C64.0259 34.3568 64.3177 34.3228 64.6328 34.3228C65.2487 34.3228 65.7017 34.4857 65.9917 34.8115C66.2853 35.1374 66.4303 35.6548 66.4268 36.3638L66.416 38.8345C66.416 38.9491 66.4124 39.0654 66.4053 39.1836C66.4017 39.2982 66.391 39.4307 66.373 39.5811L67.1519 39.5381V40H65.5781C65.5566 39.8747 65.5405 39.7655 65.5298 39.6724C65.519 39.5793 65.5101 39.4808 65.5029 39.377C65.2559 39.624 64.9855 39.8192 64.6919 39.9624C64.4019 40.1056 64.0939 40.1772 63.7681 40.1772C63.4924 40.1772 63.2507 40.1432 63.043 40.0752C62.8389 40.0107 62.6688 39.9194 62.5327 39.8013C62.3966 39.6831 62.2946 39.5452 62.2266 39.3877C62.1585 39.2266 62.1245 39.0547 62.1245 38.8721C62.1245 38.6465 62.1729 38.4406 62.2695 38.2544C62.3698 38.0682 62.5023 37.9035 62.667 37.7603C62.8353 37.6134 63.0304 37.4881 63.2524 37.3843C63.4744 37.2769 63.709 37.1891 63.9561 37.1211C64.2067 37.0531 64.4609 37.0047 64.7188 36.9761C64.9801 36.9438 65.2344 36.9295 65.4814 36.9331V36.2456C65.4814 36.0558 65.4707 35.8714 65.4492 35.6924C65.4277 35.5133 65.3794 35.3504 65.3042 35.2036C65.2326 35.0568 65.118 34.9404 64.9604 34.8545C64.8065 34.7686 64.6274 34.7256 64.4233 34.7256C64.3052 34.7256 64.1924 34.7363 64.085 34.7578C63.9775 34.7757 63.8719 34.8079 63.7681 34.8545C63.6642 34.901 63.5693 34.9619 63.4834 35.0371C63.401 35.1123 63.333 35.2018 63.2793 35.3057C63.333 35.3665 63.3688 35.4346 63.3867 35.5098C63.4082 35.5814 63.4189 35.6512 63.4189 35.7192C63.4189 35.7622 63.41 35.8123 63.3921 35.8696C63.3742 35.9233 63.3455 35.9753 63.3062 36.0254C63.2703 36.0719 63.222 36.1113 63.1611 36.1436C63.1038 36.1722 63.0251 36.1865 62.9248 36.1865C62.7816 36.1865 62.667 36.1346 62.5811 36.0308C62.4987 35.9233 62.4575 35.7944 62.4575 35.644ZM69.9771 39.7476C70.1167 39.7476 70.2563 39.7314 70.396 39.6992C70.5392 39.6634 70.6681 39.6097 70.7827 39.5381C70.9009 39.4665 70.9958 39.377 71.0674 39.2695C71.1426 39.1585 71.1802 39.0278 71.1802 38.8774C71.1802 38.702 71.1336 38.5534 71.0405 38.4316C70.951 38.3063 70.8311 38.1971 70.6807 38.104C70.5339 38.0073 70.3638 37.9214 70.1704 37.8462C69.9806 37.771 69.7855 37.694 69.585 37.6152C69.388 37.5365 69.1947 37.4505 69.0049 37.3574C68.8151 37.2607 68.645 37.1479 68.4946 37.019C68.3478 36.8901 68.2279 36.7362 68.1348 36.5571C68.0452 36.3781 68.0005 36.165 68.0005 35.918C68.0005 35.764 68.0291 35.5957 68.0864 35.4131C68.1437 35.2269 68.244 35.0532 68.3872 34.8921C68.5304 34.731 68.722 34.5967 68.9619 34.4893C69.2054 34.3783 69.5116 34.3228 69.8804 34.3228C69.9806 34.3228 70.0863 34.3299 70.1973 34.3442C70.3118 34.3586 70.4282 34.3854 70.5464 34.4248C70.6646 34.4606 70.7827 34.509 70.9009 34.5698C71.019 34.6307 71.1354 34.7059 71.25 34.7954L71.2231 34.3765H71.6851V36.3047H71.3413C71.327 36.1149 71.2894 35.9269 71.2285 35.7407C71.1712 35.5545 71.0853 35.388 70.9707 35.2412C70.8597 35.0908 70.7183 34.9691 70.5464 34.876C70.3745 34.7829 70.1704 34.7363 69.9341 34.7363C69.7622 34.7363 69.61 34.7596 69.4775 34.8062C69.3451 34.8491 69.2323 34.91 69.1392 34.9888C69.0496 35.064 68.9816 35.1517 68.9351 35.252C68.8885 35.3522 68.8652 35.4578 68.8652 35.5688C68.8652 35.7479 68.91 35.9019 68.9995 36.0308C69.0926 36.1597 69.2144 36.2743 69.3647 36.3745C69.5151 36.4748 69.687 36.5661 69.8804 36.6484C70.0737 36.7272 70.2707 36.8096 70.4712 36.8955C70.6717 36.9779 70.8687 37.0674 71.062 37.1641C71.2554 37.2572 71.4272 37.3682 71.5776 37.4971C71.728 37.626 71.848 37.7764 71.9375 37.9482C72.0306 38.1201 72.0771 38.3242 72.0771 38.5605C72.0771 38.8363 72.0216 39.0762 71.9106 39.2803C71.7996 39.4844 71.6528 39.6527 71.4702 39.7852C71.2912 39.9176 71.0871 40.0161 70.8579 40.0806C70.6323 40.145 70.4032 40.1772 70.1704 40.1772C69.798 40.1772 69.4704 40.1271 69.1875 40.0269C68.9046 39.9302 68.6719 39.8192 68.4893 39.6938L68.5269 40.0752H68.0649L68.0005 38.1846H68.3389C68.3532 38.4137 68.4051 38.625 68.4946 38.8184C68.5877 39.0081 68.7077 39.1729 68.8545 39.3125C69.0049 39.4486 69.175 39.556 69.3647 39.6348C69.5581 39.71 69.7622 39.7476 69.9771 39.7476ZM75.7671 34.7524C75.3374 34.7524 74.9829 34.8796 74.7036 35.1338C74.4243 35.3844 74.2399 35.7926 74.1504 36.3584H76.9541C76.9541 36.165 76.9326 35.9735 76.8896 35.7837C76.8467 35.5903 76.7769 35.4185 76.6802 35.2681C76.5871 35.1141 76.4653 34.9906 76.3149 34.8975C76.1646 34.8008 75.9819 34.7524 75.7671 34.7524ZM77.9907 36.7559L74.1182 36.8203C74.1146 37.2428 74.1468 37.626 74.2148 37.9697C74.2829 38.3135 74.3903 38.6071 74.5371 38.8506C74.6839 39.0941 74.8719 39.2821 75.1011 39.4146C75.3338 39.547 75.6113 39.6133 75.9336 39.6133C76.1055 39.6133 76.2809 39.59 76.46 39.5435C76.639 39.4969 76.8109 39.4342 76.9756 39.3555C77.1439 39.2731 77.2979 39.1764 77.4375 39.0654C77.5771 38.9508 77.6935 38.8291 77.7866 38.7002L78.0552 38.9204C77.9048 39.1496 77.7293 39.3447 77.5288 39.5059C77.3319 39.6634 77.126 39.7923 76.9111 39.8926C76.6999 39.9928 76.4868 40.0645 76.272 40.1074C76.0571 40.154 75.8566 40.1772 75.6704 40.1772C75.2909 40.1772 74.9364 40.1092 74.6069 39.9731C74.2811 39.8371 73.9982 39.6419 73.7583 39.3877C73.5184 39.1335 73.3286 38.8273 73.189 38.4692C73.0529 38.1112 72.9849 37.7083 72.9849 37.2607C72.9849 36.874 73.0511 36.5052 73.1836 36.1543C73.3161 35.7998 73.5041 35.4865 73.7476 35.2144C73.991 34.9422 74.2829 34.7256 74.623 34.5645C74.9632 34.4033 75.341 34.3228 75.7563 34.3228C76.0607 34.3228 76.3472 34.3729 76.6157 34.4731C76.8879 34.5734 77.126 34.7238 77.3301 34.9243C77.5342 35.1248 77.6953 35.3791 77.8135 35.687C77.9316 35.9914 77.9907 36.3477 77.9907 36.7559ZM81.0308 39.7476C81.1704 39.7476 81.3101 39.7314 81.4497 39.6992C81.5929 39.6634 81.7218 39.6097 81.8364 39.5381C81.9546 39.4665 82.0495 39.377 82.1211 39.2695C82.1963 39.1585 82.2339 39.0278 82.2339 38.8774C82.2339 38.702 82.1873 38.5534 82.0942 38.4316C82.0047 38.3063 81.8848 38.1971 81.7344 38.104C81.5876 38.0073 81.4175 37.9214 81.2241 37.8462C81.0343 37.771 80.8392 37.694 80.6387 37.6152C80.4417 37.5365 80.2484 37.4505 80.0586 37.3574C79.8688 37.2607 79.6987 37.1479 79.5483 37.019C79.4015 36.8901 79.2816 36.7362 79.1885 36.5571C79.099 36.3781 79.0542 36.165 79.0542 35.918C79.0542 35.764 79.0828 35.5957 79.1401 35.4131C79.1974 35.2269 79.2977 35.0532 79.4409 34.8921C79.5841 34.731 79.7757 34.5967 80.0156 34.4893C80.2591 34.3783 80.5653 34.3228 80.9341 34.3228C81.0343 34.3228 81.14 34.3299 81.251 34.3442C81.3656 34.3586 81.4819 34.3854 81.6001 34.4248C81.7183 34.4606 81.8364 34.509 81.9546 34.5698C82.0728 34.6307 82.1891 34.7059 82.3037 34.7954L82.2769 34.3765H82.7388V36.3047H82.395C82.3807 36.1149 82.3431 35.9269 82.2822 35.7407C82.2249 35.5545 82.139 35.388 82.0244 35.2412C81.9134 35.0908 81.772 34.9691 81.6001 34.876C81.4282 34.7829 81.2241 34.7363 80.9878 34.7363C80.8159 34.7363 80.6637 34.7596 80.5312 34.8062C80.3988 34.8491 80.286 34.91 80.1929 34.9888C80.1034 35.064 80.0353 35.1517 79.9888 35.252C79.9422 35.3522 79.9189 35.4578 79.9189 35.5688C79.9189 35.7479 79.9637 35.9019 80.0532 36.0308C80.1463 36.1597 80.2681 36.2743 80.4185 36.3745C80.5688 36.4748 80.7407 36.5661 80.9341 36.6484C81.1274 36.7272 81.3244 36.8096 81.5249 36.8955C81.7254 36.9779 81.9224 37.0674 82.1157 37.1641C82.3091 37.2572 82.481 37.3682 82.6313 37.4971C82.7817 37.626 82.9017 37.7764 82.9912 37.9482C83.0843 38.1201 83.1309 38.3242 83.1309 38.5605C83.1309 38.8363 83.0754 39.0762 82.9644 39.2803C82.8534 39.4844 82.7065 39.6527 82.5239 39.7852C82.3449 39.9176 82.1408 40.0161 81.9116 40.0806C81.686 40.145 81.4569 40.1772 81.2241 40.1772C80.8517 40.1772 80.5241 40.1271 80.2412 40.0269C79.9583 39.9302 79.7256 39.8192 79.543 39.6938L79.5806 40.0752H79.1187L79.0542 38.1846H79.3926C79.4069 38.4137 79.4588 38.625 79.5483 38.8184C79.6414 39.0081 79.7614 39.1729 79.9082 39.3125C80.0586 39.4486 80.2287 39.556 80.4185 39.6348C80.6118 39.71 80.8159 39.7476 81.0308 39.7476ZM86.7886 34.7417C86.4985 34.7417 86.2497 34.8062 86.042 34.9351C85.8379 35.064 85.6696 35.2358 85.5371 35.4507C85.4046 35.6655 85.3062 35.9126 85.2417 36.1919C85.1808 36.4712 85.1504 36.7612 85.1504 37.062C85.1504 37.4022 85.1844 37.7334 85.2524 38.0557C85.3241 38.3779 85.4315 38.6644 85.5747 38.915C85.7179 39.1621 85.897 39.3608 86.1118 39.5112C86.3302 39.6616 86.5845 39.7368 86.8745 39.7368C87.1646 39.7368 87.408 39.6724 87.605 39.5435C87.8055 39.411 87.9666 39.2373 88.0884 39.0225C88.2137 38.8076 88.3032 38.5623 88.3569 38.2866C88.4106 38.0109 88.4375 37.728 88.4375 37.438C88.4375 37.1086 88.4071 36.7827 88.3462 36.4604C88.2853 36.1382 88.1886 35.8499 88.0562 35.5957C87.9237 35.3415 87.7518 35.1356 87.5405 34.978C87.3328 34.8205 87.0822 34.7417 86.7886 34.7417ZM86.7886 34.3228C87.1753 34.3228 87.5369 34.3944 87.8735 34.5376C88.2101 34.6772 88.502 34.8724 88.749 35.123C88.9997 35.3701 89.1966 35.6655 89.3398 36.0093C89.4867 36.3494 89.5601 36.7183 89.5601 37.1157C89.5601 37.5418 89.4884 37.9411 89.3452 38.3135C89.2056 38.6859 89.0104 39.0099 88.7598 39.2856C88.5127 39.5614 88.2191 39.7798 87.8789 39.9409C87.5423 40.0985 87.1789 40.1772 86.7886 40.1772C86.4019 40.1772 86.0402 40.1092 85.7036 39.9731C85.3706 39.8335 85.0788 39.6401 84.8281 39.3931C84.5811 39.146 84.3859 38.8524 84.2427 38.5122C84.0994 38.1685 84.0278 37.7925 84.0278 37.3843C84.0278 36.951 84.0977 36.5482 84.2373 36.1758C84.3805 35.7998 84.5757 35.4757 84.8228 35.2036C85.0698 34.9279 85.3617 34.7131 85.6982 34.5591C86.0348 34.4015 86.3983 34.3228 86.7886 34.3228ZM93.6528 34.9243C93.5132 34.9207 93.3717 34.9476 93.2285 35.0049C93.0853 35.0586 92.9438 35.1392 92.8042 35.2466C92.6681 35.354 92.5392 35.4829 92.4175 35.6333C92.2957 35.7837 92.1865 35.9502 92.0898 36.1328L92.1006 38.8345C92.1006 38.9813 92.0988 39.112 92.0952 39.2266C92.0916 39.3376 92.0791 39.4557 92.0576 39.5811L92.7505 39.5488V40H90.4946V39.6724C90.6629 39.6724 90.79 39.6401 90.876 39.5757C90.9655 39.5076 91.0299 39.4146 91.0693 39.2964C91.1087 39.1782 91.1302 39.0368 91.1338 38.8721C91.141 38.7074 91.1445 38.5265 91.1445 38.3296V35.8159C91.1445 35.7013 91.1463 35.5868 91.1499 35.4722C91.1535 35.354 91.166 35.2323 91.1875 35.1069L90.4087 35.1392V34.688H90.7471C90.9046 34.688 91.0353 34.6808 91.1392 34.6665C91.243 34.6486 91.3289 34.6253 91.397 34.5967C91.4686 34.568 91.5277 34.5376 91.5742 34.5054C91.6208 34.4696 91.6655 34.432 91.7085 34.3926H92.0254C92.0361 34.5072 92.0451 34.6504 92.0522 34.8223C92.063 34.9906 92.0719 35.209 92.0791 35.4775C92.1615 35.3415 92.2671 35.2054 92.396 35.0693C92.5249 34.9297 92.6699 34.8062 92.8311 34.6987C92.9922 34.5877 93.1659 34.4982 93.3521 34.4302C93.5382 34.3586 93.7298 34.3228 93.9268 34.3228C94.027 34.3228 94.1237 34.3371 94.2168 34.3657C94.3135 34.3908 94.3958 34.432 94.4639 34.4893C94.5355 34.5465 94.5928 34.6182 94.6357 34.7041C94.6787 34.79 94.7002 34.8939 94.7002 35.0156C94.7002 35.0658 94.6895 35.1213 94.668 35.1821C94.6501 35.243 94.6178 35.3003 94.5713 35.354C94.5283 35.4077 94.4728 35.4525 94.4048 35.4883C94.3368 35.5241 94.2526 35.542 94.1523 35.542C94.07 35.542 93.9948 35.5241 93.9268 35.4883C93.8623 35.4525 93.8068 35.4077 93.7603 35.354C93.7173 35.2967 93.6851 35.2323 93.6636 35.1606C93.6457 35.0854 93.6421 35.0067 93.6528 34.9243ZM95.9194 35.8213C95.9194 35.7067 95.9212 35.5957 95.9248 35.4883C95.932 35.3809 95.9445 35.2537 95.9624 35.1069L95.1836 35.1499V34.688C95.4235 34.688 95.6222 34.6808 95.7798 34.6665C95.9373 34.6486 96.0662 34.6253 96.1665 34.5967C96.2668 34.568 96.3438 34.5376 96.3975 34.5054C96.4548 34.4696 96.5049 34.432 96.5479 34.3926H96.8647V38.8345C96.8647 38.9813 96.863 39.112 96.8594 39.2266C96.8558 39.3376 96.8433 39.4557 96.8218 39.5811L97.5146 39.5488V40H95.2695V39.6724C95.4342 39.6724 95.5614 39.6401 95.6509 39.5757C95.7404 39.5076 95.8049 39.4146 95.8442 39.2964C95.8836 39.1782 95.9051 39.0368 95.9087 38.8721C95.9159 38.7074 95.9194 38.5265 95.9194 38.3296V35.8213ZM96.1934 33.6191L95.8872 33.3667L96.811 31.8843C96.8934 31.7661 96.974 31.6873 97.0527 31.6479C97.1351 31.605 97.2049 31.5835 97.2622 31.5835C97.3231 31.5835 97.3804 31.596 97.4341 31.6211C97.4914 31.6426 97.5379 31.6766 97.5737 31.7231C97.6095 31.7697 97.6328 31.8127 97.6436 31.8521C97.6579 31.8914 97.665 31.9344 97.665 31.981C97.665 32.0203 97.6597 32.0579 97.6489 32.0938C97.6382 32.1296 97.6274 32.16 97.6167 32.1851C97.5845 32.2674 97.5218 32.3569 97.4287 32.4536L96.1934 33.6191ZM101.613 37.3091C101.444 37.3162 101.269 37.3324 101.086 37.3574C100.907 37.3789 100.73 37.4147 100.555 37.4648C100.383 37.5114 100.22 37.5723 100.066 37.6475C99.9119 37.7227 99.7777 37.8122 99.6631 37.916C99.5485 38.0199 99.459 38.1398 99.3945 38.2759C99.3301 38.4119 99.3014 38.5659 99.3086 38.7378C99.3122 38.8739 99.3372 38.9938 99.3838 39.0977C99.4339 39.1979 99.4966 39.2821 99.5718 39.3501C99.6506 39.4146 99.7401 39.4647 99.8403 39.5005C99.9406 39.5327 100.048 39.5488 100.163 39.5488C100.309 39.5488 100.447 39.5345 100.576 39.5059C100.705 39.4772 100.827 39.436 100.941 39.3823C101.06 39.325 101.172 39.257 101.28 39.1782C101.391 39.0994 101.502 39.0081 101.613 38.9043V37.3091ZM98.5942 35.644C98.5942 35.4614 98.6479 35.2896 98.7554 35.1284C98.8628 34.9673 99.0132 34.8276 99.2065 34.7095C99.3999 34.5877 99.6291 34.4928 99.894 34.4248C100.163 34.3568 100.454 34.3228 100.77 34.3228C101.385 34.3228 101.838 34.4857 102.128 34.8115C102.422 35.1374 102.567 35.6548 102.563 36.3638L102.553 38.8345C102.553 38.9491 102.549 39.0654 102.542 39.1836C102.538 39.2982 102.528 39.4307 102.51 39.5811L103.289 39.5381V40H101.715C101.693 39.8747 101.677 39.7655 101.667 39.6724C101.656 39.5793 101.647 39.4808 101.64 39.377C101.393 39.624 101.122 39.8192 100.829 39.9624C100.539 40.1056 100.231 40.1772 99.9048 40.1772C99.6291 40.1772 99.3874 40.1432 99.1797 40.0752C98.9756 40.0107 98.8055 39.9194 98.6694 39.8013C98.5334 39.6831 98.4313 39.5452 98.3633 39.3877C98.2952 39.2266 98.2612 39.0547 98.2612 38.8721C98.2612 38.6465 98.3096 38.4406 98.4062 38.2544C98.5065 38.0682 98.639 37.9035 98.8037 37.7603C98.972 37.6134 99.1672 37.4881 99.3892 37.3843C99.6112 37.2769 99.8457 37.1891 100.093 37.1211C100.343 37.0531 100.598 37.0047 100.855 36.9761C101.117 36.9438 101.371 36.9295 101.618 36.9331V36.2456C101.618 36.0558 101.607 35.8714 101.586 35.6924C101.564 35.5133 101.516 35.3504 101.441 35.2036C101.369 35.0568 101.255 34.9404 101.097 34.8545C100.943 34.7686 100.764 34.7256 100.56 34.7256C100.442 34.7256 100.329 34.7363 100.222 34.7578C100.114 34.7757 100.009 34.8079 99.9048 34.8545C99.8009 34.901 99.7061 34.9619 99.6201 35.0371C99.5378 35.1123 99.4697 35.2018 99.416 35.3057C99.4697 35.3665 99.5055 35.4346 99.5234 35.5098C99.5449 35.5814 99.5557 35.6512 99.5557 35.7192C99.5557 35.7622 99.5467 35.8123 99.5288 35.8696C99.5109 35.9233 99.4823 35.9753 99.4429 36.0254C99.4071 36.0719 99.3587 36.1113 99.2979 36.1436C99.2406 36.1722 99.1618 36.1865 99.0615 36.1865C98.9183 36.1865 98.8037 36.1346 98.7178 36.0308C98.6354 35.9233 98.5942 35.7944 98.5942 35.644ZM109.712 34.7524C109.283 34.7524 108.928 34.8796 108.649 35.1338C108.37 35.3844 108.185 35.7926 108.096 36.3584H110.899C110.899 36.165 110.878 35.9735 110.835 35.7837C110.792 35.5903 110.722 35.4185 110.625 35.2681C110.532 35.1141 110.411 34.9906 110.26 34.8975C110.11 34.8008 109.927 34.7524 109.712 34.7524ZM111.936 36.7559L108.063 36.8203C108.06 37.2428 108.092 37.626 108.16 37.9697C108.228 38.3135 108.336 38.6071 108.482 38.8506C108.629 39.0941 108.817 39.2821 109.046 39.4146C109.279 39.547 109.557 39.6133 109.879 39.6133C110.051 39.6133 110.226 39.59 110.405 39.5435C110.584 39.4969 110.756 39.4342 110.921 39.3555C111.089 39.2731 111.243 39.1764 111.383 39.0654C111.522 38.9508 111.639 38.8291 111.732 38.7002L112 38.9204C111.85 39.1496 111.675 39.3447 111.474 39.5059C111.277 39.6634 111.071 39.7923 110.856 39.8926C110.645 39.9928 110.432 40.0645 110.217 40.1074C110.002 40.154 109.802 40.1772 109.616 40.1772C109.236 40.1772 108.882 40.1092 108.552 39.9731C108.226 39.8371 107.944 39.6419 107.704 39.3877C107.464 39.1335 107.274 38.8273 107.134 38.4692C106.998 38.1112 106.93 37.7083 106.93 37.2607C106.93 36.874 106.996 36.5052 107.129 36.1543C107.261 35.7998 107.449 35.4865 107.693 35.2144C107.936 34.9422 108.228 34.7256 108.568 34.5645C108.909 34.4033 109.286 34.3228 109.702 34.3228C110.006 34.3228 110.292 34.3729 110.561 34.4731C110.833 34.5734 111.071 34.7238 111.275 34.9243C111.479 35.1248 111.641 35.3791 111.759 35.687C111.877 35.9914 111.936 36.3477 111.936 36.7559ZM114.976 39.7476C115.116 39.7476 115.255 39.7314 115.395 39.6992C115.538 39.6634 115.667 39.6097 115.782 39.5381C115.9 39.4665 115.995 39.377 116.066 39.2695C116.142 39.1585 116.179 39.0278 116.179 38.8774C116.179 38.702 116.133 38.5534 116.04 38.4316C115.95 38.3063 115.83 38.1971 115.68 38.104C115.533 38.0073 115.363 37.9214 115.169 37.8462C114.98 37.771 114.785 37.694 114.584 37.6152C114.387 37.5365 114.194 37.4505 114.004 37.3574C113.814 37.2607 113.644 37.1479 113.494 37.019C113.347 36.8901 113.227 36.7362 113.134 36.5571C113.044 36.3781 113 36.165 113 35.918C113 35.764 113.028 35.5957 113.085 35.4131C113.143 35.2269 113.243 35.0532 113.386 34.8921C113.529 34.731 113.721 34.5967 113.961 34.4893C114.204 34.3783 114.511 34.3228 114.879 34.3228C114.98 34.3228 115.085 34.3299 115.196 34.3442C115.311 34.3586 115.427 34.3854 115.545 34.4248C115.664 34.4606 115.782 34.509 115.9 34.5698C116.018 34.6307 116.134 34.7059 116.249 34.7954L116.222 34.3765H116.684V36.3047H116.34C116.326 36.1149 116.288 35.9269 116.228 35.7407C116.17 35.5545 116.084 35.388 115.97 35.2412C115.859 35.0908 115.717 34.9691 115.545 34.876C115.374 34.7829 115.169 34.7363 114.933 34.7363C114.761 34.7363 114.609 34.7596 114.477 34.8062C114.344 34.8491 114.231 34.91 114.138 34.9888C114.049 35.064 113.981 35.1517 113.934 35.252C113.888 35.3522 113.864 35.4578 113.864 35.5688C113.864 35.7479 113.909 35.9019 113.999 36.0308C114.092 36.1597 114.213 36.2743 114.364 36.3745C114.514 36.4748 114.686 36.5661 114.879 36.6484C115.073 36.7272 115.27 36.8096 115.47 36.8955C115.671 36.9779 115.868 37.0674 116.061 37.1641C116.254 37.2572 116.426 37.3682 116.577 37.4971C116.727 37.626 116.847 37.7764 116.937 37.9482C117.03 38.1201 117.076 38.3242 117.076 38.5605C117.076 38.8363 117.021 39.0762 116.91 39.2803C116.799 39.4844 116.652 39.6527 116.469 39.7852C116.29 39.9176 116.086 40.0161 115.857 40.0806C115.631 40.145 115.402 40.1772 115.169 40.1772C114.797 40.1772 114.469 40.1271 114.187 40.0269C113.904 39.9302 113.671 39.8192 113.488 39.6938L113.526 40.0752H113.064L113 38.1846H113.338C113.352 38.4137 113.404 38.625 113.494 38.8184C113.587 39.0081 113.707 39.1729 113.854 39.3125C114.004 39.4486 114.174 39.556 114.364 39.6348C114.557 39.71 114.761 39.7476 114.976 39.7476ZM117.753 34.5C117.946 34.4964 118.122 34.4445 118.279 34.3442C118.437 34.2404 118.575 34.1133 118.693 33.9629C118.815 33.8089 118.917 33.6424 118.999 33.4634C119.081 33.2843 119.146 33.116 119.192 32.9585H119.568C119.568 33.2521 119.567 33.526 119.563 33.7803C119.563 34.0345 119.563 34.2744 119.563 34.5H121.416V34.9297L119.563 34.9512C119.559 35.4274 119.558 35.8338 119.558 36.1704C119.558 36.507 119.556 36.7881 119.552 37.0137C119.552 37.2393 119.552 37.4183 119.552 37.5508C119.552 37.6797 119.55 37.7782 119.547 37.8462C119.547 37.9142 119.547 37.959 119.547 37.9805C119.547 37.9984 119.547 38.0091 119.547 38.0127C119.547 38.2633 119.559 38.4854 119.584 38.6787C119.613 38.8685 119.66 39.0296 119.724 39.1621C119.789 39.291 119.873 39.3895 119.977 39.4575C120.084 39.522 120.218 39.5542 120.379 39.5542C120.569 39.5542 120.757 39.4969 120.943 39.3823C121.13 39.2677 121.294 39.1048 121.438 38.8936L121.733 39.1353C121.572 39.3787 121.411 39.5703 121.25 39.71C121.092 39.846 120.942 39.9481 120.798 40.0161C120.655 40.0877 120.521 40.1325 120.396 40.1504C120.274 40.1683 120.166 40.1772 120.073 40.1772C119.962 40.1772 119.848 40.1683 119.729 40.1504C119.615 40.1325 119.5 40.0967 119.386 40.043C119.275 39.9928 119.169 39.9212 119.069 39.8281C118.972 39.7314 118.886 39.6079 118.811 39.4575C118.736 39.3071 118.677 39.1245 118.634 38.9097C118.591 38.6948 118.571 38.4406 118.575 38.147L118.596 34.9673L117.753 34.9727V34.5ZM125.428 34.9243C125.289 34.9207 125.147 34.9476 125.004 35.0049C124.861 35.0586 124.719 35.1392 124.58 35.2466C124.444 35.354 124.315 35.4829 124.193 35.6333C124.071 35.7837 123.962 35.9502 123.865 36.1328L123.876 38.8345C123.876 38.9813 123.874 39.112 123.871 39.2266C123.867 39.3376 123.854 39.4557 123.833 39.5811L124.526 39.5488V40H122.27V39.6724C122.438 39.6724 122.565 39.6401 122.651 39.5757C122.741 39.5076 122.805 39.4146 122.845 39.2964C122.884 39.1782 122.906 39.0368 122.909 38.8721C122.916 38.7074 122.92 38.5265 122.92 38.3296V35.8159C122.92 35.7013 122.922 35.5868 122.925 35.4722C122.929 35.354 122.941 35.2323 122.963 35.1069L122.184 35.1392V34.688H122.522C122.68 34.688 122.811 34.6808 122.915 34.6665C123.018 34.6486 123.104 34.6253 123.172 34.5967C123.244 34.568 123.303 34.5376 123.35 34.5054C123.396 34.4696 123.441 34.432 123.484 34.3926H123.801C123.812 34.5072 123.82 34.6504 123.828 34.8223C123.838 34.9906 123.847 35.209 123.854 35.4775C123.937 35.3415 124.042 35.2054 124.171 35.0693C124.3 34.9297 124.445 34.8062 124.606 34.6987C124.768 34.5877 124.941 34.4982 125.127 34.4302C125.314 34.3586 125.505 34.3228 125.702 34.3228C125.802 34.3228 125.899 34.3371 125.992 34.3657C126.089 34.3908 126.171 34.432 126.239 34.4893C126.311 34.5465 126.368 34.6182 126.411 34.7041C126.454 34.79 126.476 34.8939 126.476 35.0156C126.476 35.0658 126.465 35.1213 126.443 35.1821C126.425 35.243 126.393 35.3003 126.347 35.354C126.304 35.4077 126.248 35.4525 126.18 35.4883C126.112 35.5241 126.028 35.542 125.928 35.542C125.845 35.542 125.77 35.5241 125.702 35.4883C125.638 35.4525 125.582 35.4077 125.536 35.354C125.493 35.2967 125.46 35.2323 125.439 35.1606C125.421 35.0854 125.417 35.0067 125.428 34.9243ZM130.198 37.3091C130.029 37.3162 129.854 37.3324 129.671 37.3574C129.492 37.3789 129.315 37.4147 129.14 37.4648C128.968 37.5114 128.805 37.5723 128.651 37.6475C128.497 37.7227 128.363 37.8122 128.248 37.916C128.133 38.0199 128.044 38.1398 127.979 38.2759C127.915 38.4119 127.886 38.5659 127.894 38.7378C127.897 38.8739 127.922 38.9938 127.969 39.0977C128.019 39.1979 128.082 39.2821 128.157 39.3501C128.236 39.4146 128.325 39.4647 128.425 39.5005C128.526 39.5327 128.633 39.5488 128.748 39.5488C128.894 39.5488 129.032 39.5345 129.161 39.5059C129.29 39.4772 129.412 39.436 129.526 39.3823C129.645 39.325 129.757 39.257 129.865 39.1782C129.976 39.0994 130.087 39.0081 130.198 38.9043V37.3091ZM127.179 35.644C127.179 35.4614 127.233 35.2896 127.34 35.1284C127.448 34.9673 127.598 34.8276 127.792 34.7095C127.985 34.5877 128.214 34.4928 128.479 34.4248C128.748 34.3568 129.039 34.3228 129.354 34.3228C129.97 34.3228 130.423 34.4857 130.713 34.8115C131.007 35.1374 131.152 35.6548 131.148 36.3638L131.138 38.8345C131.138 38.9491 131.134 39.0654 131.127 39.1836C131.123 39.2982 131.113 39.4307 131.095 39.5811L131.874 39.5381V40H130.3C130.278 39.8747 130.262 39.7655 130.251 39.6724C130.241 39.5793 130.232 39.4808 130.225 39.377C129.978 39.624 129.707 39.8192 129.414 39.9624C129.124 40.1056 128.816 40.1772 128.49 40.1772C128.214 40.1772 127.972 40.1432 127.765 40.0752C127.561 40.0107 127.39 39.9194 127.254 39.8013C127.118 39.6831 127.016 39.5452 126.948 39.3877C126.88 39.2266 126.846 39.0547 126.846 38.8721C126.846 38.6465 126.895 38.4406 126.991 38.2544C127.091 38.0682 127.224 37.9035 127.389 37.7603C127.557 37.6134 127.752 37.4881 127.974 37.3843C128.196 37.2769 128.431 37.1891 128.678 37.1211C128.928 37.0531 129.183 37.0047 129.44 36.9761C129.702 36.9438 129.956 36.9295 130.203 36.9331V36.2456C130.203 36.0558 130.192 35.8714 130.171 35.6924C130.149 35.5133 130.101 35.3504 130.026 35.2036C129.954 35.0568 129.84 34.9404 129.682 34.8545C129.528 34.7686 129.349 34.7256 129.145 34.7256C129.027 34.7256 128.914 34.7363 128.807 34.7578C128.699 34.7757 128.594 34.8079 128.49 34.8545C128.386 34.901 128.291 34.9619 128.205 35.0371C128.123 35.1123 128.055 35.2018 128.001 35.3057C128.055 35.3665 128.09 35.4346 128.108 35.5098C128.13 35.5814 128.141 35.6512 128.141 35.7192C128.141 35.7622 128.132 35.8123 128.114 35.8696C128.096 35.9233 128.067 35.9753 128.028 36.0254C127.992 36.0719 127.944 36.1113 127.883 36.1436C127.826 36.1722 127.747 36.1865 127.646 36.1865C127.503 36.1865 127.389 36.1346 127.303 36.0308C127.22 35.9233 127.179 35.7944 127.179 35.644ZM132.298 34.5C132.491 34.4964 132.667 34.4445 132.824 34.3442C132.982 34.2404 133.12 34.1133 133.238 33.9629C133.36 33.8089 133.462 33.6424 133.544 33.4634C133.626 33.2843 133.691 33.116 133.737 32.9585H134.113C134.113 33.2521 134.111 33.526 134.108 33.7803C134.108 34.0345 134.108 34.2744 134.108 34.5H135.961V34.9297L134.108 34.9512C134.104 35.4274 134.103 35.8338 134.103 36.1704C134.103 36.507 134.101 36.7881 134.097 37.0137C134.097 37.2393 134.097 37.4183 134.097 37.5508C134.097 37.6797 134.095 37.7782 134.092 37.8462C134.092 37.9142 134.092 37.959 134.092 37.9805C134.092 37.9984 134.092 38.0091 134.092 38.0127C134.092 38.2633 134.104 38.4854 134.129 38.6787C134.158 38.8685 134.205 39.0296 134.269 39.1621C134.333 39.291 134.418 39.3895 134.521 39.4575C134.629 39.522 134.763 39.5542 134.924 39.5542C135.114 39.5542 135.302 39.4969 135.488 39.3823C135.674 39.2677 135.839 39.1048 135.982 38.8936L136.278 39.1353C136.117 39.3787 135.956 39.5703 135.794 39.71C135.637 39.846 135.486 39.9481 135.343 40.0161C135.2 40.0877 135.066 40.1325 134.94 40.1504C134.819 40.1683 134.711 40.1772 134.618 40.1772C134.507 40.1772 134.393 40.1683 134.274 40.1504C134.16 40.1325 134.045 40.0967 133.931 40.043C133.82 39.9928 133.714 39.9212 133.614 39.8281C133.517 39.7314 133.431 39.6079 133.356 39.4575C133.281 39.3071 133.222 39.1245 133.179 38.9097C133.136 38.6948 133.116 38.4406 133.12 38.147L133.141 34.9673L132.298 34.9727V34.5ZM139.576 34.7524C139.146 34.7524 138.792 34.8796 138.512 35.1338C138.233 35.3844 138.049 35.7926 137.959 36.3584H140.763C140.763 36.165 140.741 35.9735 140.698 35.7837C140.655 35.5903 140.585 35.4185 140.489 35.2681C140.396 35.1141 140.274 34.9906 140.124 34.8975C139.973 34.8008 139.791 34.7524 139.576 34.7524ZM141.799 36.7559L137.927 36.8203C137.923 37.2428 137.955 37.626 138.023 37.9697C138.091 38.3135 138.199 38.6071 138.346 38.8506C138.493 39.0941 138.681 39.2821 138.91 39.4146C139.142 39.547 139.42 39.6133 139.742 39.6133C139.914 39.6133 140.09 39.59 140.269 39.5435C140.448 39.4969 140.619 39.4342 140.784 39.3555C140.952 39.2731 141.106 39.1764 141.246 39.0654C141.386 38.9508 141.502 38.8291 141.595 38.7002L141.864 38.9204C141.713 39.1496 141.538 39.3447 141.337 39.5059C141.14 39.6634 140.935 39.7923 140.72 39.8926C140.508 39.9928 140.295 40.0645 140.081 40.1074C139.866 40.154 139.665 40.1772 139.479 40.1772C139.099 40.1772 138.745 40.1092 138.416 39.9731C138.09 39.8371 137.807 39.6419 137.567 39.3877C137.327 39.1335 137.137 38.8273 136.998 38.4692C136.861 38.1112 136.793 37.7083 136.793 37.2607C136.793 36.874 136.86 36.5052 136.992 36.1543C137.125 35.7998 137.313 35.4865 137.556 35.2144C137.8 34.9422 138.091 34.7256 138.432 34.5645C138.772 34.4033 139.15 34.3228 139.565 34.3228C139.869 34.3228 140.156 34.3729 140.424 34.4731C140.696 34.5734 140.935 34.7238 141.139 34.9243C141.343 35.1248 141.504 35.3791 141.622 35.687C141.74 35.9914 141.799 36.3477 141.799 36.7559ZM139.232 33.6191L138.926 33.3667L139.85 31.8843C139.932 31.7661 140.013 31.6873 140.091 31.6479C140.174 31.605 140.243 31.5835 140.301 31.5835C140.362 31.5835 140.419 31.596 140.473 31.6211C140.53 31.6426 140.576 31.6766 140.612 31.7231C140.648 31.7697 140.671 31.8127 140.682 31.8521C140.696 31.8914 140.704 31.9344 140.704 31.981C140.704 32.0203 140.698 32.0579 140.688 32.0938C140.677 32.1296 140.666 32.16 140.655 32.1851C140.623 32.2674 140.56 32.3569 140.467 32.4536L139.232 33.6191ZM145.312 40.3599C145.108 40.3527 144.911 40.3438 144.721 40.333C144.531 40.3223 144.351 40.3026 144.179 40.2739C143.975 40.4064 143.817 40.5675 143.706 40.7573C143.599 40.9471 143.545 41.1494 143.545 41.3643C143.545 41.5469 143.588 41.7098 143.674 41.853C143.763 41.9998 143.889 42.1252 144.05 42.229C144.215 42.3328 144.411 42.4116 144.641 42.4653C144.873 42.5226 145.131 42.5513 145.414 42.5513C145.729 42.5513 146.01 42.519 146.257 42.4546C146.508 42.3901 146.719 42.3042 146.891 42.1968C147.063 42.0894 147.194 41.964 147.283 41.8208C147.373 41.6812 147.417 41.5326 147.417 41.375C147.417 41.1709 147.364 41.0044 147.256 40.8755C147.153 40.7502 147.006 40.6499 146.816 40.5747C146.63 40.5031 146.408 40.4512 146.15 40.4189C145.896 40.3903 145.616 40.3706 145.312 40.3599ZM145.215 34.7095C145.018 34.7095 144.843 34.7489 144.689 34.8276C144.535 34.9064 144.404 35.0156 144.297 35.1553C144.193 35.2949 144.112 35.4596 144.055 35.6494C144.001 35.8392 143.975 36.0433 143.975 36.2617C143.975 36.5267 144.003 36.7684 144.061 36.9868C144.118 37.2017 144.202 37.3879 144.313 37.5454C144.424 37.703 144.56 37.8247 144.721 37.9106C144.882 37.9966 145.065 38.0396 145.269 38.0396C145.473 38.0396 145.65 38.002 145.801 37.9268C145.955 37.8516 146.082 37.7477 146.182 37.6152C146.286 37.4792 146.363 37.3198 146.413 37.1372C146.467 36.951 146.494 36.7505 146.494 36.5356C146.494 36.2957 146.467 36.0648 146.413 35.8428C146.359 35.6208 146.279 35.4274 146.171 35.2627C146.064 35.0944 145.93 34.9601 145.769 34.8599C145.611 34.7596 145.427 34.7095 145.215 34.7095ZM147.622 34.2798C147.528 34.2941 147.446 34.3245 147.375 34.3711C147.303 34.4141 147.24 34.4696 147.187 34.5376C147.133 34.6056 147.088 34.6808 147.052 34.7632C147.02 34.842 146.995 34.9225 146.977 35.0049C147.16 35.1732 147.303 35.3701 147.407 35.5957C147.514 35.8213 147.568 36.0612 147.568 36.3154C147.568 36.627 147.503 36.9134 147.375 37.1748C147.249 37.4326 147.079 37.6564 146.864 37.8462C146.649 38.0324 146.401 38.1774 146.118 38.2812C145.838 38.3851 145.545 38.437 145.237 38.437C145.101 38.437 144.979 38.4281 144.872 38.4102C144.768 38.3923 144.644 38.3833 144.501 38.3833C144.365 38.3833 144.24 38.4012 144.125 38.437C144.014 38.4728 143.919 38.5229 143.84 38.5874C143.765 38.6483 143.715 38.7091 143.69 38.77C143.665 38.8273 143.652 38.8774 143.652 38.9204C143.652 38.9634 143.66 39.0081 143.674 39.0547C143.699 39.1406 143.756 39.2104 143.846 39.2642C143.939 39.3179 144.059 39.3608 144.206 39.3931C144.352 39.4217 144.526 39.4432 144.727 39.4575C144.931 39.4718 145.16 39.4844 145.414 39.4951C145.837 39.513 146.214 39.5542 146.547 39.6187C146.884 39.6795 147.169 39.7744 147.401 39.9033C147.634 40.0286 147.811 40.1916 147.933 40.3921C148.058 40.5962 148.121 40.8468 148.121 41.144C148.121 41.4412 148.041 41.7026 147.879 41.9282C147.722 42.1574 147.514 42.349 147.256 42.5029C147.002 42.6605 146.714 42.7786 146.392 42.8574C146.073 42.9398 145.751 42.981 145.425 42.981C144.931 42.981 144.508 42.938 144.157 42.8521C143.81 42.7661 143.527 42.6515 143.309 42.5083C143.09 42.3687 142.931 42.2093 142.831 42.0303C142.73 41.8548 142.68 41.6758 142.68 41.4932C142.68 41.3249 142.712 41.1709 142.777 41.0312C142.841 40.8916 142.922 40.7663 143.019 40.6553C143.119 40.5443 143.228 40.4476 143.346 40.3652C143.468 40.2865 143.584 40.222 143.695 40.1719C143.459 40.1003 143.273 39.9982 143.137 39.8657C143.001 39.7297 142.933 39.5435 142.933 39.3071C142.933 39.1782 142.959 39.0529 143.013 38.9312C143.067 38.8058 143.142 38.6912 143.239 38.5874C143.335 38.4836 143.45 38.3958 143.583 38.3242C143.719 38.2526 143.867 38.2025 144.028 38.1738C143.86 38.0951 143.708 38.0002 143.572 37.8892C143.436 37.7746 143.319 37.6475 143.223 37.5078C143.126 37.3646 143.051 37.2088 142.997 37.0405C142.947 36.8722 142.922 36.6914 142.922 36.498C142.922 36.1686 142.988 35.8696 143.121 35.6011C143.257 35.3325 143.432 35.1034 143.647 34.9136C143.865 34.7238 144.112 34.5788 144.388 34.4785C144.667 34.3747 144.95 34.3228 145.237 34.3228C145.484 34.3228 145.727 34.3586 145.967 34.4302C146.207 34.4982 146.429 34.6003 146.633 34.7363C146.687 34.5824 146.76 34.4391 146.854 34.3066C146.947 34.1742 147.05 34.0614 147.165 33.9683C147.283 33.8716 147.41 33.7964 147.546 33.7427C147.682 33.689 147.824 33.6621 147.971 33.6621C148.157 33.6621 148.3 33.7104 148.4 33.8071C148.504 33.9038 148.556 34.0381 148.556 34.21C148.556 34.2529 148.547 34.3013 148.529 34.355C148.511 34.4087 148.483 34.4588 148.443 34.5054C148.408 34.5519 148.359 34.5913 148.298 34.6235C148.237 34.6558 148.164 34.6701 148.078 34.6665C147.953 34.6629 147.851 34.6253 147.772 34.5537C147.693 34.4785 147.643 34.3872 147.622 34.2798ZM149.786 35.8213C149.786 35.7067 149.788 35.5957 149.792 35.4883C149.799 35.3809 149.811 35.2537 149.829 35.1069L149.05 35.1499V34.688C149.29 34.688 149.489 34.6808 149.646 34.6665C149.804 34.6486 149.933 34.6253 150.033 34.5967C150.133 34.568 150.21 34.5376 150.264 34.5054C150.321 34.4696 150.372 34.432 150.415 34.3926H150.731V38.8345C150.731 38.9813 150.73 39.112 150.726 39.2266C150.722 39.3376 150.71 39.4557 150.688 39.5811L151.381 39.5488V40H149.136V39.6724C149.305 39.6724 149.432 39.6401 149.518 39.5757C149.607 39.5076 149.672 39.4146 149.711 39.2964C149.75 39.1782 149.772 39.0368 149.775 38.8721C149.783 38.7074 149.786 38.5265 149.786 38.3296V35.8213ZM150.833 32.6523C150.833 32.7419 150.816 32.826 150.78 32.9048C150.748 32.9836 150.705 33.0534 150.651 33.1143C150.597 33.1715 150.535 33.2163 150.463 33.2485C150.391 33.2808 150.316 33.2969 150.237 33.2969C150.159 33.2969 150.083 33.2808 150.012 33.2485C149.94 33.2163 149.876 33.1715 149.818 33.1143C149.765 33.0534 149.722 32.9836 149.689 32.9048C149.661 32.826 149.646 32.7419 149.646 32.6523C149.646 32.5592 149.663 32.4733 149.695 32.3945C149.727 32.3122 149.77 32.2406 149.824 32.1797C149.881 32.1188 149.945 32.0723 150.017 32.04C150.089 32.0042 150.166 31.9863 150.248 31.9863C150.33 31.9863 150.406 32.0042 150.474 32.04C150.545 32.0723 150.608 32.1188 150.662 32.1797C150.715 32.2406 150.757 32.3122 150.785 32.3945C150.817 32.4733 150.833 32.5592 150.833 32.6523ZM156.248 35.3218C156.197 35.1929 156.124 35.0908 156.027 35.0156C155.931 34.9368 155.825 34.876 155.71 34.833C155.599 34.79 155.487 34.7632 155.372 34.7524C155.261 34.7381 155.168 34.731 155.093 34.731C154.842 34.731 154.608 34.7829 154.389 34.8867C154.174 34.987 153.988 35.1356 153.831 35.3325C153.673 35.5295 153.548 35.7747 153.455 36.0684C153.365 36.362 153.32 36.6986 153.32 37.0781C153.32 37.4434 153.365 37.7817 153.455 38.0933C153.548 38.4012 153.677 38.668 153.841 38.8936C154.006 39.1156 154.205 39.2892 154.438 39.4146C154.67 39.5399 154.928 39.6025 155.211 39.6025C155.383 39.6025 155.553 39.5793 155.721 39.5327C155.889 39.4826 156.049 39.4146 156.199 39.3286C156.35 39.2427 156.487 39.1424 156.613 39.0278C156.742 38.9132 156.851 38.7897 156.94 38.6572L157.225 38.8774C157.078 39.1066 156.91 39.3035 156.72 39.4683C156.534 39.6294 156.337 39.7637 156.129 39.8711C155.925 39.9749 155.718 40.0519 155.506 40.1021C155.299 40.1522 155.102 40.1772 154.916 40.1772C154.543 40.1772 154.192 40.1146 153.863 39.9893C153.533 39.8604 153.245 39.6759 152.998 39.436C152.751 39.1925 152.556 38.8953 152.413 38.5444C152.269 38.1935 152.198 37.7943 152.198 37.3467C152.198 37.0924 152.228 36.8418 152.289 36.5947C152.354 36.3477 152.445 36.1131 152.563 35.8911C152.681 35.6655 152.824 35.4578 152.993 35.2681C153.161 35.0747 153.351 34.9082 153.562 34.7686C153.777 34.6289 154.01 34.5197 154.26 34.4409C154.514 34.3621 154.783 34.3228 155.066 34.3228C155.37 34.3228 155.648 34.3604 155.898 34.4355C156.149 34.5107 156.364 34.611 156.543 34.7363C156.722 34.8617 156.86 35.0067 156.957 35.1714C157.053 35.3325 157.102 35.5026 157.102 35.6816C157.102 35.8392 157.057 35.9753 156.967 36.0898C156.881 36.2008 156.756 36.2581 156.591 36.2617C156.495 36.2653 156.414 36.251 156.35 36.2188C156.285 36.1829 156.233 36.14 156.194 36.0898C156.154 36.0397 156.126 35.986 156.108 35.9287C156.09 35.8678 156.081 35.8141 156.081 35.7676C156.081 35.696 156.092 35.6208 156.113 35.542C156.138 35.4632 156.183 35.3898 156.248 35.3218ZM161.296 37.3091C161.128 37.3162 160.953 37.3324 160.77 37.3574C160.591 37.3789 160.414 37.4147 160.238 37.4648C160.066 37.5114 159.903 37.5723 159.75 37.6475C159.596 37.7227 159.461 37.8122 159.347 37.916C159.232 38.0199 159.143 38.1398 159.078 38.2759C159.014 38.4119 158.985 38.5659 158.992 38.7378C158.996 38.8739 159.021 38.9938 159.067 39.0977C159.118 39.1979 159.18 39.2821 159.255 39.3501C159.334 39.4146 159.424 39.4647 159.524 39.5005C159.624 39.5327 159.732 39.5488 159.846 39.5488C159.993 39.5488 160.131 39.5345 160.26 39.5059C160.389 39.4772 160.51 39.436 160.625 39.3823C160.743 39.325 160.856 39.257 160.963 39.1782C161.074 39.0994 161.185 39.0081 161.296 38.9043V37.3091ZM158.278 35.644C158.278 35.4614 158.332 35.2896 158.439 35.1284C158.546 34.9673 158.697 34.8276 158.89 34.7095C159.083 34.5877 159.313 34.4928 159.578 34.4248C159.846 34.3568 160.138 34.3228 160.453 34.3228C161.069 34.3228 161.522 34.4857 161.812 34.8115C162.106 35.1374 162.251 35.6548 162.247 36.3638L162.236 38.8345C162.236 38.9491 162.233 39.0654 162.226 39.1836C162.222 39.2982 162.211 39.4307 162.193 39.5811L162.972 39.5381V40H161.398C161.377 39.8747 161.361 39.7655 161.35 39.6724C161.339 39.5793 161.33 39.4808 161.323 39.377C161.076 39.624 160.806 39.8192 160.512 39.9624C160.222 40.1056 159.914 40.1772 159.588 40.1772C159.313 40.1772 159.071 40.1432 158.863 40.0752C158.659 40.0107 158.489 39.9194 158.353 39.8013C158.217 39.6831 158.115 39.5452 158.047 39.3877C157.979 39.2266 157.945 39.0547 157.945 38.8721C157.945 38.6465 157.993 38.4406 158.09 38.2544C158.19 38.0682 158.323 37.9035 158.487 37.7603C158.656 37.6134 158.851 37.4881 159.073 37.3843C159.295 37.2769 159.529 37.1891 159.776 37.1211C160.027 37.0531 160.281 37.0047 160.539 36.9761C160.8 36.9438 161.055 36.9295 161.302 36.9331V36.2456C161.302 36.0558 161.291 35.8714 161.27 35.6924C161.248 35.5133 161.2 35.3504 161.125 35.2036C161.053 35.0568 160.938 34.9404 160.781 34.8545C160.627 34.7686 160.448 34.7256 160.244 34.7256C160.125 34.7256 160.013 34.7363 159.905 34.7578C159.798 34.7757 159.692 34.8079 159.588 34.8545C159.485 34.901 159.39 34.9619 159.304 35.0371C159.221 35.1123 159.153 35.2018 159.1 35.3057C159.153 35.3665 159.189 35.4346 159.207 35.5098C159.229 35.5814 159.239 35.6512 159.239 35.7192C159.239 35.7622 159.23 35.8123 159.212 35.8696C159.194 35.9233 159.166 35.9753 159.126 36.0254C159.091 36.0719 159.042 36.1113 158.981 36.1436C158.924 36.1722 158.845 36.1865 158.745 36.1865C158.602 36.1865 158.487 36.1346 158.401 36.0308C158.319 35.9233 158.278 35.7944 158.278 35.644Z" />
                                <path
                                d="M68.6738 19.7334C68.5957 19.9678 68.5273 20.1777 68.4688 20.3633C68.4102 20.5488 68.3516 20.7197 68.293 20.876C68.2344 21.0322 68.1758 21.1836 68.1172 21.3301C68.0586 21.4766 67.9951 21.6328 67.9268 21.7988L70.2705 21.6816V23H64.6602V22.0039C65.1094 22.0039 65.4756 21.916 65.7588 21.7402C66.042 21.5547 66.2812 21.2959 66.4766 20.9639C66.6719 20.6318 66.8477 20.2363 67.0039 19.7773C67.1699 19.3184 67.3555 18.8105 67.5605 18.2539L73.7422 1.42285H74.46L81.1543 18.5029C81.2422 18.708 81.3301 18.957 81.418 19.25C81.5156 19.5332 81.6035 19.8262 81.6816 20.1289C81.7695 20.4316 81.833 20.7295 81.8721 21.0225C81.9209 21.3154 81.9404 21.5742 81.9307 21.7988L83.9814 21.6816V23H77.1113V22.0039C77.668 21.9941 78.0781 21.8916 78.3418 21.6963C78.6055 21.501 78.7715 21.2617 78.8398 20.9785C78.9082 20.6953 78.9082 20.3926 78.8398 20.0703C78.7715 19.748 78.6836 19.4453 78.5762 19.1621L77.5215 16.3496L69.7139 16.5254C69.499 17.1406 69.3086 17.707 69.1426 18.2246C68.9766 18.7324 68.8203 19.2354 68.6738 19.7334ZM72.3066 9.20117C71.8477 10.4902 71.4424 11.6279 71.0908 12.6143C70.749 13.5908 70.4414 14.4648 70.168 15.2363H77.1113L74.9727 9.49414L73.625 5.80273H73.5664L72.3066 9.20117ZM89.958 19.543C89.958 20.0898 89.9482 20.5537 89.9287 20.9346C89.9189 21.3154 89.8945 21.6328 89.8555 21.8867L95.4658 21.7988C96.0908 21.7891 96.6426 21.6914 97.1211 21.5059C97.6094 21.3105 98.0146 21.0127 98.3369 20.6123C98.6592 20.2119 98.9033 19.6992 99.0693 19.0742C99.2354 18.4395 99.3184 17.6777 99.3184 16.7891H100.329L100.153 23H85.2705V22.0039C85.8369 21.9844 86.2617 21.8818 86.5449 21.6963C86.8281 21.5107 87.0283 21.2568 87.1455 20.9346C87.2627 20.6123 87.3213 20.2314 87.3213 19.792C87.3311 19.3428 87.3359 18.8545 87.3359 18.3271V5.36328C87.3359 4.95312 87.3408 4.56738 87.3506 4.20605C87.3701 3.83496 87.3994 3.49805 87.4385 3.19531L85.2705 3.32715V1.99414H92.0234V2.99023C91.457 3.00977 91.0322 3.11719 90.749 3.3125C90.4658 3.49805 90.2656 3.75195 90.1484 4.07422C90.0312 4.39648 89.9678 4.77734 89.958 5.2168C89.958 5.65625 89.958 6.14453 89.958 6.68164V19.543ZM108.371 15.1045C108.273 15.1045 108.117 15.1045 107.902 15.1045C107.697 15.1045 107.497 15.0996 107.302 15.0898V19.4258C107.302 19.9727 107.292 20.4414 107.272 20.832C107.263 21.2227 107.238 21.5449 107.199 21.7988L109.968 21.6523V23H102.614V22.0039C103.181 21.9844 103.605 21.8818 103.889 21.6963C104.172 21.5107 104.372 21.2568 104.489 20.9346C104.606 20.6123 104.665 20.2314 104.665 19.792C104.675 19.3428 104.68 18.8545 104.68 18.3271V5.36328C104.68 4.95312 104.685 4.56738 104.694 4.20605C104.714 3.83496 104.743 3.49805 104.782 3.19531L102.614 3.32715V1.99414C103.669 1.97461 104.753 1.96484 105.866 1.96484C106.979 1.95508 108.127 1.9502 109.309 1.9502C112.219 1.9502 114.431 2.43848 115.944 3.41504C117.565 4.47949 118.376 6.03711 118.376 8.08789C118.376 8.50781 118.327 8.97168 118.229 9.47949C118.142 9.9873 117.956 10.5146 117.673 11.0615C117.39 11.5986 116.999 12.1162 116.501 12.6143C116.013 13.1025 115.393 13.5322 114.641 13.9033C113.898 14.2646 113.01 14.5576 111.975 14.7822C110.939 14.9971 109.738 15.1045 108.371 15.1045ZM107.302 13.8447C107.673 13.8936 107.995 13.9229 108.269 13.9326C108.552 13.9424 108.879 13.9473 109.25 13.9473C110.1 13.9473 110.9 13.8203 111.652 13.5664C112.414 13.3125 113.073 12.9463 113.63 12.4678C114.196 11.9795 114.641 11.3887 114.963 10.6953C115.295 10.002 115.461 9.21582 115.461 8.33691C115.461 7.38965 115.31 6.58398 115.007 5.91992C114.704 5.25586 114.279 4.71875 113.732 4.30859C113.186 3.88867 112.531 3.58594 111.77 3.40039C111.008 3.21484 110.168 3.12207 109.25 3.12207C108.713 3.12207 108.308 3.20996 108.034 3.38574C107.771 3.55176 107.58 3.79102 107.463 4.10352C107.355 4.41602 107.302 4.79199 107.302 5.23145C107.302 5.66113 107.302 6.14453 107.302 6.68164V13.8447ZM136.057 12.8486L125.319 12.9805V19.4258C125.319 19.9727 125.31 20.4414 125.29 20.832C125.28 21.2227 125.256 21.5449 125.217 21.7988L127.385 21.6816V23H120.632V22.0039C121.198 21.9844 121.623 21.8818 121.906 21.6963C122.189 21.5107 122.39 21.2568 122.507 20.9346C122.624 20.6123 122.683 20.2314 122.683 19.792C122.692 19.3428 122.697 18.8545 122.697 18.3271V5.36328C122.697 4.95312 122.702 4.56738 122.712 4.20605C122.731 3.83496 122.761 3.49805 122.8 3.19531L120.632 3.32715V1.99414H127.385V2.99023C126.818 3.00977 126.394 3.11719 126.11 3.3125C125.827 3.49805 125.627 3.75195 125.51 4.07422C125.393 4.39648 125.329 4.77734 125.319 5.2168C125.319 5.65625 125.319 6.14453 125.319 6.68164V11.6621H136.057V5.36328C136.057 4.52344 136.086 3.80078 136.145 3.19531L133.977 3.32715V1.99414H140.729V2.99023C140.173 3.00977 139.748 3.11719 139.455 3.3125C139.172 3.49805 138.972 3.75195 138.854 4.07422C138.737 4.39648 138.674 4.77734 138.664 5.2168C138.664 5.65625 138.664 6.14453 138.664 6.68164V19.4258C138.664 20.5 138.635 21.291 138.576 21.7988L140.729 21.6816V23H133.977V22.0039C134.543 21.9844 134.968 21.8818 135.251 21.6963C135.544 21.5107 135.749 21.2568 135.866 20.9346C135.983 20.6123 136.042 20.2314 136.042 19.792C136.052 19.3428 136.057 18.8545 136.057 18.3271V12.8486ZM146.223 19.7334C146.145 19.9678 146.076 20.1777 146.018 20.3633C145.959 20.5488 145.9 20.7197 145.842 20.876C145.783 21.0322 145.725 21.1836 145.666 21.3301C145.607 21.4766 145.544 21.6328 145.476 21.7988L147.819 21.6816V23H142.209V22.0039C142.658 22.0039 143.024 21.916 143.308 21.7402C143.591 21.5547 143.83 21.2959 144.025 20.9639C144.221 20.6318 144.396 20.2363 144.553 19.7773C144.719 19.3184 144.904 18.8105 145.109 18.2539L151.291 1.42285H152.009L158.703 18.5029C158.791 18.708 158.879 18.957 158.967 19.25C159.064 19.5332 159.152 19.8262 159.23 20.1289C159.318 20.4316 159.382 20.7295 159.421 21.0225C159.47 21.3154 159.489 21.5742 159.479 21.7988L161.53 21.6816V23H154.66V22.0039C155.217 21.9941 155.627 21.8916 155.891 21.6963C156.154 21.501 156.32 21.2617 156.389 20.9785C156.457 20.6953 156.457 20.3926 156.389 20.0703C156.32 19.748 156.232 19.4453 156.125 19.1621L155.07 16.3496L147.263 16.5254C147.048 17.1406 146.857 17.707 146.691 18.2246C146.525 18.7324 146.369 19.2354 146.223 19.7334ZM149.855 9.20117C149.396 10.4902 148.991 11.6279 148.64 12.6143C148.298 13.5908 147.99 14.4648 147.717 15.2363H154.66L152.521 9.49414L151.174 5.80273H151.115L149.855 9.20117Z" />
                            </svg>
                        </Link>
                        <p> &copy; 2024 { idioma == "es" ? "Alpha Asesoría Estratégica." : "Alpha Strategic Consulting."}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer