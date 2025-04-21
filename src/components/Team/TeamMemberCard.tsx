'use client';
import React from 'react'
import { FaInstagram, FaFacebookF, FaGithub } from 'react-icons/fa';
type TeamMemberCardProps = {
    image?: string;
    name?: string;
    designation?: string;
    instagram?: string;
    facebook?: string;
    git?: string;
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
    image,
    name,
    designation,
    instagram,
    facebook,
    git,
}) => {
    return (
        <div className=" group flex justify-center items-center lg:w-[300px] lg:h-[400px] laptop:w-[300px] laptop:h-[400px] tablet:w-[180px] tablet:h-[360px] md:w-[250px] md:h-[350px]  bg-[url('/assets/team/card-bg-before.png')] bg-cover bg-center mix-blend-normal  hover:bg-[url('/assets/team/card-bg-after.png')]  overflow-hidden relative transition-all duration-300  hover:scale-[1.02] cursor-pointer  mobile:w-[320px] mobile:h-[420px] mobile:my-3">
            <div className="flex flex-col laptop:gap-0 laptop:group-hover:gap-4 tablet:gap-0 tablet:group-hover:gap-4 mobile:gap-6 mobile:group-hover:gap-4 justify-center items-center laptop:h-[86%] laptop:w-[85%]">
                {/* Profile Image */}
                <div className="laptop:h-[85%] laptop:w-[85%] tablet:h-[65%] tablet:w-[70%] mobile:w-[70%] mobile:h-[30%] lg:translate-y-4   tablet:pt-0 mobile:pt-3 overflow-hidden group-hover:rounded-full group-hover:scale-[.85] ">
                    <img
                        src={image}
                        alt={name}
                        className="w-[15rem] h-[15rem] transition-transform duration-300 overflow-hidden"
                    />
                </div>

                {/* Name & Designation */}
                <div className="flex flex-col jitems-center laptop:py-2  tablet:pt-8 mobile:py-2 mobile:group-hover:py-3 text-center mixed-blend-normal ">
                    <h3 className="text-[1.7rem] text-[#FFFFFF] font-semibold font-puritan text-nowrap">{name}</h3>
                    <p className="text-lg text-[#F3Ca4E] font-puritan">{designation}</p>
                    <div className="hidden group-hover:flex justify-center gap-4 mt-2">
                        {instagram && (
                            <a href={instagram} target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-white text-2xl hover:text-[#E1306C] transition" />
                            </a>
                        )}
                        {facebook && (
                            <a href={facebook} target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="text-white text-2xl hover:text-[#1877F2] transition" />
                            </a>
                        )}
                        {git && (
                            <a href={git} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-white text-2xl hover:text-[#0A66C2] transition" />
                            </a>
                        )}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default TeamMemberCard;
