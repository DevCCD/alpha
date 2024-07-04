import { useAtom } from "jotai";
import { useState } from "react";
import { idiomaAtom } from "../../atom/idiomaAtom.tsx";
import PeruIcon from "./Icons/PeruIcon.tsx";
import UsaIcon from "./Icons/UsaIcon.tsx";
import styles from "./styles/selectIdioma.module.css";
import { FaChevronDown } from "react-icons/fa";

const SelectIdioma = () => {
	const [isMenuIdiomaOpen, setIsMenuIdiomaOpen] = useState(false);
	const [idioma, setIdioma] = useAtom(idiomaAtom);

	const handleIdioma = (idioma: string | ((prev: string) => string)) => {
		setIdioma(idioma);
		setIsMenuIdiomaOpen(false);
	};

	const idiomas = [
		{
			name: "es",
			icon: <PeruIcon />,
			onClick: () => handleIdioma("es"),
		},
		{
			name: "en",
			icon: <UsaIcon />,
			onClick: () => handleIdioma("en"),
		}
	];

	return (
		<div className={styles.selectIdiomas}>
			<button
				className={
					isMenuIdiomaOpen
						? `${styles.btnNav} ${styles.btnIdiomas} ${styles.active}`
						: `${styles.btnNav} ${styles.btnIdiomas}`
				}
				onClick={() => setIsMenuIdiomaOpen(!isMenuIdiomaOpen)}
			>
				{idioma === "es" ? <PeruIcon /> : <UsaIcon />}
				<FaChevronDown />
			</button>
			{isMenuIdiomaOpen && (
				<div
					className={styles.menuIdioma}
				>
					{idiomas.map((idioma, i) => (
						<button
							key={i}
							className={styles.itemIdioma}
							onClick={idioma.onClick}
						>
							{idioma.icon}
							<span>{idioma.name.toUpperCase()}</span>
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default SelectIdioma;
