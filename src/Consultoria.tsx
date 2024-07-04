import './styles.css';

import  Navbar  from './components/Navbar'; 
import Footer from './components/Footer';
import MainConsultoria from './components/MainConsultoria';

import { idiomaAtom } from './atom/idiomaAtom';
import { useAtom } from "jotai";

function Consultoria() {
    const [idioma] = useAtom(idiomaAtom);

    return (
        <>
            <Navbar />
            <MainConsultoria idioma = {idioma} />
            <Footer idioma = {idioma} />
        </>
    )
}

export default Consultoria
