import { IoMdMenu } from "react-icons/io";
import ListItem from "../listItem";

const Header: React.FC = () => {
	return (
		<header className="flex min-h-[60px] bg-transparent justify-center justify-between px-[20px] py-[10px] items-center">
			<nav>
				<ul className="flex bg-[#8080809D] gap-4 p-2 rounded-xl text-sm text-white">
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
			<button className="bg-white h-1/5 p-1.5 rounded-lg">
				<IoMdMenu className="text-3xl" />
			</button>
		</header>
	);
};

export default Header;
