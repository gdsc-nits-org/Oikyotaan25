"use client"
import CurtainReveal from "./CurtainReveal";
import { Branch } from "./svgs/branch";
import { Cloud1, Cloud1dark1, Cloud1dark2 } from "./svgs/cloud";
import { RotatingThing } from "./svgs/rotatingthing";
import { SponsorItem } from "./svgs/sponsorItem";
import { BorderDesign } from "./svgs/topBorder";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
    const sponsorsList = [
        {
            img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745384465/Oikyotaan25/1200px-Amul_official_logo.svg_y5xpta.png"
        }, 
        {
            img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745384510/Oikyotaan25/ZtQ2xM8__400x400_oirzj0.jpg"
        },
        {
            img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745384311/Oikyotaan25/Screenshot_2025-04-23_102552_mq4job.png",
        },
        {
            img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745384311/Oikyotaan25/Screenshot_2025-04-23_102601_wbtyrm.png"
        }, {
            img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745384311/Oikyotaan25/Screenshot_2025-04-23_102609_vhanf4.png"
        }, {
            img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745384311/Oikyotaan25/Screenshot_2025-04-23_102624_shzisv.png"
        }, {
            img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745384311/Oikyotaan25/Screenshot_2025-04-23_102615_vt9gcw.png"
        }]
    return (
        <div className="w-full overflow-x-hidden  bg-[#E3C7A1]  relative h-full bg-[url('/assets/landing/bgImage.png')]  md:bg-cover bg-size-[100vh] landbg bg-center "
            style={{
                backgroundSize: "150vh", // Default for small screens
            }}
        >

            <div className="w-full bg-[#7D2E2E] h-[22px] "></div>
            <BorderDesign className="w-full absolute -top-10 z-50" />

            <div className="relative top-Deco-images flex justify-center md:items-center items-end  w-full object-contain sm:h-[60vh] md:h-[60vh] h-[40vh] overflow-y-hidden pb-0">
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
                <CurtainReveal className=" md:w-[53%] md:mt-10 mb-4 relative object-contain flex flex-col md:ml-40 lg:-translate-x-12 " title="About Nits" />
                {/* <img src="/images/rakshabhandan.png" alt="center-decoration" className=" md:w-[43%] md:mt-0 object-contain md:ml-40"/> */}
                <img src="/assets/landing/RightKamal.png" alt="right-decoration" className=" md:w-[20%] w-[30%] absolute z-0 top-0 right-0 " />
            </div>
            {/* desktop view */}
            <div className="md:inline-flex hidden flex  items-center w-[100%] justify-center itens-center">
                <img src="/assets/landing/aartilady.png" alt="aarti" className="w-[20vw]  object-contain" />
                <div className="text-about-oikyotaan h-full w-[45%] text-[#7D2E2E] text-justify  font-puritan text-2xl lg:pl-5 lg:pr-5">
                    A bright future requires a bright start. NITS abides by this mantra. The institute believes in equipping students with the knowledge and skills in their chosen streams, inculcate values, identify hidden talents, and provide opportunities for students to realize their full potential. It facilitates the requisite support and encouragement via various cultural and academic activities to shape the body and soul. It has transformed into a sought out centre of learning.
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
                    A bright future requires a bright start. NITS abides by this mantra. The institute believes in equipping students with the knowledge and skills in their chosen streams, inculcate values, identify hidden talents, and provide opportunities for students to realize their full potential. It facilitates the requisite support and encouragement via various cultural and academic activities to shape the body and soul. It has transformed into a sought out centre of learning.
                </div>
            </div>
            <div className="brochure relative w-full flex flex-col justify-center items-center my-10">
                <Link href="https://drive.google.com/file/d/15UgBBL6auafc87OkzCG1wc9_OXXT475l/view?usp=sharing" target="_blank" className="box px-4 md:w-[25vw] h-[12vh] text-yellow-500 border-4 flex justify-center items-center bg-[#7D2E2E] font-aprillia text-5xl md:text-6xl scale-[.70] lg:scale-[.90]">BROCHURE</Link>
                <div className="clouds-about relative  md:hidden inline-flex h-[20vh] w-full ">
                    <Cloud1 className="absolute top-10 w-[175px]  right-10 z-[2]" />
                    <Cloud1dark1 className="absolute top-20 w-[175px] -right-20  z-0" />
                    <Cloud1dark2 className="absolute top-30 w-[175px] right-5 z-[1] " />
                </div>
                <div className="rakshabhandan  md:w-full w-[200vw]   flex justify-center items-center md:my-20 mt-20">
                    <div className="clouds-about hidden md:inline-flex bg-green-900">
                        <Cloud1 className="absolute top-10  right-10 z-[2]" />
                        <Cloud1dark1 className="absolute top-20  -right-30 z-0" />
                        <Cloud1dark2 className="absolute top-40 right-0 z-[1] " />
                    </div>
                    <CurtainReveal title="About Oikyotaan" className=" md:w-[43%] relative w-[100vw]  object-contain md:ml-10" />
                    {/* <img src="/images/rakshabhandan.png" alt="center-decoration" className=" md:w-[43%] w-[100vw]  object-contain md:ml-10"/> */}
                </div>

            </div>
            <section className="about-nits md:flex-row flex flex-col items-center justify-center gap-10 md:px-20 py-10 ">
                {/* <RotatingThing className="w-[45vw] -mt-40 relative"/> */}
                <img src="assets/landing/rotatingThing.gif" alt="rotating-thing" className=" md:w-[45vw]  md:h-auto w-[80vw]  object-contain  relative" />
                <div className="aboutnits  h-full w-full px-10 text-[#7D2E2E] text-justify font-puritan text-xl lg:text-2xl">
                    The Bengali New Year, or Pohela Boishakh, symbolises rejuvenation and
                    renewed life. It is that time of the year when we all get to hear the sweet
                    call of the cuckoo, feel the soothing sensation of the southern breeze,
                    mango flowers start appearing and the heart of Bengal seems to attain a new
                    vigour, brought about by the blessings of Spring.&nbsp;Oikyotaan
                    &quot;musical harmony&quot; is an annual event of NIT Silchar which is
                    dedicated to the frolic and cultural celebration of the Bengali New Year.
                    Since it is the harvest season, people pray to Lord Ganesha and Goddess
                    Laxmi for God&apos;s blessings on their lives and households. Many prayers
                    are chanted on this day because people believe it will bring them peace,
                    good health, long lives, and then stable lives.
                    <br></br>
                    <br></br>
                    Oikyotaan is a cultural festival that celebrates the diversity and
                    creativity of our Bengali community. It will feature music, dance, art and
                    more from talented performers and artists. Oikyotaan is a common podium of
                    celebration for all those whose hearts ardently love the
                    &quot;Bangaliana&quot; spirit - so do join us on the 26th of April, this year
                    as we welcome the new year with pomp, joy, music and dance!
                    <br />
                </div>
            </section>
            <section className="sponsor-div  flex h-[50vh] justify-center items-center relative">
                <div className="rakshabhandan w-full  flex justify-center items-center my-20">
                    <div className="clouds-sponsor ">
                        <Cloud1 className="absolute top-10 w-[50vw] md:w-auto left-5 z-[2]" />
                        <Cloud1dark2 className="absolute top-35 w-[50vw] md:w-auto -left-15 z-0" />
                    </div>
                    <CurtainReveal title="Previous Sponsors" className=" w-[43%] md:inline-flex md:flex-col relative hidden object-contain ml-10" />
                    {/* <img src="/images/rakshabhandan.png" alt="center-decoration" className=" w-[43%] md:inline-flex hidden object-contain ml-10"/> */}
                </div>
                <motion.div
                    className="absolute top-20 md:scale-175 -right-1 z-2 "
                    animate={{
                        rotate: [0, 4, -4, 0],
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
                <CurtainReveal title="Previous Sponsors" className=" w-[100vw] relative object-contain " />
                {/* <img src="/images/rakshabhandan.png" alt="center-decoration" className="  object-contain "/> */}
            </div>
            <section className="Sponsors-list w-full py-5 md:py-0 md:px-40 flex flex-wrap mx-auto gap-16 justify-center items-center mb-20">
                {sponsorsList.map((item, index) => (
                    <div key={index} className="md:size-72 sm:size-56 size-32 relative bg-red-900"><SponsorItem className="md:size-72" /><img src={item.img} className="absolute md:size-52 sm:size-36 size-24 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 " /></div>
                ))}
            </section>
        </div>
    );
}