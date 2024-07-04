import './styles.css';

import  Navbar  from './components/Navbar'; 
import Footer from './components/Footer';
import MainContacto from './components/MainContacto';

import { idiomaAtom } from './atom/idiomaAtom';
import { useAtom } from "jotai";

function Contacto() {
    const [idioma] = useAtom(idiomaAtom);

    return (
        <>
        <Navbar />
        <MainContacto idioma = {idioma} />
        <Footer idioma = {idioma}/>
        </>
    )
}

export default Contacto;
