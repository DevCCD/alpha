import './styles.css';

import  Navbar  from './components/Navbar'; 
import Footer from './components/Footer';
import MainNosotros from './components/MainNosotros';

import { idiomaAtom } from './atom/idiomaAtom';
import { useAtom } from "jotai";

function Nosotros() {
    const [idioma] = useAtom(idiomaAtom);

    return (
        <>
            <Navbar />
            <MainNosotros idioma = {idioma} />
            <Footer idioma = {idioma}/>
        </>
    )
}

export default Nosotros;
