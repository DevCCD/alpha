import './styles.css';

import  Navbar  from './components/Navbar'; 
import Footer from './components/Footer';
import MainPerfil from './components/MainPerfil';

import { idiomaAtom } from './atom/idiomaAtom';
import { useAtom } from "jotai";

function Perfil() {
    const [idioma] = useAtom(idiomaAtom);

    return (
        <>
            <Navbar />
            <MainPerfil idioma = {idioma} />
            <Footer idioma = {idioma}/>
        </>
    )
}

export default Perfil
