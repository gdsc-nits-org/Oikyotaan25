import HeroPage from "~/components/Homepage/HeroPage";
import LandingPage from "~/components/Homepage/LandingPage";

export default function HomePage() {
	return (
		<div className="h-full w-full text-center text-black bg-[#e3c7a0]"> 
			<HeroPage />
			<LandingPage />
		</div>
	);
}
