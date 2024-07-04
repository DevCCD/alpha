import './styles.css';

import  Navbar  from './components/Navbar'; 
import Footer from './components/Footer';
import MainExperiencia from './components/MainExperiencia';

import { idiomaAtom } from './atom/idiomaAtom';
import { useAtom } from "jotai";

function Experiencia() {
    const [idioma] = useAtom(idiomaAtom);

    return (
        <>
            <Navbar />
            <MainExperiencia idioma = {idioma} />
            <Footer idioma = {idioma}/>
        </>
    )
}

export default Experiencia;
