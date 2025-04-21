import Link from 'next/link';

function NavbarDesktop() {
  return (
    <nav className="fixed hidden left-0 top-0 z-[100000000000]  h-[100px] w-full bg-[#7D2E2E] font-custom-script text-white md:block md:h-[110px]">
      {/* Left Logo */}
      <div className="absolute left-0 top-0 h-[32px] w-[50px] bg-[url(https://res.cloudinary.com/dffke2hbp/image/upload/v1744127526/m8fz3kfdgf3wabfx2ak7.png)] bg-contain bg-no-repeat md:h-[43px] md:w-[67px]" />

      {/* Central Decoration */}
      <div className="absolute left-4 top-13 flex -translate-y-1/2 items-center gap-4 md:left-8">
        <div className="ml-[2rem] flex flex-col-reverse items-center justify-center md:ml-[4rem]">
          <img
            src="https://res.cloudinary.com/dffke2hbp/image/upload/v1744125791/v5xjkjkn1jbwn628artx.png"
            alt="Cultural Motif"
            className="mt-[-1rem] h-[48px] w-[80px] md:mt-[-2rem] md:h-[72px] md:w-[120px]"
          />
          <img
            src="https://res.cloudinary.com/dffke2hbp/image/upload/v1744126091/uy5knxz37ossww6qprev.png"
            alt="Butterfly Element"
            className="ml-[3rem] h-[32px] w-[32px] md:ml-[6rem] md:h-[48px] md:w-[48px]"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="absolute left-[50%]  top-11 flex -translate-x-[50%] gap-4 font-aprillia text-base md:translate-x-0 md:gap-8 md:text-2xl lg:gap-8 lg:text-3xl xl:gap-13 xl:text-4xl 2xl:gap-16 2xl:text-4xl">
        <Link href="/">Home</Link>
        <Link href="/artist">Artist</Link>
        <Link href="/events">Events</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/team">Team</Link>
      </div>


      <div className="absolute right-0 top-0 h-20 w-20 bg-[url(/right-floral.png)] bg-contain bg-no-repeat md:h-32 md:w-32" />


      <div className="absolute bottom-0 h-3 w-full bg-[url(/diya-pattern.svg)] bg-repeat-x md:h-4" />

      {/* Right Logo */}
      <div className="absolute right-0 top-0 h-[32px] w-[50px] bg-[url(https://res.cloudinary.com/dffke2hbp/image/upload/v1744127526/m8fz3kfdgf3wabfx2ak7.png)] bg-contain bg-no-repeat md:h-[43px] md:w-[67px]" />

      {/* Lower Design Element */}
      <div>
        <img
          src="https://res.cloudinary.com/dffke2hbp/image/upload/v1744132507/kjub35yz1fbf5mnlx31i.png"
          alt="Design Lower"
          className="mt-[3rem] w-full md:mt-[6.1rem] lg:mt-[5.9rem] xl:mt-[5.8rem] 2xl:mt-[5.7rem]"
        />
      </div>
    </nav>
  );
}

export default NavbarDesktop;
