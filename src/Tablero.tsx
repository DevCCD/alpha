import Navbar from './components/Navbar';
import MainTablero from './components/MainTablero';
import Footer from './components/Footer';
import { useAtom } from 'jotai';
import { idiomaAtom } from './atom/idiomaAtom';

function Tablero() {
    const [idioma] = useAtom(idiomaAtom);
    
    return (
        <>
            <Navbar />
            <MainTablero idioma = {idioma} />
            <Footer idioma = {idioma}/>
        </>
    )
}

export default Tablero;
