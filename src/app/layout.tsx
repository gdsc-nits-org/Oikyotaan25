import "~/styles/globals.scss";
import NavbarDesktop from "~/components/navbar/NavbarDesktop";
import NavbarMobile from "~/components/navbar/NavbarMobile";
import Footer from "~/components/footer/footer";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Puritan } from "next/font/google";
import Loader from "./loader";

export const metadata: Metadata = {
	title: "Oikyotaan 2025",
	description: "The official website of Oikyotaan 2025",
	metadataBase: new URL("https://oikyotaan.in"),
	creator: "GDGC NITS",
	keywords: [
		"GDGC",
		"NITS",
		"Oikyotaan",
		"2025",
		"Oikyotaan25",
		"NITS",
		"NIT",
		"Silchar",
	],
	robots: {
		index: true,
		nocache: true,
		noarchive: false,
	},
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

const puritan = Puritan({
	subsets: ["latin"],
	variable: "--font-puritan",
	weight: ["400", "700"],
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${geist.variable} ${puritan.variable}`}>
			<body>
				<Loader>
					<NavbarDesktop />
					<NavbarMobile />
					{children}
					<Footer />
				</Loader>
			</body>
		</html>
	);
}
