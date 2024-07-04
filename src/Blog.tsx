import './styles.css';

import  Navbar  from './components/Navbar';
import Footer from './components/Footer';
import MainBlog from './components/MainBlog';

import { idiomaAtom } from './atom/idiomaAtom';
import { useAtom } from "jotai";

function Blog() {
    const [idioma] = useAtom(idiomaAtom);

    return (
        <>
            <Navbar />
            <MainBlog idioma = {idioma} />
            <Footer idioma = {idioma}/>
        </>
    )
}

export default Blog
