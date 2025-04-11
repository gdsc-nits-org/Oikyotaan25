
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="relative w-full bg-[#E3C7A1]">
            <div className="z-10 h-[30px] w-full sm:h-[48px]">
                <img
                    src="/assets/footer/pattern1.png"
                    alt="Pattern"
                    className="h-full w-full object-cover"
                />
            </div>
            <footer className="relative bottom-0 w-full overflow-hidden bg-[#7D2E2E] py-3 text-white sm:h-auto" style={{backgroundImage: "url('/assets/footer/dhanbg.png')", backgroundPosition: "center", backgroundSize: "cover"}}>
                <div>
                    <div>
                        <img
                            src="/assets/footer/decor.png"
                            alt="Decorative"
                            className="relative top-[-12px] left-0 h-8 sm:h-12 sm:w-24"
                        />
                        <img
                            src="/assets/footer/decor.png"
                            alt="Decorative"
                            className="absolute top-0 right-0 h-8 sm:h-12 sm:w-24"
                        />

                        <div className="relative top-0 flex h-40 w-full flex-row items-start justify-center sm:top-[-40px]">
                            <img
                                src="/assets/footer/oikyotaan.png"
                                alt="Oikyotaan Logo"
                                className="mt-3 h-24 w-40 sm:mt-0 sm:h-40 sm:w-56"
                            />
                        </div>

                        <div className="absolute top-32 right-[-40px] h-[12%] w-[32%] sm:top-16 sm:right-[-8px] sm:h-48 sm:w-64">
                            <img
                                src="/assets/footer/boat.png"
                                alt="Boat"
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <div className="absolute top-80 left-[-56px] h-[12%] w-[32%] rotate-x-10 rotate-y-190 sm:top-72 sm:left-[-7%] sm:h-48 sm:w-64">
                            <img
                                src="/assets/footer/boat.png"
                                alt="Boat"
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <div className="relative top-[-30px] mx-auto mt-8 flex h-24 w-[60%] flex-row flex-wrap items-center justify-between font-normal text-[#F5E3C3] text-sm sm:relative sm:top-[-24px] sm:h-24 sm:w-[50%] sm:text-xl">
                            <div className="flex flex-row items-center px-1 text-lg sm:px-8 sm:text-xl">
                                <IoLocationOutline className="mr-2" /> NIT
                                Silchar, Assam, India
                            </div>
                            <div className="px-1 sm:px-8">PIN-788010</div>
                            <div className="flex flex-row items-center px-1 sm:px-8">
                                <FaFacebookSquare className="mr-2" /> Facebook
                            </div>
                            <div className="flex flex-row items-center px-1 sm:px-8">
                                <FaPhoneAlt className="mr-2" /> 03842-228479
                            </div>
                            <div className="flex flex-row items-center px-1 sm:px-8">
                                <FaInstagram className="mr-2" /> Instagram
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto my-8 h-[12%] w-[55%] sm:my-12 sm:h-[10%] sm:w-[32%]">
                    <img
                        src="/assets/footer/gdgc.png"
                        alt="GDGC Logo"
                        className="h-full w-full object-contain"
                    />
                </div>

                <div className="absolute bottom-0 flex h-[8%] w-full flex-row items-center justify-center bg-[#1311119C] font-thin text-[#F5E3C3] sm:text-xl">
                    All Rights Reserved ©Oikyotaan, NIT Silchar
                </div>
            </footer>
        </div>
    );
}
