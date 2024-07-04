import MainCurso from './components/MainCurso'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useAtom } from 'jotai';
import { idiomaAtom } from './atom/idiomaAtom';

function Curso() {
    const [idioma] = useAtom(idiomaAtom);
    
    return (
        <>
            <Navbar />
            <MainCurso idioma = {idioma} />
            <Footer idioma = {idioma}/>
        </>
    )
}

export default Curso;