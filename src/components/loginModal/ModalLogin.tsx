import { useAtom } from 'jotai';
import '../../styles.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import '../loginModal/index.css';
import Modal from './Modal';
import { idiomaAtom } from '../../atom/idiomaAtom';

function ModalLogin () {
    const [idioma] = useAtom(idiomaAtom);
    
    return (
        <>
            <Navbar />
            <Modal idioma={idioma}/>
            <Footer idioma={idioma}/>
        </>
    )
}

export default ModalLogin