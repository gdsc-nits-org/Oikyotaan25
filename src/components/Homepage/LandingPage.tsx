"use client";
import { Wave} from "./svgs/wave";
import { motion } from "framer-motion";
import { Bridge } from "./svgs/howrahBridge";
import { Cloud1, Cloud2 } from "./svgs/cloud";
import { Crow } from "./svgs/crows";
import { Boat1, Boat2, Boat3 } from "./svgs/boats";

export default function LandingPage() {
    return (
        <div className="relative w-full flex flex-col  items-center overflow-hidden h-screen bg-gradient-to-b from-[#6ADADA] via-[#FEE6BA] to-[#326BFB]">

            <div className="water-waves absolute w-full h-full ">
            <motion.div
                className="absolute z-10  -bottom-[5vh] left-[5vw]  w-full"
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
                className="absolute z-20  -bottom-[5vh] -left-[30vw]  w-full "
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
                className="absolute z-40  -bottom-[5vh] -left-[5vw] w-full"
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
                className="absolute z-30 -bottom-[5vh] left-[10vw]  w-full"
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
                <div className="crows absolute top-0 py-32 left-0 w-full h-full">
                    <Crow className="h-[100px]"/>
                </div>
                <div className="up-cloud flex justify-between px-14 ">
                    <Cloud2 className="  h-[18vh] z-20"/>
                    <Cloud1 className="  h-[15vh] z-20"/>
                </div>
                <div className="down-cloud flex justify-between px-36 ">
                    <Cloud1 className=" right-0 z-20 h-[14vh]"/> 
                    <Cloud1 className=" right-0 z-20 h-[14vh]"/> 
                </div>
            </div>
            <div className="howrah-bridge -top-5 absolute z-10 ">
            <Bridge className="h-screen"/>
            </div>
            <div className="boats absolute bottom-20 align-bottom bg-red-900 w-full flex justify-around">
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
                <Boat1 className="z-[15] bottom-0"/>
            </motion.div>
            <motion.div
                className="absolute z-[35] bottom-0 left-[55vw] -translate-x-1/2"
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
                <Boat2 className="h-[60vh]"/>
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
                <Boat3 className=" scale-150 "/>
            </motion.div>
            </div>
        </div>
    );
}