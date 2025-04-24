'use client'
import HeroPage from "~/components/Homepage/HeroPage";
import LandingPage from "~/components/Homepage/LandingPage";
import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function HomePage() {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const toggleAudio = () => {
		if (!audioRef.current) return;

		if (isPlaying) {
			audioRef.current.pause();
		} else {
			void audioRef.current.play();
			audioRef.current.volume = 0.5; 
		}
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="h-full w-full text-center text-black bg-[#e3c7a0] relative">
			<audio ref={audioRef} src="/assets/audio/landing.mp3"  preload="metadata" loop />
			<button
				onClick={toggleAudio}
				className="fixed top-[90vh] lg:top-[93vh] text-white right-5 lg:right-8  p-2  cursor-pointer transition z-[100000000000] bg-[#7D2E2E] rounded-full"
				style={{ animation: 'glow 1.5s ease-in-out infinite'}}
			>
				{isPlaying ? <FaPause size={25} /> : <FaPlay size={25} />}
			</button>
			<HeroPage />
			<LandingPage />
		</div>
	);
}
