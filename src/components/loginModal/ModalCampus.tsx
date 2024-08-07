import { IoMdClose } from 'react-icons/io';
import './index.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface IdiomaProps {
    idioma: string;
}

function Modal({ idioma }: IdiomaProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.title = idioma === "es" ? "Alpha | Inicio de sesión" : "Alpha | Login";
    }, [idioma]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Verificación simple de credenciales
        if (email === 'campus@alphaasesoriaestrategica.com' && password === 'Alpha2024') {
            navigate('/board');
        } else {
            alert(idioma === "es" ? "Credenciales incorrectas" : "Incorrect credentials");
        }
    };

    return (
        <div className="modal__container">
            <div className="__modal">
                <div className="modal__header">
                    <Link to="/">
                        <IoMdClose id='close__modal' />
                    </Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="modal__body">
                        <h2>{idioma === "es" ? "Inicio de sesión - Campus" : "Campus - Login"}</h2>
                        <label htmlFor="correo">{idioma === "es" ? "Correo / Usuario" : "User / Email"}</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={idioma === "es" ? "Correo" : "Email"}
                            required
                        />
                        <label htmlFor="contrasena">{idioma === "es" ? "Contraseña" : "Password"}</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={idioma === "es" ? "Contraseña" : "Password"}
                            required
                        />
                    </div>
                    <div className="modal__footer">
                        <button type="submit" className="btn__login">
                            {idioma === "es" ? "Continuar" : "Continue"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;