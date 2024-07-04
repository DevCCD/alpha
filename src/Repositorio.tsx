import './styles.css';

import  Navbar  from './components/Navbar'; 
import Footer from './components/Footer';
import MainRepositorio from './components/MainRepositorio';

import { idiomaAtom } from './atom/idiomaAtom';
import { useAtom } from "jotai";

function Repositorio() {
    const [idioma] = useAtom(idiomaAtom);

    return (
        <>
            <Navbar />
            <MainRepositorio idioma = {idioma} />
            <Footer idioma = {idioma} />
        </>
    )
}

export default Repositorio
