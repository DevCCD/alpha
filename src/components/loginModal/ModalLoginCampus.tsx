import { useAtom } from 'jotai';
import '../../styles.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import '../loginModal/index.css';
import { idiomaAtom } from '../../atom/idiomaAtom';
import ModalCampus from './ModalCampus';

function ModalLogin () {
    const [idioma] = useAtom(idiomaAtom);
    
    return (
        <>
            <Navbar />
            <ModalCampus idioma={idioma}/>
            <Footer idioma={idioma}/>
        </>
    )
}

export default ModalLogin