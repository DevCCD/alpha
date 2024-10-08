const cursos = [
    {
        "_id": "0",
        "nombre": "Microeconomía I",
        "descripcion": "Analizarán cómo ciertas políticas públicas pueden influir en estos resultados, y conceptos básicos de poder de mercado.",
        "imagen": "https://www.santanderopenacademy.com/es/blog/libros-de-economia/_jcr_content/root/container/responsivegrid/image.coreimg.jpeg/1714384686872/libros-de-economia-3.jpeg",
        "modulos": [
            {
                "_id": "0",
                "nombre": "Clase 0 (Presentación)",
                "material": ["https://docs.google.com/presentation/d/1muOsqOkAIgOF-hNyrRQRBRyNLoTMo58w/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/16TcM6pqb3cmkg7ew89ddtiJR1jhpNEs5/preview?usp=sharing"],
            },
            {
                "_id": "1",
                "nombre": "Clase 1",
                "material": ["https://docs.google.com/presentation/d/19xUMuWSCMS5h2_t8L5Ni9SfjpUliE-I8/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true", 
                            "https://drive.google.com/file/d/1kSgQBE8B7NWcDlQtQa1C1DFF2VyviB56/view",
                            "https://drive.google.com/file/d/1lGZtrsq8wo3b_Y3xLHcp5WhzO226RHDp/view"],
                "ejercicios": ["https://drive.google.com/file/d/1q8rod78EUlLqLLO8pJqSEGYo4ha6zWE8/preview"],
                "videos": ["https://drive.google.com/file/d/1641HyiAU4-IgRRAK3Dwe6DoJLlO5Ai9R/preview?usp=sharing"],
            },
            {
                "_id": "2",
                "nombre": "Clase 2",
                "material": ["https://docs.google.com/presentation/d/1Ps7_kvnqFfEywTr1FRIXO1mx1pdzcL9e/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true", 
                            "https://drive.google.com/file/d/1DbfqwHFPp47mtNqtVazKZ6UqBnvxIdbX/view", 
                            "https://drive.google.com/file/d/1n0QHscKosW-kL1tTidJBjynImo4XKMUQ/view?usp=sharing",
                            "https://drive.google.com/file/d/1T2Z3CTItqf5dRffgCnJh2RW7xp4XDvuF/view?usp=sharing",
                            "https://drive.google.com/file/d/1lK7C0kDcF05G7_9W86e0je8OgFUDPgLt/view?usp=sharing"],
                "ejercicios": ["https://drive.google.com/file/d/1CNMngqp9KN9y3nAkNPaAt4p482swkEJj/preview"],
                "videos": ["https://drive.google.com/file/d/14ae2myxeT1yUkPZcHcrZ8CpgMctXMTX0/preview?usp=sharing"],
            },
            {
                "_id": "3",
                "nombre": "Clase 3",
                "material": ["https://docs.google.com/presentation/d/1eG49VemaA7UNVb22ZHqOvTowhBW2gj9i/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true",
                            "https://drive.google.com/file/d/1kOOaVF_pGYAuo1jZspI2HHkDpNvtJiPN/view?usp=sharing",
                            "https://drive.google.com/file/d/1HmPH-e0kv7WqlJJZ8bRL-OR7Xg8aLRvG/view?usp=sharing",
                            "https://drive.google.com/file/d/1qd0uuNsDQeSldCqKestzuwef9ff8Nxzc/view?usp=sharing",
                            "https://drive.google.com/file/d/143_4VMsUZQ5zTcDLptTEvYDkJsCLffqZ/view?usp=sharing"],
                "ejercicios": ["https://drive.google.com/file/d/12er5C8KUWXUqRsCCfk4l2CffsPWvRXeg/preview"],
                "videos": ["https://drive.google.com/file/d/1vwtfcypnepShj9MPvFwE-a_RutJrkqRx/preview?usp=sharing"],
            },
            {
                "_id": "4",
                "nombre": "Clase 4",
                "material": ["https://docs.google.com/presentation/d/15Er_bm2ePZPC0wu5FgKSk2cwSQEc2-8m/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true",
                            "https://drive.google.com/file/d/1JkxpnylKWxLxzWbbigtm__OfVfd0Z3-C/view?usp=sharing",
                            "https://drive.google.com/file/d/12YsznM6AwUwAaV5kU0KxmT3QXHzN7kLN/view?usp=sharing",
                            "https://drive.google.com/file/d/1iN3TeJd5tsGOtWohnbBtndYLE19rCCMH/view?usp=sharing",
                            "https://drive.google.com/file/d/1pAPvv4XSrbkZuEOjmgmic-ulDtB2EmsC/view?usp=sharing"],
                "ejercicios": ["https://drive.google.com/file/d/1qrUavylUTMtCx-xSvKXt21-w3cawVUI6/preview"],
                "videos": ["https://drive.google.com/file/d/1Yr3gHGQg6P_fICOJimoP10tmI1qA0EHZ/preview?usp=sharing"],
            },
            {
                "_id": "5",
                "nombre": "Clase 5",
                "material": ["https://docs.google.com/presentation/d/1Ntaewd_hT8XWFHBeRL6ijE8Q65F1IrlP/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true",
                            "https://drive.google.com/file/d/1QYSJA70K3g97bQcmHDVAFxU98c1EVqtJ/view?usp=sharing",
                            "https://drive.google.com/file/d/1z4fxKX9dbKgZp_6hLfT70IoEbFx0NYFM/view?usp=sharing",
                            "https://drive.google.com/file/d/1PZne3vKo2T8CuMzZaZLKulwuqzvxSiMa/view?usp=sharing",
                            "https://drive.google.com/file/d/1l7zGoiFh4qgLDGGl5NIgu9Xd0u7ndbvg/view?usp=sharing"],
                "ejercicios": ["https://drive.google.com/file/d/1iIkbqi6uHRk8z0wRL_y-BeaAuf4sW8oI/preview"],
                "videos": ["https://drive.google.com/file/d/132eqzVaj6OKKmccVTzWZQjnBK5dMsVdn/preview?usp=sharing"],
            },
            {
                "_id": "6",
                "nombre": "Clase 6",
                "material": ["https://docs.google.com/presentation/d/1qUGxBPTnT4JqtFjb7JtbQd3VPqMCMFVF/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true",
                            "https://drive.google.com/file/d/1b07M3cg-pmPXzxZNPCSB0njStaOrSBm9/view?usp=sharing",
                            "https://drive.google.com/file/d/1YxHLQEOZUKE27n1bMYjSsZ2WaZJ_PH4F/view?usp=sharing",
                            "https://drive.google.com/file/d/14xqzB-mfULoj90hXKDQruF1ne3VayVkQ/view?usp=sharing",
                            "https://drive.google.com/file/d/1Bsnc6jQq0I8WNxA4G6oCAAOiVzbSVv23/view?usp=sharing"],
                "ejercicios": ["https://drive.google.com/file/d/1fb8bjmTvJKlRQ0oozY02trUN-bIxdTlY/preview"],
                "videos": ["https://drive.google.com/file/d/173UNeeM3LLeWIPI84qkCV7spxiV0ED_A/preview?usp=sharing"],
            },
            {
                "_id": "7",
                "nombre": "Clase 7",
                "material": ["https://docs.google.com/presentation/d/14pB17egJjNRfQmWW6tOv2tq4GOkfhUf9/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true",
                            "https://drive.google.com/file/d/1k0CoekiQ6bWEF3qTexvE_ZMVCnSHjwDX/view?usp=sharing",
                            "https://drive.google.com/file/d/1QNOm4vvzAosjSoXEfNtWvbLrIjeEbr50/view?usp=sharing",
                            "https://drive.google.com/file/d/1-yw08DMOcf8jMAa66MaDUVG72en2iGfY/view?usp=sharing",
                            "https://drive.google.com/file/d/1tCr7wAotk0tlaaIy7Rh3CWOViggseSqh/view?usp=sharing"],
                "ejercicios": ["https://drive.google.com/file/d/1X3VzAnpnr2pz91JJ7rPdnsORjAU8FucF/preview"],
                "videos": ["https://drive.google.com/file/d/19Kt1ZAW77NsDOwXnnbYEQtXlGaQxF6oG/preview?usp=sharing"],
            },
            {
                "_id": "8",
                "nombre": "Clase 8",
                "material": ["https://docs.google.com/presentation/d/1pcc4Fyb0leSeotlldwLXPWsCI4hsD3tt/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true",
                            "https://drive.google.com/file/d/1drKBUSK5TiMoMcyFk0Md_FR9OXq7lK89/view?usp=sharing",
                            "https://drive.google.com/file/d/1EliGH7UGEoIe99TItKYkDsNdqsgq_Jg1/view?usp=sharing",
                            "https://drive.google.com/file/d/1YgmFCIVoxGzd3XOdO2WZM6LrA1tq-GuW/view?usp=sharing",
                            "https://drive.google.com/file/d/1kKRP5M4bsniNXTIFuuULEcBe2C31zzap/view?usp=sharing"],
                "ejercicios": ["https://drive.google.com/file/d/1-Pb192UuckXIF7t59t_LBCwgM1MlsGd8/preview"],
                "videos": ["https://drive.google.com/file/d/1ZGkluWrDTcdFS2gTDSscBRlRL_NSlm7E/preview?usp=sharing"],
            },
            {
                "_id": "9",
                "nombre": "Clase 9",
                "material": ["https://docs.google.com/presentation/d/141gpQ9nFBG7cmmN0MaPlo2H66DKsbz8p/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true",
                            "https://drive.google.com/file/d/1dVkHE8YbWdcj_EdkhJT8bdyuuLSull3H/view?usp=sharing",
                            "https://drive.google.com/file/d/1HrDadvr6vNMymFl5mrct2ijDeNE69DDU/view?usp=sharing",
                            "https://drive.google.com/file/d/1Orav8b9_M2EuBxL1zlMmCleRSU88y5Hx/view?usp=sharing",
                            "https://drive.google.com/file/d/1CteFuj1_9ZPhgDETeqyMOC0FatUKdmdF/view?usp=sharing"],
                "ejercicios": ["https://drive.google.com/file/d/1dSU6vHqXPNyc46Te2E2W05N92QBcQp-0/preview"],
                "videos": ["https://drive.google.com/file/d/1rVNEWHpOyfLIHbkE_hEu1m2lDpCmWy85/preview?usp=sharing"],
            },
            {
                "_id": "10",
                "nombre": "Clase 10",
                "material": ["https://docs.google.com/presentation/d/14ng70hEhzCe9hxtSKyrPUCE6HADpp5SL/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true",
                            "https://drive.google.com/file/d/1pKLMnexIQb0Go9HYVbw5K8bsYs6GG9rv/view?usp=sharing",
                            "https://drive.google.com/file/d/1pXdzi2WIvRv8HUymZRabgCQNnaQaHp2A/view?usp=sharing",
                            "https://drive.google.com/file/d/1trS65LkFsCeKsZNl3w71lxDBV70NODHd/view?usp=sharing",
                            "https://drive.google.com/file/d/1zKkeHJMpE7Hms9BZHvxBXtZafXV9MlBN/view?usp=sharing"],
                "ejercicios": ["https://drive.google.com/file/d/19EnGebJahiA612wVVkQ5aIfy55CaLva2/preview"],
                "videos": ["https://drive.google.com/file/d/16cvD_7cg-YZvzvA7AiiLihqjpmWbokgh/preview?usp=sharing"],
            },
            {
                "_id": "11",
                "nombre": "Clase 11",
                "material": ["https://docs.google.com/presentation/d/1y9auwIA-VcDeQKInu-vmQDmShOH5djNz/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true",
                            "https://drive.google.com/file/d/1-gNhKHmfdgtIM753VCsRPgXMdKYgqYUf/view?usp=sharing",
                            "https://drive.google.com/file/d/19xm7_qj9oqqSaDtLKMpLrJ0pA_OuxEl2/view?usp=sharing",
                            "https://drive.google.com/file/d/12NDoimxTX_ADTyutsChm5cPo8jX8YU6o/view?usp=sharing",
                            "https://drive.google.com/file/d/1v7vME7gbrIHrrZ1YSHXTu-I6mympY3lz/view?usp=sharing"],
                "ejercicios": ["https://drive.google.com/file/d/1qXqXncwKFMXIXMGelP5sE9dA-UIT5vLv/preview"],
                "videos": ["https://drive.google.com/file/d/1fSpp5tfzXHCTC0gbX-3yvaSfn7pHVtfq/preview?usp=sharing"],
            },
            {
                "_id": "12",
                "nombre": "Clase 12",
                "material": ["https://docs.google.com/presentation/d/1xJM4bSDwNKP3DliuAsE2GXXWbt_i19l1/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true",
                            "https://drive.google.com/file/d/1X5cRUHKeC3RWKowdnJqBZ1yMI69T1Led/view?usp=sharing",
                            "https://drive.google.com/file/d/1A2jb9cRBYSSdYiATMLUbC1pvC4r4zBpf/view?usp=sharing",
                            "https://drive.google.com/file/d/1b8hUMJAbVykmasiIQqRUKlXiheftXzlc/view?usp=sharing",
                            "https://drive.google.com/file/d/1Hdw1Ar5lS_Pbw73lremjI3Hk965oOE7k/view?usp=sharing"],
                "ejercicios": ["https://drive.google.com/file/d/1V8ssXiXNbJYRoWVPsXQ2ROfw6YjPXLYz/preview"],
                "videos": ["https://drive.google.com/file/d/1rkLS8hO5q6aDQE0HmFZdbjN09H1fheJ3/preview?usp=sharing"],
            },
            {
                "_id": "13",
                "nombre": "Clase 13",
                "material": ["https://docs.google.com/presentation/d/1iYLE3iJ0qijjSigD0LDwpDuo8dGxdPOv/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true",
                            "https://drive.google.com/file/d/1hVE7SbNZnrc0Qcu5fupg53wF5UU7ONs_/view?usp=sharing",
                            "https://drive.google.com/file/d/1YbafXlWwByvNpRr7UEs3Ai8A9mkFmvXH/view?usp=sharing",
                            "https://drive.google.com/file/d/1midHAD7hTHVLcufw-cUMslEnetkHW5I_/view?usp=sharing",
                            "https://drive.google.com/file/d/1zIeCj4y5x0e7mnLckm-LQ2eAIwPieFhx/view?usp=sharing"],
                "ejercicios": ["https://drive.google.com/file/d/13fa6Qp6FzhFRtKBuwV2-OeFykEIsbsyJ/preview"],
                "videos": ["https://drive.google.com/file/d/1SQI3JZD74lvXatAQ51Ayg7bEo-trdl_d/preview?usp=sharing"],
            },
            {
                "_id": "14",
                "nombre": "Clase 14",
                "material": ["https://docs.google.com/presentation/d/1UbxSLfrezjVkxlFtEiyt6_Y4coceHEuK/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true",
                            "https://drive.google.com/file/d/146ZnKyoJL0WC7FIz2wHwog9B9ph87WtR/view?usp=sharing",
                            "https://drive.google.com/file/d/1pGW56a1UlYcJDHRjVYdgbCrMzTKtQfVr/view?usp=sharing",
                            "https://drive.google.com/file/d/1lMBlgqBKzN_2I2zPqP6TPD6s3SCvSipl/view?usp=sharing",
                            "https://drive.google.com/file/d/1juAX9vkzuJGh9o3FbqzAwFK3z4uATY56/view?usp=sharing"],
                "ejercicios": ["https://drive.google.com/file/d/1ObtRq7Y7NhZQsAYq4tMUIdxOpQezHKy9/preview"],
                "videos": ["https://drive.google.com/file/d/12ejPgkvaMdW6DYO4ueaBoYfI0WVnNvM8/preview?usp=sharing"],
            }
        ]
    },
    {
        "_id": "1",
        "nombre": "Macroeconomía I",
        "descripcion": "Expande la modelización de una economía cerrada abriendo los mercados de bienes y financieros al comercio.",
        "imagen": "https://img.freepik.com/foto-gratis/tiro-angulo-edificios-azules-gran-altura_181624-2673.jpg",
        "modulos": [
            {
                "_id": "0",
                "nombre": "Sesión 0 (Presentación)",
                "material": [],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1FebYKPZ1lwmTcoby38UL7mefhFXp59Yn/preview?usp=sharing"],
            },
            {
                "_id": "1",
                "nombre": "Sesión 1",
                "material": ["https://docs.google.com/presentation/d/1d-LZGv9Am-WaqERR1ozQwzqfP0kT6pl5/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1273caV0mRkr2ohPT2_PXJvGVD1T_FOzw/preview?usp=sharing"],
            },
            {
                "_id": "2",
                "nombre": "Sesión 2",
                "material": ["https://docs.google.com/presentation/d/16U3meWglR4aJVTSmWHqXM0kD-_4AXhcv/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1mPrXyueDN8CUyCFztk7eY_78xePuWKv4/preview?usp=sharing"],
            },
            {
                "_id": "3",
                "nombre": "Sesión 3",
                "material": ["https://docs.google.com/presentation/d/1w0Xe9DhuGl-7XL21-GjdiEgSogajB0v2/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1Dwfew_Exny7eJWMtoxE7OplzeLS0UTFl/preview?usp=sharing"],
            },
            {
                "_id": "4",
                "nombre": "Sesión 4",
                "material": ["https://docs.google.com/presentation/d/1QTyQ4vEcDvKrSSJy9rcJV6WI_UB1zVyy/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1v6hsYY0F4f4IuC7_lR1lVXGX5IrDij5l/preview?usp=sharing"],
            },
            {
                "_id": "5",
                "nombre": "Sesión 5",
                "material": ["https://docs.google.com/presentation/d/1B0dy1omwSujgr6Gw4ps_FjnR3RJX5XEx/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1V5fW0a_sMHYU3VS6TUZVpFicud4v4-7D/preview?usp=sharing"],
            },
            {
                "_id": "6",
                "nombre": "Sesión 6",
                "material": ["https://docs.google.com/presentation/d/1DxpCXR4G3qQ6H4-evgzpOntjh-5G9Gpu/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1McHasDVc1oRSD9zuh7isI4lL_V_5PM_B/preview?usp=sharing"],
            },
            {
                "_id": "7",
                "nombre": "Sesión 7",
                "material": ["https://docs.google.com/presentation/d/1DhszHRjX_gi_JNwNID0Es19xqM8BYOmy/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1eHpQcabcFuhR_Q9yyE8eSGp4ulwo7MTw/preview?usp=sharing"],
            },
            {
                "_id": "8",
                "nombre": "Sesión 8",
                "material": ["https://docs.google.com/presentation/d/1Rjt6wTUmXLZD_CpBKlG_fN26MXnQKpNF/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1v_9WQyuC2FNXwrIG3hjv9DysaDEOL7AL/preview?usp=sharing"],
            },
            {
                "_id": "9",
                "nombre": "Sesión 9",
                "material": ["https://docs.google.com/presentation/d/1pYkRm5xyibXdioz6JFEAbrLDEjL7v38V/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1cu-AMkDcdvus5mhkNZWU_Ij-xBsA8oYL/preview?usp=sharing"],
            },
            {
                "_id": "10",
                "nombre": "Sesión 10",
                "material": ["https://docs.google.com/presentation/d/12v6XjFRMzD8vkDbePfGPEfE7fLb6XcZG/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1HH12kwTB03SxfnL0JXsEXHEAA1ONjJfQ/preview?usp=sharing"],
            },
            {
                "_id": "11",
                "nombre": "Sesión 11",
                "material": ["https://docs.google.com/presentation/d/1Q-XfBenCFmuDgkH6Vu9ZOd5xIjJkmvwB/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1g_od7eEKEtomZf_o7qjFK5idrILtMqR4/preview?usp=sharing"],
            },
            {
                "_id": "12",
                "nombre": "Sesión 12",
                "material": ["https://docs.google.com/presentation/d/1Ni53n7D_CY8SapmzlD16nN24HyYHLnYf/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1wnqsb7jMRb2iU132ySaNbj7DW8u6NVKJ/preview?usp=sharing"],
            },
            {
                "_id": "13",
                "nombre": "Sesión 13",
                "material": ["https://docs.google.com/presentation/d/1tZ-b8InOR6RX0ekp5vsaVcyWti83E40c/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1wk2Sj1aXsnZQMsjXNeCNGqHFyZ4SCuSK/preview?usp=sharing"],
            },
            {
                "_id": "14",
                "nombre": "Sesión 14",
                "material": ["https://docs.google.com/presentation/d/1ooyWhy6JFinnhDT1NeA0Bi9ql2dxWJt-/preview?usp=sharing&ouid=115147310613799485138&rtpof=true&sd=true"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/12GaqTRh0bAO8PjisL2P-BEJBoo6BubQ1/preview?usp=sharing"],
            }
        ]
    },
    {
        "_id": "2",
        "nombre": "Econometría I",
        "descripcion": "Serán capaces de evaluar la validez del análisis empírico que se les presente.",
        "imagen": "https://psiqueviva.com/wp-content/uploads/Navaja-de-ockham.jpg",
        "modulos": [
            {
                "_id": "0",
                "nombre": "Sesión 1",
                "material": ["https://drive.google.com/file/d/1DXSqXKb-RiOvsl-GfV3fawgIxPyMI0ct/preview?usp=sharing"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1WbLmwc5dl3oaL9UNy9kVO3bkQrV-vWeK/preview?usp=sharing", 
                        "https://drive.google.com/file/d/19icHcSTVcY1QOCYR30j63orzKXEYXiSF/preview?usp=sharing"],
            },
            {
                "_id": "1",
                "nombre": "Sesión 2",
                "material": ["https://drive.google.com/file/d/1ukoUF0_z_hTW7uC841-2dI-HuWGwdlGa/preview?usp=sharing"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1KHJqWhm4F2heCfhihjJY3TGpydhQCBXS/preview?usp=sharing"],
            },
            {
                "_id": "2",
                "nombre": "Sesión 3",
                "material": ["https://drive.google.com/file/d/1SnUuzkKaxSCtPxpAmohEzVWaUYzK9Wyh/preview?usp=sharing"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1jQH7NXJgKYlVpIbf5_FPAF1Fhh9EtbFN/preview?usp=sharing"],
            },
            {
                "_id": "3",
                "nombre": "Sesión 4",
                "material": ["https://drive.google.com/file/d/1-Djjx7m9Abt-pSNuMlcXB9rr6P5Nb5v0/preview?usp=sharing"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/17Wc9pBopHJkKsGx-Rf8qtIUTnwcg9e8y/preview?usp=sharing"],
            },
            {
                "_id": "4",
                "nombre": "Sesión 5",
                "material": ["https://drive.google.com/file/d/1nyxffKjZJ9tmg4IXBzftHXletewfbB3n/preview?usp=sharing"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1dCz0BQYM2tDt9sPp-CXJ4pqMRE1XnssH/preview?usp=sharing"],
            },
            {
                "_id": "5",
                "nombre": "Sesión 6",
                "material": ["https://drive.google.com/file/d/1m-28HknMAjyxAxSW_g482e1V-tTRQAxD/preview?usp=sharing"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/13Q_W2SgZJdvibCEjfbmBJJCaf3DV3nV0/preview?usp=sharing"],
            },
            {
                "_id": "6",
                "nombre": "Sesión 7",
                "material": ["https://drive.google.com/file/d/1noI9aF6nXc0UXd4wBFa1V-JjHlnjfMcg/preview?usp=sharing"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1mwSPicCoBjiMhTgHswc3bztQgNih7AMF/preview?usp=sharing"],
            },
            {
                "_id": "7",
                "nombre": "Sesión 8",
                "material": ["https://drive.google.com/file/d/1jZnQeIDsXoZcuKbEVLFHE7a2ys0trzDB/preview?usp=sharing"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/164DHORVlnkcJXb9Fi70nMZ81dJHuER65/preview?usp=sharing"],
            },
            {
                "_id": "8",
                "nombre": "Sesión 9",
                "material": ["https://drive.google.com/file/d/1Zh12-CuCi6A2yFQ4HBK7WcyyBed4FUlL/preview?usp=sharing"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1d80V7JsSEafydAqWRkYwi2tTJkvfHxk6/preview?usp=sharing"],
            },
            {
                "_id": "9",
                "nombre": "Sesión 10",
                "material": ["https://drive.google.com/file/d/1TGm2sBo-hTIokZVxvQnB_89WNWBKSpSA/preview?usp=sharing"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1zhIV4kA2ivZ3rl0bEhAg_Yh4rWEEpIb-/preview?usp=sharing"],
            },
            {
                "_id": "10",
                "nombre": "Sesión 11",
                "material": ["https://drive.google.com/file/d/1ApqmmbUhnltVBisNUlQP6mhOyn1lpWQu/preview?usp=sharing"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1Lpyj10sx2GvJ1UkmSaljFIlGchwhcm3n/preview?usp=sharing"],
            },
            {
                "_id": "11",
                "nombre": "Sesión 12",
                "material": ["https://drive.google.com/file/d/1kfXIbb8vUewSry6ak4Kk4Op9DX-bpbBX/preview?usp=sharing"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/15hpPRrfkiENIgQ3MdqDnTkIJQGcyrPM2/preview?usp=sharing"],
            },
            {
                "_id": "12",
                "nombre": "Sesión 13",
                "material": ["https://drive.google.com/file/d/1ssPEc4ZNQJ4Xmc1VDX-bPcFDU9eEEyq-/preview?usp=sharing"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1T2ianH9uUtFgf5U4Erj-nCNLgPp4tNDp/preview?usp=sharing"],
            },
            {
                "_id": "13",
                "nombre": "Sesión 14",
                "material": ["https://drive.google.com/file/d/1G2XrbzM8s4b9LAw5PM_XDN5p_S4E0tZ0/preview?usp=sharing"],
                "ejercicios": [],
                "videos": ["https://drive.google.com/file/d/1yZ3Ud79xZrnlDvRm3lAsZTDLbDUGlPbE/preview?usp=sharing"],
            }
        ]
    },
]

export default cursos;