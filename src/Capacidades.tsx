import './styles.css';

import  Navbar  from './components/Navbar'; 
import Footer from './components/Footer';
import MainCapacidades from './components/MainCapacidades';

import { idiomaAtom } from './atom/idiomaAtom';
import { useAtom } from "jotai";

function Capacidades() {
    const [idioma] = useAtom(idiomaAtom);
    
    return (
        <>
            <Navbar />
            <MainCapacidades idioma = {idioma} />
            <Footer idioma = {idioma}/>
        </>
    )
}

export default Capacidades
