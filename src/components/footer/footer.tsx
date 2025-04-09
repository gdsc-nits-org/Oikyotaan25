import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
export default function Footer() {
    return (
        <div>

            <div className="w-full h-[40px] absolute bottom-[64%] left-0 z-10 sm:bottom-[70%] sm:h-[60px]">
                <img
                    src="/assets/footer/pattern1.png"
                    alt="Pattern"
                    className="w-full h-full object-cover"
                />
            </div>
            <footer className="bg-[#7D2E2E] h-[65%] w-full text-white py-4 absolute bottom-0 overflow-hidden sm:h-[70%]">
                <div
                    className=" h-[92%]  w-full absolute bottom-[48px]"
                    style={{
                        backgroundImage: `url('/assets/footer/dhanbg.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div>
                        <img
                            src="/assets/footer/decor.png"
                            alt="Decorative"
                            className="h-10 sm:h-15 sm:w-30"
                        />
                        <img
                            src="/assets/footer/decor.png"
                            alt="Decorative"
                            className="h-10 sm:h-15 sm:w-30 absolute right-0 top-0" 
                        />

                        <div className="flex flex-row items-start  justify-center w-full h-50 absolute top-[-15px] left-5">
                            <img
                                src="/assets/footer/oikyotaan.png"
                                alt="Oikyotaan Logo"
                                className="sm:h-50 sm:w-70 h-30 w-50 absolute top-10 sm:absolute sm:top-0 "  
                            />
                        </div>
                        <div className="absolute sm:right-[-10px] right-[-50] sm:top-20 top-40 sm:h-60 sm:w-80 h-[15%] w-[40%]">
    <img
        src="/assets/footer/boat.png"
        alt="Boat"
        className="h-full w-full object-contain"
    />
</div>
<div className="absolute sm:left-[-9%] left-[-70] sm:top-60 top-100 sm:h-60 sm:w-80 h-[15%] w-[40%] rotate-y-190 rotate-x-10">
    <img
        src="/assets/footer/boat.png"
        alt="Boat"
        className="h-full w-full object-contain"
    />
</div>
                        {/* <div className="absolute sm:left-[-235px] top-70 rotate-y-190 rotate-x-10 h-60 w-80"><img src="/assets/footer/boat.png"/></div> */}

                        <div className="sm:h-[30%] sm:w-[70%] h-[40%] w-[70%] absolute sm:top-50  top-50 left-20  sm:left-60 flex flex-row items-center justify-between flex-wrap text-md sm:text-2xl font-normal text-[#F5E3C3]"> 
                            <div className="sm:px-10 px-1 left-[20%] flex flex-row items-center justify-between text-xl sm:text-2xl">
                                <IoLocationOutline className="mr-2" /> NIT Silchar, Assam, India
                            </div>
                            <div className="sm:px-10 px-1 flex flex-row items-center justify-between">
                                PIN-788010
                            </div>
                            <div className="sm:px-10 px-1 flex flex-row items-center justify-between">
                                <FaFacebookSquare className="mr-2" /> Facebook
                            </div>
                            <div className="sm:px-10 px-1 flex flex-row items-center justify-between">
                                <FaPhoneAlt className="mr-2" /> 03842-228479
                            </div>
                            <div className="sm:px-10 px-1 flex flex-row items-center justify-between">
                                <FaInstagram className="mr-2" /> Instagram
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute sm:bottom-[15%] sm:left-[31%] bottom-[10%] left-[20%] h-[15%] w-[65%] sm:h-[12%] sm:w-[40%]">
    <img
        src="/assets/footer/gdgc.png"
        alt="GDGC Logo"
        className="h-full w-full object-contain"
    />
</div>
                <div className="bg-[#1311119C] w-full h-[10%] text-[#F5E3C3] flex flex-row items-center justify-center sm:text-2xl font-thin absolute bottom-0">
                    All Rights Reserved ©Oikyotaan, NIT Silchar
                </div>
            </footer>
        </div>
    );
}