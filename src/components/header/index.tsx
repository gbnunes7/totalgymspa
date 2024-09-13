import { IoMdMenu } from "react-icons/io";
import ListItem from "../listItem";

const Header: React.FC = () => {
	return (
		<header className="fixed z-10 w-full flex min-h-[60px] bg-transparent justify-between px-[40px] py-[10px] items-center">
			<nav>
				<ul className="flex bg-[#8080809E] gap-4 p-4 rounded-xl text-base text-white">
					<ListItem>Home</ListItem>
					<ListItem>Planos</ListItem>
					<ListItem>Aulas</ListItem>
					<ListItem>Contato</ListItem>
				</ul>
			</nav>
			<img
				src="/logo.png"
				alt="Logo da TotalGym"
				className="w-[100px] md:mr-[250px]"
			/>
			<button className="bg-white p-1.5 rounded-lg">
				<IoMdMenu className="text-3xl" />
			</button>
		</header>
	);
};

export default Header;
