"use client"
import { Branch } from "./svgs/branch";
import { Cloud1, Cloud1dark1, Cloud1dark2 } from "./svgs/cloud";
import { RotatingThing } from "./svgs/rotatingthing";
import { SponsorItem } from "./svgs/sponsorItem";
import { BorderDesign } from "./svgs/topBorder";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
    const sponsorsList = ["abd", "asf", "Rsdfg0", "aesgd", "rage", "cyberpunk"]
    return (
        <div className="w-full overflow-x-hidden  bg-[#E3C7A1]  relative h-full bg-[url('/assets/landing/bgImage.png')]  md:bg-cover bg-size-[100vh] landbg bg-center "
            style={{
                backgroundSize: "150vh", // Default for small screens
            }}
        >

            <div className="w-full bg-[#7D2E2E] h-[22px] "></div>
            <BorderDesign className="w-full absolute -top-10 z-50" />
            <div className="relative top-Deco-images flex justify-center md:items-center items-end  w-full object-contain sm:h-[60vh] md:h-[60vh] h-[40vh] overflow-y-hidden">
                <motion.img src="/assets/landing/LeftKamal.png" alt="left-decoration" className=" md:w-[30%] w-[40%] absolute z-0 top-0 left-0 scale-[1.05]  "
                    animate={{
                        rotate: [-4, 4],
                    }}
                    transition={{
                        type: "tween",
                        ease: "easeInOut",
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: 0.2,
                    }}
                ></motion.img>
                <img src="/assets/landing/rakshabhandan.png" alt="center-decoration" className=" md:w-[43%] md:mt-0 object-contain md:ml-16" />
                <img src="/assets/landing/RightKamal.png" alt="right-decoration" className=" md:w-[20%] w-[30%] absolute z-0 top-0 right-0 " />
            </div>
            {/* desktop view */}
            <div className="md:inline-flex hidden flex  items-center w-[100%] justify-center itens-center">
                <img src="/assets/landing/aartilady.png" alt="aarti" className="w-[20vw]  object-contain" />
                <div className="text-about-oikyotaan h-full w-[45%] text-[#7D2E2E] text-justify  font-puritan text-2xl lg:pl-5 lg:pr-5">
                    As spring gently nudges away winters slumber, bringing with it vibrant colours, a gentle warmth creeps in, as if welcoming the NoboBorsho. The air hums with anticipation, mirroring the excitement in our hearts. The gentle breeze sways the leaves welcoming the new year with better beginnings and fresh hopes. And amidst this effervescent atmosphere, our annual Bengali cultural extravaganza, Oikyotaan 24 pulsates with vibrant energy. A celebration of our rich heritage, a kaleidoscope of music, dance, art, and literature that unfolds against the backdrop of magic of spring.
                </div>
                <img src="/assets/landing/aartilady.png" alt="aarti" className="w-[20vw]  object-contain scale-x-[-1]" />
            </div>
            {/* mobile view */}
            <div className="inline-flex md:hidden flex flex-col  items-center">
                <div className="flex h-[50vh] sm:h-[60vh] w-full justify-center items-center relative">
                    <img src="/assets/landing/aartilady.png" alt="aarti" className="h-full w-[49vw]  object-contain" />
                    <img src="/assets/landing/aartilady.png" alt="aarti" className="h-full w-[49vw]  object-contain scale-x-[-1]" />
                </div>

                <div className="text-about-oikyotaan px-10 h-full w-full text-[#7D2E2E] text-justify font-puritan text-xl">
                    As spring gently nudges away winters slumber, bringing with it vibrant colours, a gentle warmth creeps in, as if welcoming the NoboBorsho. The air hums with anticipation, mirroring the excitement in our hearts. The gentle breeze sways the leaves welcoming the new year with better beginnings and fresh hopes. And amidst this effervescent atmosphere, our annual Bengali cultural extravaganza, Oikyotaan 24 pulsates with vibrant energy. A celebration of our rich heritage, a kaleidoscope of music, dance, art, and literature that unfolds against the backdrop of magic of spring.
                </div>
            </div>
            <div className="brochure relative w-full flex flex-col justify-center items-center my-10">
                <Link href="https://gdscnits.in" target="_blank" className="box px-4 md:w-[25vw] h-[12vh] text-yellow-500 border-4 flex justify-center items-center bg-[#7D2E2E] font-aprillia text-5xl md:text-6xl scale-[.70] lg:scale-[.90]">BROCHURE</Link>
                <div className="clouds-about relative  md:hidden inline-flex h-[20vh] w-full ">
                    <Cloud1 className="absolute top-10 w-[175px]  right-10 z-[2]" />
                    <Cloud1dark1 className="absolute top-20 w-[175px] -right-20  z-0" />
                    <Cloud1dark2 className="absolute top-30 w-[175px] right-5 z-[1] " />
                </div>
                <div className="rakshabhandan  md:w-full w-[200vw]   flex justify-center items-center my-20">
                    <div className="clouds-about hidden md:inline-flex bg-green-900">
                        <Cloud1 className="absolute top-10  right-10 z-[2]" />
                        <Cloud1dark1 className="absolute top-20  -right-30 z-0" />
                        <Cloud1dark2 className="absolute top-40 right-0 z-[1] " />
                    </div>
                    <img src="/assets/landing/rakshabhandan.png" alt="center-decoration" className=" md:w-[43%] w-[100vw]  object-contain md:ml-10" />
                </div>

            </div>
            <section className="about-nits md:flex-row flex flex-col items-center  md:px-20 py-10 ">
                <RotatingThing className="w-[45vw] -mt-40 relative" />
                <div className="aboutnits  h-full w-full px-10 text-[#7D2E2E] text-justify font-puritan text-xl lg:text-2xl">
                    As spring gently nudges away winters slumber, bringing with it vibrant colours, a gentle warmth creeps in, as if welcoming the NoboBorsho. The air hums with anticipation, mirroring the excitement in our hearts. The gentle breeze sways the leaves welcoming the new year with better beginnings and fresh hopes. And amidst this effervescent atmosphere, our annual Bengali cultural extravaganza, Oikyotaan 24 pulsates with vibrant energy. A celebration of our rich heritage, a kaleidoscope of music, dance, art, and literature that unfolds against the backdrop of magic of spring.
                </div>
            </section>
            <section className="sponsor-div  flex h-[50vh] justify-center items-center relative">
                <div className="rakshabhandan w-full  flex justify-center items-center my-20">
                    <div className="clouds-sponsor ">
                        <Cloud1 className="absolute top-10 w-[50vw] md:w-auto left-5 z-[2]" />
                        <Cloud1dark2 className="absolute top-35 w-[50vw] md:w-auto -left-15 z-0" />
                    </div>
                    <img src="/assets/landing/rakshabhandan.png" alt="center-decoration" className=" w-[43%] md:inline-flex hidden object-contain ml-10" />
                </div>
                <motion.div
                    className="absolute top-20 md:scale-175 -right-1 z-2 "
                    animate={{
                        rotate: [0, 4,  -4, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Branch />
                </motion.div>
            </section>
            {/* mobile view */}
            <div className="rakhshabhandan w-full inline-flex justify-center md:hidden">
                <img src="/assets/landing/rakshabhandan.png" alt="center-decoration" className="  object-contain " />
            </div>
            <section className="Sponsors-list w-full p-10 md:py-0 md:px-40 flex flex-wrap mx-auto gap-10 justify-center items-center mb-20">
                {sponsorsList.map((item, index) => (
                    <div key={index} className="md:size-72 sm:size-56 size-32 relative bg-red-900"><SponsorItem className="md:size-72" /><img src="/assets/landing/amara.png" className="absolute md:size-52 sm:size-36 size-24 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 " /></div>
                ))}
            </section>
        </div>
    );
}