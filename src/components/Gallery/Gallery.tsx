'use client';
import { useState } from "react";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import { useMediaQuery } from "react-responsive";

const images = [
  { id: 1, name: "", image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745128661/Oikyotaan25/0a7b7f00-9e5a-4aa0-950d-e9394535b210.png" },
  { id: 2, name: "", image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745128715/Oikyotaan25/d2cd1969-0f67-4a21-a0f9-c966c783999b.png" },
  { id: 3, name: "", image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745128757/Oikyotaan25/4f67a2d7-8fa9-4148-9c18-66aa35fc050f.png" },
  { id: 4, name: "", image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745128747/Oikyotaan25/a2883522-bf8d-40ff-9f7d-462e25f7bf4d.png" },
  { id: 1, name: "", image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745128806/Oikyotaan25/c213fa2f-6739-43d1-9c35-c38d76640ebe.png" },
  { id: 2, name: "", image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745128918/Oikyotaan25/a6742faa-abbc-4284-8392-db131fcd134f.png" },
  { id: 3, name: "", image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745129023/Oikyotaan25/Screenshot_2025-04-20_113321_kpoctq.png" },
  { id: 4, name: "", image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745129149/Oikyotaan25/57637d41-b9c1-461f-9c43-50f282a77176.png" },
  { id: 1, name: "", image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745129387/Oikyotaan25/98eb3bf0-6bf3-405c-9576-47170e233835.png" },
  { id: 2, name: "", image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745129417/Oikyotaan25/6ddfa325-4421-4a58-96bc-126af29251fb.png" },
  { id: 2, name: "", image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745129522/Oikyotaan25/21da568c-7f6f-43d7-86b4-3b49bc593f64.png" },
  { id: 3, name: "", image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745129284/Oikyotaan25/d3866417-738a-45a8-85a2-dc6cf57c000d.png" },
  { id: 4, name: "", image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745129199/Oikyotaan25/993fab35-564f-4101-a3a4-df17863f7735.png" },
  { id: 1, name: "", image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745129362/Oikyotaan25/67410f7c-c308-4a28-bab7-38ca5aef0c22.png" },
  { id: 3, name: "", image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745129536/Oikyotaan25/3ba63e3d-cdcc-43a1-8fec-332b62b93485.png" },
  { id: 4, name: "", image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1745129590/Oikyotaan25/40ff8a70-85e0-480f-a105-d572600dcec1.png" },
];



const Gallery: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <>
      <style>{`
        @keyframes horizontal1 {
          0%, 100% { transform: translateX(0); }
          50% { transform: ${isTablet ? 'translateX(-30px)' : 'translateX(-50px)'}; }
        }
        @keyframes horizontal2 {
          0%, 100% { transform: translateX(0); }
          50% { transform: ${isTablet ? 'translateX(-30px)' : 'translateX(-50px)'}; }
        }
        .animate-horizontal1 {
          animation: horizontal1 5s ease-out infinite;
        }
        .animate-horizontal2 {
          animation: horizontal2 4s ease-in-out infinite;
        }
      `}</style>

      <div
        className="min-h-screen  overflow-hidden bg-[#E3C7A1] flex flex-col items-center justify-center mt-[5rem] "
        style={{
          backgroundImage: "url('assets/gallery/bg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat-y"
        }}
      >
        <img src="/assets/gallery/img1.png" alt="" className="absolute mobile:h-[40vw] laptop:h-[25rem] mobile:top-[13%] tablet:top-[18%] laptop:top-[14%] left-[-2%] md:left-[2%]" />

        <div >
          <h1 className="relative font-aprillia mx-auto mobile:text-3xl tablet:text-6xl laptop:text-8xl z-20 mobile:translate-y-[220%] tablet:translate-y-[240%] ipad:translate-y-[300%] laptop:translate-y-[220%]">Photo Gallery</h1>
          <img
            src="/assets/gallery/img2.png"
            alt=""
            className="absolute mobile:h-[32vw] laptop:h-[40%] laptop:top-[16%] left-[50%] -translate-x-[50%]"
          />
        </div>

        <div className="absolute mobile:w-[32vw] mobile:h-[32vh] laptop:w-[42vh] laptop:h-[42vh] mobile:top-[15%] tablet:top-[21%] laptop:top-[16%] right-0">
          <img
            src="/assets/gallery/grp1.png"
            alt="Art Right 1"
            className="absolute top-0 left-[42%] md:left-[20%] -translate-x-1/2 z-10"
          />
        </div>
        :
        <div className="mobile:h-[25vh] tablet:h-[40vh] laptop:h-[55vh] ipad:h-[45vh]" />

        <div className="relative flex h-[400px] w-screen-md scale-100 items-center justify-center ipadair:scale-50 xl:scale-100 z-10 mb-10">
          {images.map((img, index) => {
            const position = (index - current + images.length) % images.length;
            let styles: React.CSSProperties = {};

            if (position === 0) {
              styles = {
                transform: `scale(1) ${isTablet ? 'rotate(5deg)' : 'rotate(-10deg) translateX(-24vw)'}`,
                zIndex: 10,
                opacity: 1,
              };
            } else if (position === 1 && typeof window !== 'undefined' && window.innerWidth > 1200) {
              styles = {
                transform: "scale(1) rotate(10deg) translateX(24vw)",
                zIndex: 5,
                opacity: 1,
              };
            } else {
              styles = {
                transform: "scale(1) rotate(0deg) translateY(200vw) translateX(0vw)",
                zIndex: 0,
                opacity: 0,
              };
            }

            return (
              <div
                key={index}
                className="absolute transition-all duration-1000 ease-in-out"
                style={styles}
              >
                <div className="mobile:h-[50vw] mobile:w-[70vw] tablet:h-[37vw] tablet:w-[50vw] laptop:h-[48vh] laptop:w-[64vh] bg-[url('/assets/gallery/img7.png')] bg-contain bg-center mobile:px-7 tablet:px-9 laptop:px-11.5 items-center justify-center flex overflow-hidden">
                  <img src={img.image} alt="" className="object-contain mobile:h-[46vw] tablet:h-[33vw] laptop:h-[42vh]"/>
                </div>
                <img
                  src="/assets/gallery/Group.png"
                  alt=""
                  className="relative mobile:h-[6.5rem] tablet:h-[10rem] ipad:h-[12rem] mx-auto mobile:-translate-y-[1.5rem] tablet:-translate-y-[3.2rem] -z-10"
                />
              </div>
            );
          })}
        </div>

        <div className="gap-x-[4vw] flex items-center justify-center mt-[2vh] z-[1000]">
          <button
            type="button"
            onClick={handlePrev}
            className="z-10 mx-2 h-[7vh] w-[7vh] rounded-full bg-[#7D2E2E] px-[2px] text-[6vh] text-[#F3CA4E] cursor-pointer"
          >
            <GoTriangleLeft />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="z-10 mx-2 h-[7vh] w-[7vh] rounded-full bg-[#7D2E2E] px-[6px] text-[6vh] text-[#F3CA4E] cursor-pointer"
          >
            <GoTriangleRight />
          </button>
        </div>

        <div className="mobile:-translate-y-[13rem] tablet:-translate-y-[10rem] laptop:-translate-y-[7rem] relative z-10">
          <img src="/assets/gallery/grp2.png" alt=""
            className="scale-125 laptop:scale-100" />
          <img
            src="/assets/gallery/grp3.png"
            alt=""
            className="absolute top-0 laptop:top-[2rem] mobile:scale-125 laptop:scale-100 mobile:-left-[4rem] tablet:-left-[8rem] laptop:-left-[16rem] w-full z-30 animate-horizontal2"
          />
          <img
            src="/assets/gallery/grp4.png"
            alt=""
            className="absolute top-0 laptop:top-[4rem] laptop:left-[4.5rem] w-[150%] mobile:scale-140 laptop:scale-120 z-30 animate-horizontal1"
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;