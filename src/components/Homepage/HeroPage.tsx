"use client";
import { Wave} from "./svgs/wave";
import { motion } from "framer-motion";
import { Bridge } from "./svgs/howrahBridge";
import { Cloud1, Cloud2 } from "./svgs/cloud";
import { Crow } from "./svgs/crows";
import { Boat1, Boat2, Boat3 } from "./svgs/boats";

export default function HeroPage() {
    return (
        <div className="relative w-full flex flex-col  items-center overflow-hidden h-screen bg-gradient-to-b from-[#6ADADA] via-[#FEE6BA] to-[#326BFB]">
             <Boat2 className="absolute -z-100"/>{/*keep it otherwise bugs pop out */}
            <div className="water-waves absolute bottom-0 w-full lg:h-[20vh] h-[30vh] ">     
                <motion.div
                id="boat-above-wave"
                    className="absolute z-[25]  bottom-[11vh] sm:bottom-[14vh]  left-[55vw] -translate-x-1/2 md:invisible md:hidden visible"
                    animate={{
                      rotate: [-4, 4, -4],
                    }}
                    transition={{
                      duration: 5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "mirror",
                    }}
                >
                    <Boat2 className=" h-[60vh] w-[80vw] bottom-0 md:invisible visible "/>
                </motion.div>   
                {/* filler wave mobile view */}
                <motion.div
                    className="absolute z-40   scale-x-[-1] bottom-[10%]  -left-[20%] w-[200vw] md:-bottom-[5vh] md:left-[5vw]  md:w-full "
                    animate={{
                        x:[-10 ,10],
                        y: [-5, 0],
                        rotate: [-1, 1],
                    }}
                    transition={{
                        type: "tween",
                        ease: "easeInOut",
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: 0.2,
                      }}
                >
                    <Wave />
                </motion.div> 
                {/* filler wave mobile view */}
                <motion.div
                    className="absolute  z-37 left-20  scale-x-[-1] bottom-[23%]  -left-[20%] w-[200vw] md:-bottom-[5vh] lg:bottom-[0vh] lg:w-[75vw] md:left-[5vw]  md:w-full "
                    animate={{
                        x:[-10 ,10],
                        y: [-5, 0],
                        rotate: [-1, 1],
                    }}
                    transition={{
                        type: "tween",
                        ease: "easeInOut",
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: 0.2,
                      }}
                >
                    <Wave />
                </motion.div> 
                <motion.div
                    className="absolute md:z-30  z-45  scale-x-[-1] -bottom-[10%] -left-[20%] w-[200vw] md:-bottom-[5vh] md:left-[5vw]  md:w-full"
                    animate={{
                        x:[-10 ,10],
                        y: [-5, 0],
                        rotate: [-1, 1],
                    }}
                    transition={{
                        type: "tween",
                        ease: "easeInOut",
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: 0.2,
                      }}
                >
                    <Wave />
                </motion.div>
                <motion.div
                    // all responsive
                    className="absolute  z-20 top-[10%] md:-top-[5vh] w-[200vw] md:-bottom-[5vh] md:-left-[30vw]  md:w-full "
                    animate={{
                        x:[-10 ,10],
                        y: [-5, 0],
                        rotate: [-1, 1],
                    }}
                    transition={{
                        type: "tween",
                        ease: "easeInOut",
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: 0.2,
                      }}

                >
                    <Wave />
                </motion.div>
                <motion.div
                    id="left-wave"
                    className="absolute  md:z-40 z-10  top-[10%] -left-[20vw] md:-bottom-[5vh] md:-left-[5vw] md:w-full w-[200vw]"
                    animate={{
                        x:[10,-10],
                        y: [-5,  -5],
                        rotate: [-1,  1],
                    }}
                    transition={{
                        type: "tween",
                        ease: "easeInOut",
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: 0.5,
                      }}

                >
                    <Wave />
                </motion.div>      
                <motion.div
                    id="boat-below-wave"
                    className="absolute z-30 top-[2%]  md:-bottom-[15vh]  md:left-[10vw] left-[30vw] md:w-full w-[200vw]"
                    animate={{
                        x:[10,-10],
                        y: [-5,  -5],
                        rotate: [-1,  1],
                    }}
                    transition={{
                        type: "tween",
                        ease: "easeInOut",
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: 0.5,
                      }}

                >
                    <Wave />
                </motion.div>
            </div>
            <div className="clouds&crows relative w-screen h-fit pt-14">
                <div className="crows absolute z-10 top-0 py-32 left-0 w-full h-full">
                    <Crow className="md:h-[100px] md:m-0 ml-20 h-[75px]"/>
                </div>
                <div className="up-cloud flex justify-between relative  px-14 ">
                    <Cloud2 className=" md:relative absolute h-[7vh] right-15 top-0 md:h-[18vh] z-20"/>
                    <Cloud1 className=" md:relative absolute h-[7vh] right-0 top-15 md:top-0 md:h-[15vh] z-20"/>
                </div>
                <div className="down-cloud flex  justify-between px-36 ">
                    <Cloud1 className="md:relative md:top-0 absolute top-50 left-0 z-9  h-[7vh] md:h-[14vh]"/> 
                    <Cloud1 className="md:relative md:top-0 absolute top-60 left-18 z-9   h-[7vh] md:h-[14vh]"/> 
                </div>
            </div>
            <section className="howrah-bridge left-0 top-[48vh]  -mt-20 sm:-mt-40 md:mt-0  md:-top-5 absolute z-10 ">
                <Bridge className="md:h-screen md:w-full w-[150vw]  h-full "/>
            </section>
            <section className="boats absolute bottom-20 align-bottom bg-red-900 w-full flex justify-around">
            <motion.div
                className="absolute bottom-0 z-[15] left-[20vw] -translate-x-1/2"
                animate={{
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 3.5,
                  delay: 0.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
            >
                <Boat1 className="z-[15] bottom-0 md:visible invisible "/>
            </motion.div>
            <motion.div
                className="absolute z-[25] bottom-0  left-[55vw] -translate-x-1/2"
                animate={{
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
            >
                <Boat2 className="h-[60vh] w-[80vw] md:visible invisible"/>
            </motion.div>
            <motion.div
                className="absolute bottom-1 left-[80vw] -translate-x-1/2"
                animate={{
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
            >
                <Boat3 className=" scale-150 md:visible invisible "/>
            </motion.div>
            </section>
        </div>
    );
}