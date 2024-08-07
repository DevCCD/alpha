const paises = [
    { "id": "0", "nombre": "Afganistán" },
    { "id": "1", "nombre": "Albania" },
    { "id": "2", "nombre": "Argelia" },
    { "id": "3", "nombre": "Andorra" },
    { "id": "4", "nombre": "Angola" },
    { "id": "5", "nombre": "Antigua y Barbuda" },
    { "id": "6", "nombre": "Argentina" },
    { "id": "7", "nombre": "Armenia" },
    { "id": "8", "nombre": "Australia" },
    { "id": "9", "nombre": "Austria" },
    { "id": "10", "nombre": "Azerbaiyán" },
    { "id": "11", "nombre": "Bahamas" },
    { "id": "12", "nombre": "Baréin" },
    { "id": "13", "nombre": "Bangladesh" },
    { "id": "14", "nombre": "Barbados" },
    { "id": "15", "nombre": "Bielorrusia" },
    { "id": "16", "nombre": "Bélgica" },
    { "id": "17", "nombre": "Belice" },
    { "id": "18", "nombre": "Benín" },
    { "id": "19", "nombre": "Bután" },
    { "id": "20", "nombre": "Bolivia" },
    { "id": "21", "nombre": "Bosnia y Herzegovina" },
    { "id": "22", "nombre": "Botsuana" },
    { "id": "23", "nombre": "Brasil" },
    { "id": "24", "nombre": "Brunéi" },
    { "id": "25", "nombre": "Bulgaria" },
    { "id": "26", "nombre": "Burkina Faso" },
    { "id": "27", "nombre": "Burundi" },
    { "id": "28", "nombre": "Cabo Verde" },
    { "id": "29", "nombre": "Camboya" },
    { "id": "30", "nombre": "Camerún" },
    { "id": "31", "nombre": "Canadá" },
    { "id": "32", "nombre": "República Centroafricana" },
    { "id": "33", "nombre": "Chad" },
    { "id": "34", "nombre": "Chile" },
    { "id": "35", "nombre": "China" },
    { "id": "36", "nombre": "Colombia" },
    { "id": "37", "nombre": "Comoras" },
    { "id": "38", "nombre": "Congo" },
    { "id": "39", "nombre": "República Democrática del Congo" },
    { "id": "40", "nombre": "Costa Rica" },
    { "id": "41", "nombre": "Croacia" },
    { "id": "42", "nombre": "Cuba" },
    { "id": "43", "nombre": "Chipre" },
    { "id": "44", "nombre": "República Checa" },
    { "id": "45", "nombre": "Dinamarca" },
    { "id": "46", "nombre": "Yibuti" },
    { "id": "47", "nombre": "Dominica" },
    { "id": "48", "nombre": "República Dominicana" },
    { "id": "49", "nombre": "Timor Oriental" },
    { "id": "50", "nombre": "Ecuador" },
    { "id": "51", "nombre": "Egipto" },
    { "id": "52", "nombre": "El Salvador" },
    { "id": "53", "nombre": "Guinea Ecuatorial" },
    { "id": "54", "nombre": "Eritrea" },
    { "id": "55", "nombre": "Estonia" },
    { "id": "56", "nombre": "Esuatini" },
    { "id": "57", "nombre": "Etiopía" },
    { "id": "58", "nombre": "Fiyi" },
    { "id": "59", "nombre": "Finlandia" },
    { "id": "60", "nombre": "Francia" },
    { "id": "61", "nombre": "Gabón" },
    { "id": "62", "nombre": "Gambia" },
    { "id": "63", "nombre": "Georgia" },
    { "id": "64", "nombre": "Alemania" },
    { "id": "65", "nombre": "Ghana" },
    { "id": "66", "nombre": "Grecia" },
    { "id": "67", "nombre": "Granada" },
    { "id": "68", "nombre": "Guatemala" },
    { "id": "69", "nombre": "Guinea" },
    { "id": "70", "nombre": "Guinea-Bisáu" },
    { "id": "71", "nombre": "Guyana" },
    { "id": "72", "nombre": "Haití" },
    { "id": "73", "nombre": "Honduras" },
    { "id": "74", "nombre": "Hungría" },
    { "id": "75", "nombre": "Islandia" },
    { "id": "76", "nombre": "India" },
    { "id": "77", "nombre": "Indonesia" },
    { "id": "78", "nombre": "Irán" },
    { "id": "79", "nombre": "Irak" },
    { "id": "80", "nombre": "Irlanda" },
    { "id": "81", "nombre": "Israel" },
    { "id": "82", "nombre": "Italia" },
    { "id": "83", "nombre": "Jamaica" },
    { "id": "84", "nombre": "Japón" },
    { "id": "85", "nombre": "Jordania" },
    { "id": "86", "nombre": "Kazajistán" },
    { "id": "87", "nombre": "Kenia" },
    { "id": "88", "nombre": "Kiribati" },
    { "id": "89", "nombre": "Corea del Norte" },
    { "id": "90", "nombre": "Corea del Sur" },
    { "id": "91", "nombre": "Kosovo" },
    { "id": "92", "nombre": "Kuwait" },
    { "id": "93", "nombre": "Kirguistán" },
    { "id": "94", "nombre": "Laos" },
    { "id": "95", "nombre": "Letonia" },
    { "id": "96", "nombre": "Líbano" },
    { "id": "97", "nombre": "Lesoto" },
    { "id": "98", "nombre": "Liberia" },
    { "id": "99", "nombre": "Libia" },
    { "id": "100", "nombre": "Liechtenstein" },
    { "id": "101", "nombre": "Lituania" },
    { "id": "102", "nombre": "Luxemburgo" },
    { "id": "103", "nombre": "Madagascar" },
    { "id": "104", "nombre": "Malaui" },
    { "id": "105", "nombre": "Malasia" },
    { "id": "106", "nombre": "Maldivas" },
    { "id": "107", "nombre": "Mali" },
    { "id": "108", "nombre": "Malta" },
    { "id": "109", "nombre": "Islas Marshall" },
    { "id": "110", "nombre": "Mauritania" },
    { "id": "111", "nombre": "Mauricio" },
    { "id": "112", "nombre": "México" },
    { "id": "113", "nombre": "Micronesia" },
    { "id": "114", "nombre": "Moldavia" },
    { "id": "115", "nombre": "Mónaco" },
    { "id": "116", "nombre": "Mongolia" },
    { "id": "117", "nombre": "Montenegro" },
    { "id": "118", "nombre": "Marruecos" },
    { "id": "119", "nombre": "Mozambique" },
    { "id": "120", "nombre": "Birmania" },
    { "id": "121", "nombre": "Namibia" },
    { "id": "122", "nombre": "Nauru" },
    { "id": "123", "nombre": "Nepal" },
    { "id": "124", "nombre": "Países Bajos" },
    { "id": "125", "nombre": "Nueva Zelanda" },
    { "id": "126", "nombre": "Nicaragua" },
    { "id": "127", "nombre": "Níger" },
    { "id": "128", "nombre": "Nigeria" },
    { "id": "129", "nombre": "Noruega" },
    { "id": "130", "nombre": "Omán" },
    { "id": "131", "nombre": "Pakistán" },
    { "id": "132", "nombre": "Palaos" },
    { "id": "133", "nombre": "Palestina" },
    { "id": "134", "nombre": "Panamá" },
    { "id": "135", "nombre": "Papúa Nueva Guinea" },
    { "id": "136", "nombre": "Paraguay" },
    { "id": "137", "nombre": "Perú" },
    { "id": "138", "nombre": "Filipinas" },
    { "id": "139", "nombre": "Polonia" },
    { "id": "140", "nombre": "Portugal" },
    { "id": "141", "nombre": "Catar" },
    { "id": "142", "nombre": "Rumania" },
    { "id": "143", "nombre": "Rusia" },
    { "id": "144", "nombre": "Ruanda" },
    { "id": "145", "nombre": "San Cristóbal y Nieves" },
    { "id": "146", "nombre": "Santa Lucía" },
    { "id": "147", "nombre": "San Vicente y las Granadinas" },
    { "id": "148", "nombre": "Samoa" },
    { "id": "149", "nombre": "San Marino" },
    { "id": "150", "nombre": "Santo Tomé y Príncipe" },
    { "id": "151", "nombre": "Arabia Saudita" },
    { "id": "152", "nombre": "Senegal" },
    { "id": "153", "nombre": "Serbia" },
    { "id": "154", "nombre": "Seychelles" },
    { "id": "155", "nombre": "Sierra Leona" },
    { "id": "156", "nombre": "Singapur" },
    { "id": "157", "nombre": "Eslovaquia" },
    { "id": "158", "nombre": "Eslovenia" },
    { "id": "159", "nombre": "Islas Salomón" },
    { "id": "160", "nombre": "Somalia" },
    { "id": "161", "nombre": "Sudáfrica" },
    { "id": "162", "nombre": "Sudán del Sur" },
    { "id": "163", "nombre": "España" },
    { "id": "164", "nombre": "Sri Lanka" },
    { "id": "165", "nombre": "Sudán" },
    { "id": "166", "nombre": "Surinam" },
    { "id": "167", "nombre": "Suecia" },
    { "id": "168", "nombre": "Suiza" },
    { "id": "169", "nombre": "Siria" },
    { "id": "170", "nombre": "Tayikistán" },
    { "id": "171", "nombre": "Tanzania" },
    { "id": "172", "nombre": "Tailandia" },
    { "id": "173", "nombre": "Togo" },
    { "id": "174", "nombre": "Tonga" },
    { "id": "175", "nombre": "Trinidad y Tobago" },
    { "id": "176", "nombre": "Túnez" },
    { "id": "177", "nombre": "Turquía" },
    { "id": "178", "nombre": "Turkmenistán" },
    { "id": "179", "nombre": "Tuvalu" },
    { "id": "180", "nombre": "Uganda" },
    { "id": "181", "nombre": "Ucrania" },
    { "id": "182", "nombre": "Emiratos Árabes Unidos" },
    { "id": "183", "nombre": "Reino Unido" },
    { "id": "184", "nombre": "Estados Unidos" },
    { "id": "185", "nombre": "Uruguay" },
    { "id": "186", "nombre": "Uzbekistán" },
    { "id": "187", "nombre": "Vanuatu" },
    { "id": "188", "nombre": "Venezuela" },
    { "id": "189", "nombre": "Vietnam" },
    { "id": "190", "nombre": "Yemen" },
    { "id": "191", "nombre": "Zambia" },
    { "id": "192", "nombre": "Zimbabue" }
]

export default paises;