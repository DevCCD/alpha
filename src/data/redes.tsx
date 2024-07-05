import { FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaFacebookF, FaLinkedinIn, FaPhone, FaXTwitter } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

const redes = [
    {
        "_id": 0,
        "nombre": "+51 942 908 008",
        "url": "tel:+51 942 908 008",
        "icono": FaPhone
    },
    {
        "_id": 1,
        "nombre": "Email",
        "url": "mailto:administracion@alphaasesoriaestrategica.com",
        "icono": IoMdMail
    },
    {
        "_id": 2,
        "nombre": "Twitter",
        "url": "https://x.com/AlphaAsesoria",
        "icono": FaXTwitter
    },
    {
        "_id": 3,
        "nombre": "Facebook",
        "url": "https://www.facebook.com/profile.php?id=61560304402655",
        "icono": FaFacebookF
    },
    {
        "_id": 4,
        "nombre": "LinkedIn",
        "url": "https://www.linkedin.com/company/alpha-asesoria-estrategica",
        "icono": FaLinkedinIn
    },
    {
        "_id": 5,
        "nombre": "WhatsApp",
        "url": "https://api.whatsapp.com/send?phone=51942908008",
        "icono": FaWhatsapp
    },
    {
        "_id": 6,
        "nombre": "Youtube",
        "url": "https://www.youtube.com/channel/UCZVGBA2XIv4x7MnRDb1BNuA",
        "icono": FaYoutube
    }
]

export default redes