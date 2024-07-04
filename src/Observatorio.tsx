import './styles.css';

import  Navbar  from './components/Navbar'; 
import Footer from './components/Footer';
import MainObservatorio from './components/MainObservatorio';

import { idiomaAtom } from './atom/idiomaAtom';
import { useAtom } from "jotai";

function Observatorio() {
    const [idioma] = useAtom(idiomaAtom);

    return (
        <>
            <Navbar />
            <MainObservatorio idioma = {idioma} />
            <Footer idioma = {idioma} />
        </>
    )
}

export default Observatorio;
