import { FaArrowRight } from "react-icons/fa";
import Title from "../title";

const Banner = () => {
	return (
		<div className="relative w-full h-screen px-4 mt-4">
			<div className="w-full h-[90%] bg-[url('/banner.jpg')] bg-cover bg-right-top bg-no-repeat rounded-2xl flex items-center p-20">
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
			</div>
		</div>
	);
};

export default Banner;
