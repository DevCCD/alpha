import './styles.css';

import  Navbar  from './components/Navbar'; 
import Footer from './components/Footer';
import MainServicio from './components/MainServicio';

import { idiomaAtom } from './atom/idiomaAtom';
import { useAtom } from "jotai";

function Servicio() {
    const [idioma] = useAtom(idiomaAtom);

    return (
        <>
            <Navbar />
            <MainServicio idioma = {idioma} />
            <Footer idioma = {idioma} />
        </>
    )
}

export default Servicio
