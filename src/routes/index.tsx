import App from '../App.tsx'
import Capacidades from '../Capacidades.tsx'
import Consultoria from '../Consultoria.tsx'
import Observatorio from '../Observatorio.tsx'
import Nosotros from '../Nosotros.tsx'
import Experiencia from '../Experiencia.tsx'
import Contacto from '../Contacto.tsx'
import Academia from '../Academia.tsx'
import Perfil from '../Perfil.tsx'
import Servicio from '../Servicio.tsx'
import Blog from '../Blog.tsx'
import ModalLogin from '../components/loginModal/ModalLogin.tsx'
import { Link, createBrowserRouter } from 'react-router-dom'
import Tablero from '../Tablero.tsx'
import Curso from '../Curso.tsx'
import Repositorio from '../Repositorio.tsx'
import ModalLoginCampus from '../components/loginModal/ModalLoginCampus.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Link to="/">Volver al Inicio, página no encontrada</Link>
    },
    {
        path: '/capacidades',
        element: <Capacidades />
    },
    {
        path: '/capacidades/consultoria',
        element: <Consultoria />
    },
    {
        path: '/capacidades/academia',
        element: <Academia />
    },
    {
        path: '/capacidades/servicio',
        element: <Servicio />
    },
    {
        path: '/observatorio',
        element: <Observatorio />
    },
    {
        path: '/nosotros',
        element: <Nosotros />
    },
    {
        path: '/nosotros/experiencia',
        element: <Experiencia />
    },
    {
        path: '/contacto',
        element: <Contacto />
    },
    {
        path: '/nosotros/perfil/:_id', //id
        element: <Perfil />
    },
    {
        path: '/blog',
        element: <Blog />
    },
    {
        path: '/loginrepo',
        element: <ModalLogin />
    },
    {
        path: '/repositorio',
        element: <Repositorio />
    },
    {
        path: '/loginboard',
        element: <ModalLoginCampus />
    },
    {
        path: '/board',
        element: <Tablero />
    },
    {
        path: '/board/curso/:_id', //id
        element: <Curso />
    }
]);

export default router;