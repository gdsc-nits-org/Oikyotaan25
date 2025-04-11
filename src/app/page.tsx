import Footer from "../components/footer/footer";
import Artist from "../components/artist/artist";
export default function HomePage() {
	return (
			<div className="flex min-h-screen flex-col">
				<Artist />
				<Footer />
			</div>
	);
}
