import './styles.css';

import  Navbar  from './components/Navbar'; 
import Footer from './components/Footer';
import MainAcademia from './components/MainAcademia';

import { idiomaAtom } from './atom/idiomaAtom';
import { useAtom } from "jotai";

function Academia() {
    const [idioma] = useAtom(idiomaAtom);

    return (
        <>
            <Navbar />
            <MainAcademia idioma = {idioma} />
            <Footer idioma = {idioma}/>
        </>
    )
}

export default Academia;