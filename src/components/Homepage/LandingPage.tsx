"use client"
import { Branch } from "./svgs/branch";
import { Cloud1, Cloud1dark1, Cloud1dark2 } from "./svgs/cloud";
import { RotatingThing } from "./svgs/rotatingthing";
import { SponsorItem } from "./svgs/sponsorItem";
import { BorderDesign } from "./svgs/topBorder";
import { motion } from "framer-motion";

export default function LandingPage() {
    const sponsorsList = ["abd","asf","Rsdfg0","aesgd","rage","cyberpunk"]
    return (
        <div className="w-full overflow-x-hidden  relative h-full bg-[url('/images/bgImage.png')] bg-cover bg-center bg-color-[#7D2E2E]">
            <div className="w-full bg-[#7D2E2E] h-[22px] "></div>
            <BorderDesign className="w-full absolute -top-10 z-50"/>
            <div className="relative top-Deco-images flex justify-center items-center  w-full object-contain h-[60vh]  overflow-y-hidden">
                <motion.img src="/images/LeftKamal.png" alt="left-decoration" className=" w-[40%] absolute z-0 -top-5  left-0 -mt-[180px]"
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
                <img src="/images/rakshabhandan.png" alt="center-decoration" className=" w-[43%]  object-contain ml-40"/>
                <img src="/images/RightKamal.png" alt="right-decoration" className=" w-[20%] absolute z-0 top-0 right-0 "/>
            </div>
            <div className=" flex  items-center">
                <img src="/images/aartilady.png" alt="aarti" className="w-[30vw]  object-contain"/>
                <div className="text-about-oikyotaan h-full w-full text-[#7D2E2E] text-justify text-[clamp(12px,_7vw,_24px)] ">
                As spring gently nudges away winters slumber, bringing with it vibrant colours, a gentle warmth creeps in, as if welcoming the NoboBorsho. The air hums with anticipation, mirroring the excitement in our hearts. The gentle breeze sways the leaves welcoming the new year with better beginnings and fresh hopes. And amidst this effervescent atmosphere, our annual Bengali cultural extravaganza, Oikyotaan 24 pulsates with vibrant energy. A celebration of our rich heritage, a kaleidoscope of music, dance, art, and literature that unfolds against the backdrop of magic of spring.
                </div>
                <img src="/images/aartilady.png" alt="aarti" className="w-[30vw]  object-contain scale-x-[-1]"/>
            </div>
            <div className="brochure relative w-full flex flex-col justify-center items-center my-10">
                  <div className="box w-[25vw] h-[12vh] text-yellow-500 border-4 flex justify-center items-center text-[clamp(12px,_10vw,_50px)] bg-[#7D2E2E]">Brochure</div>
                  <div className="rakshabhandan w-full  flex justify-center items-center my-20">
                    <div className="clouds-about ">
                        <Cloud1 className="absolute top-10  right-10 z-[2]"/>
                        <Cloud1dark1 className="absolute top-20  -right-30 z-0"/>
                        <Cloud1dark2 className="absolute top-40 right-0 z-[1] "/>
                    </div>
                    <img src="/images/rakshabhandan.png" alt="center-decoration" className=" w-[43%]  object-contain ml-10"/>
                  </div>
            </div>
            <div className="about-nits flex  px-20">
                    <RotatingThing className="w-[45vw] -mt-40 relative"/>
                  <div className="aboutnits h-full w-full px-10 text-[#7D2E2E] text-justify text-[clamp(12px,_7vw,_24px)]">
                  As spring gently nudges away winters slumber, bringing with it vibrant colours, a gentle warmth creeps in, as if welcoming the NoboBorsho. The air hums with anticipation, mirroring the excitement in our hearts. The gentle breeze sways the leaves welcoming the new year with better beginnings and fresh hopes. And amidst this effervescent atmosphere, our annual Bengali cultural extravaganza, Oikyotaan 24 pulsates with vibrant energy. A celebration of our rich heritage, a kaleidoscope of music, dance, art, and literature that unfolds against the backdrop of magic of spring.
                  </div>
            </div>
            <section className="sponsor-div flex h-[50vh] justify-center items-center relative">
                  <div className="rakshabhandan w-full  flex justify-center items-center my-20">
                    <div className="clouds-sponsor ">
                        <Cloud1 className="absolute top-10  left-5 z-[2]"/>
                        <Cloud1dark2 className="absolute top-35  -left-15 z-0"/>
                    </div>
                    <img src="/images/rakshabhandan.png" alt="center-decoration" className=" w-[43%]  object-contain ml-10"/>
                  </div>
                  <Branch className="absolute top-20 scale-175 right-0 z-2"/>
            </section>
            <section className="Sponsors-list w-full px-40 flex flex-wrap mx-auto gap-10 justify-center items-center mb-20">
                          {sponsorsList.map((item, index) => (     
                              <div className="size-72 relative"><SponsorItem className="size-72"/><img src="/images/amara.png"className="absolute size-52 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 " /></div>
                        ))}
            </section>
        </div>
    );
}