import { IoMdClose } from 'react-icons/io';
import './index.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface IdiomaProps {
    idioma: string;
}

function Modal({ idioma } : IdiomaProps) {

    useEffect(() => {
        document.title = idioma == "es" ? "Alpha | Inicio de sesión" : "Alpha | Login"
    }, [idioma])

    return (
        <>
            <div className="modal__container">
                <div className="__modal">
                    <div className="modal__header">
                        <Link to="/">
                            <IoMdClose id='close__modal' />
                        </Link>
                    </div>
                    <form>
                        <div className="modal__body">
                            <h2>{ idioma == "es" ? "Inicio de sesión - Campus" : "Campus - Login"}</h2>
                            <label htmlFor="correo">{ idioma == "es" ? "Correo / Usuario" : "User / Email" }</label>
                            <input placeholder={ idioma == "es" ? "Correo" : "Email" } />
                            <label htmlFor="contrasena">{ idioma == "es" ? "Contraseña" : "Password"}</label>
                            <input placeholder={ idioma == "es" ? "Contraseña" : "Password"} />
                        </div>
                        <div className="modal__footer">
                        <button className="btn__login">
                                <Link to='/board'>{ idioma == "es" ? "Continuar" : "Continue"}</Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Modal