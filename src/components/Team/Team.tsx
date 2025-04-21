'use client';
import TeamMemberCard from '~/components/Team/TeamMemberCard'
import teamMembers from "../../../public/assets/data/team.json"
const Team = () => {
    const Tech = teamMembers.filter((member) => member.designation === "Tech");
    const Core = teamMembers.filter((member) => member.designation === "Core");
    return (
        <>
            <div className="bg-[url('/assets/team/bg-team.png')] bg-[#E3C7A1] bg-fixed bg-cover bg-center min-h-screen flex flex-col  ">
                {/* the upper bar */}
                <div className="flex  items-center justify-center laptop:mt-[7rem] mobile:mt-[6rem] md:mt-[7rem] ">
                    <img src="/assets/team/bar1.png" alt="a bar" className="laptop:h-[2.6rem] tablet:h-[2rem] mobile:h-[1.5rem] " />
                </div>
                {/* -----------------the headline with the horse part ----------------*/}
                <div className="flex flex-row items-center justify-center">
                    <div className="flex items-center justify-center">
                        <img src="/assets/team/pic1.png" alt="left horse" className="mobile:h-[40vw] laptop:h-[25rem]" />
                    </div>
                    <div className="flex flex-col items-center justify-center laptop:h-auto">
                        <h1 className="relative flex laptop:flex-row mobile:flex-col ipad:flex-col laptop:gap-7 ">
                            <span className="relative font-aprillia mx-auto mobile:text-3xl tablet:text-6xl laptop:text-8xl z-20 ">The</span>
                            <span className="relative font-aprillia mx-auto mobile:text-3xl tablet:text-6xl laptop:text-8xl z-20 ">Oikyotaan</span>
                        </h1>
                        <h1 className="relative font-aprillia mx-auto mobile:text-3xl tablet:text-6xl laptop:text-8xl z-20 ">Team</h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/assets/team/pic2.png" alt="right horse" className="mobile:h-[40vw] laptop:h-[25rem]" />
                    </div>
                </div>

                {/*----------------the rope 1 ----------------*/}

                <div className="flex flex-row items-end justify-center">
                    <div className="flex items-center justify-center">
                        <img src="/assets/team/rope-left.png" alt="left rope" className="mobile:h-[5rem] laptop:h-[20rem] tablet:h-[15rem] md:h-[15rem] sm:h-[9rem] lg:h-[20rem]" />
                    </div>
                    <div className="flex items-end laptop:w-[20rem] tablet:w-[19rem] mobile:w-[10rem] laptop:h-[6rem] tablet:h-[5rem] mobile:h-[3rem] ">
                        <div className="w-full h-full bg-[url('/assets/team/title-box.png')] bg-cover bg-center flex self-end items-center justify-center">
                            <h1 className="relative font-aprillia mobile:text-2xl tablet:text-5xl laptop:text-6xl  text-[#F3CA4E] text-center laptop:pt-7 tablet:pt-7 mobile:pt-4">Tech</h1>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/assets/team/rope-right.png" alt="right rope" className="mobile:h-[5rem] laptop:h-[20rem]  ipad:h-[15rem] md:h-[15rem] sm:h-[9rem] lg:h-[20rem]" />
                    </div>
                </div>

                {/*--------------- the lower bar -----------------*/}

                {/*-------------- core team name cards(desktop view)-------------------- */}
                <div className="hidden tablet:flex justify-center items-center laptop:gap-28 p-10 tablet:gap-4 flex-wrap ">
                    {Tech[0]?.members.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            image={member.photo}
                            name={member.name}
                            designation={member.designation}
                            instagram={member?.insta}
                            facebook={member?.fb}
                            git={member?.git}
                        />
                    ))}
                </div>
                {/*--------------core team members(mobile view)--------- */}
                <div className="laptop:hidden tablet:hidden flex flex-col justify-center items-center overflow-hidden gap-4">
                    {Tech[0]?.members.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            image={member.photo}
                            name={member.name}
                            designation={member.designation}
                            instagram={member?.insta}
                            facebook={member?.fb}
                            git={member?.git}
                        />
                    ))}

                </div>
                {/*----------------the rope 2 ----------------*/}

                <div className="flex flex-row items-end justify-center">
                    <div className="flex items-center justify-center">
                        <img src="/assets/team/rope-left.png" alt="left rope" className="mobile:h-[5rem] laptop:h-[20rem] tablet:h-[15rem] md:h-[15rem] sm:h-[9rem] lg:h-[20rem]" />
                    </div>
                    <div className="flex items-end laptop:w-[20rem] tablet:w-[19rem] mobile:w-[10rem] laptop:h-[6rem] tablet:h-[5rem] mobile:h-[3rem] ">
                        <div className="w-full h-full bg-[url('/assets/team/title-box.png')] bg-cover bg-center flex self-end items-center justify-center">
                            <h1 className="relative font-aprillia mobile:text-2xl tablet:text-5xl laptop:text-7xl  text-[#F3CA4E] text-center laptop:pt-7 tablet:pt-7 mobile:pt-4">Core</h1>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/assets/team/rope-right.png" alt="right rope" className="mobile:h-[5rem] laptop:h-[20rem]  ipad:h-[15rem] md:h-[15rem] sm:h-[9rem] lg:h-[20rem]" />
                    </div>
                </div>

                {/*-------------- tech team name cards(desktop view)-------------------- */}
                <div className="hidden tablet:flex justify-center items-center laptop:gap-28 p-10 tablet:gap-4 flex-wrap ">
                    {Core[0]?.members.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            image={member.photo}
                            name={member.name}
                            designation={member.designation}
                            instagram={member?.insta}
                            facebook={member?.fb}
                            git={member?.git}
                        />
                    ))}
                </div>
                {/*--------------tech team members(mobile view)--------- */}
                <div className="laptop:hidden tablet:hidden flex flex-col justify-center items-center overflow-hidden gap-4">
                    {Core[0]?.members.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            image={member.photo}
                            name={member.name}
                            designation={member.designation}
                            instagram={member?.insta}
                            facebook={member?.fb}
                            git={member?.git}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Team;

