import { FaArrowRight } from "react-icons/fa";
import BannerPrincipal from "./components/banner";
import Header from "./components/header";
import Title from "./components/title";

function App() {
	return (
		<div className="min-h-screen flex flex-col bg-[#212121]">
			<Header />
			<BannerPrincipal />
			<section className="w-full flex p-16 gap-36">
				<div className="flex flex-col gap-16">
					<Title>
						Atividades físicas para<br></br> toda a família
					</Title>
					<p className="text-white text-lg">
						Oferecemos mais de 15 opções de atividades! Enquanto seu filho
						aproveita a natação, você pode participar de aulas como spinning,
						ginástica localizada ou até mesmo artes marciais como Muay Thai. Se
						preferir, também pode se exercitar em nossa área de musculação.
					</p>
					<button className="text-black flex items-center justify-between bg-orange-400 w-40 px-4 py-2 rounded-lg">
						Saber mais
						<div className="bg-white rounded-sm p-1">
							<FaArrowRight className="text-xl" />
						</div>
					</button>
				</div>
				<img src="/academia.png" alt="" className="w-2/4 rounded-2xl" />
			</section>
		</div>
	);
}

export default App;
