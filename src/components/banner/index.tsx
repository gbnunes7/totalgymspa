import { FaArrowRight } from "react-icons/fa";
import Title from "../title";
import { MdLocationPin } from "react-icons/md";

const BannerPrincipal = () => {
	return (
		<div className="relative w-full h-screen px-4 mt-4">
			<div className="w-full h-[80%] bg-[url('/banner.jpg')] bg-cover bg-right-top bg-no-repeat rounded-2xl flex flex-col justify-center p-16">
				<div className="flex flex-col gap-10 mb-[150px]">
					<Title>
						Sua jornada fitness <br></br>começa aqui e agora
					</Title>
					<p className="text-base text-white font-semibold">
						A Totalgym vem com um novo conceito de academia e bem estar, para
						você e toda sua família. <br></br>Localizada no coração da Tijuca,
						estamos prontos para atender você.
					</p>
					<button className="text-black flex items-center justify-between bg-orange-400 w-40 px-4 py-2 rounded-lg">
						Saber mais
						<div className="bg-white rounded-sm p-1">
							<FaArrowRight className="text-xl" />
						</div>
					</button>
				</div>
				<div>
					<p className="text-white flex items-center gap-2 font-semibold">
						<MdLocationPin />
						Rua Dezoito de Outubro, 207, Tijuca- RJ
					</p>
				</div>
			</div>
		</div>
	);
};

export default BannerPrincipal;
