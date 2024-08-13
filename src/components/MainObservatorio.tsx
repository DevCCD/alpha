import { useEffect } from 'react';
import '../styles.css';
import observatorio from '../data/observatorio';

interface IdiomaProps {
    idioma: string;
}

function MainObservatorio ({ idioma } : IdiomaProps) {
    useEffect(() => {
        document.title = idioma == "es" ? "Alpha | Observatorio" : "Alpha | Observatory"
    }, [idioma])

    return (
        <main>
            <div className="banner__container">
                <div className="banner_center">
                    <h1>{ idioma == "es" ? "Economía Peruana" : "Peruvian Economy" }</h1>
                </div>
            </div>
            {/* db */}
            {observatorio.map((ob) => (
                <div className={`container__economia ${ob.bg}`} key={ob._id}>
                    <div className='invisible__top' id={ob.etiqueta} />
                    <div className="economia__left">
                        <h1>{ idioma == "es" ? ob.tituloES : ob.tituloEN }</h1>
                        <p>{ idioma == "es" ? ob.descripcionES : ob.descripcionEN }</p>
                    </div>
                    <div className="economia__right">
                        <h2>{ idioma == "es" ? ob.titutloGraficoES : ob.titutloGraficoEN }</h2>
                        <p>{ idioma == "es" ? ob.subtitutloGraficoES : ob.subtitutloGraficoEN }</p>
                            <iframe className='flourish__graph' src={`https://flo.uri.sh/visualisation/${ob.grafico}/embed`}></iframe>
                        <div className='fuente__observatorio'>
                            <sub className='nota__fuente'></sub>
                            <sub>{idioma == "es" ? ob.sourceES : ob.sourceEN }</sub>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    )
}

export default MainObservatorio