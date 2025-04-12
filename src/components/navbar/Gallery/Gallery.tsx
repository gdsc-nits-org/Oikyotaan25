'use client';
import { useState } from "react";
import type { FC } from "react";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";

const images = [
  { id: 1, name: "", image: "/assets/gallery/img6.png" },
  { id: 2, name: "", image: "/assets/gallery/img6.png" },
  { id: 3, name: "", image: "/assets/gallery/img6.png" },
  { id: 4, name: "", image: "/assets/gallery/img6.png" },
];

const Gallery: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <style>{`
        @keyframes horizontal1 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(50px); }
        }
        @keyframes horizontal2 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-50px); }
        }
        .animate-horizontal1 {
          animation: horizontal1 5s ease-out infinite;
        }
        .animate-horizontal2 {
          animation: horizontal2 4s ease-in-out infinite;
        }
      `}</style>

      <div
        className="min-h-screen h-max overflow-hidden bg-[#E3C7A1] flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('assets/gallery/bg.png')",
          backgroundSize: "contain",
          backgroundRepeat: "repeat-y"
        }}
      >
        <img src="/assets/gallery/img1.png" alt="" className="absolute h-[50%] top-[11%] left-[2%]" />

        <div className="h-[69%]">
          <h1 className="relative font-aprillia text-8xl z-10 translate-y-[220%]">Photo Gallery</h1>
          <img
            src="/assets/gallery/img2.png"
            alt=""
            className="absolute h-[40%] top-[16%] left-[50%] -translate-x-[50%]"
          />
        </div>

        <div className="absolute w-[42vh] h-[42vh] top-[13%] right-0">
          <img
            src="/assets/gallery/grp1.png"
            alt="Art Right 1"
            className="absolute top-0 left-[20%] -translate-x-1/2 z-10"
          />
        </div>

        <div className="h-[55vh]" />

        <div className="relative flex h-[400px] w-screen-md scale-100 items-center justify-center ipadair:scale-50 xl:scale-100 4k:h-[1200px] z-10 mb-10">
          {images.map((img, index) => {
            const position = (index - current + images.length) % images.length;
            let styles: React.CSSProperties = {};

            if (position === 0) {
              styles = {
                transform: "scale(1) rotate(-10deg) translateX(-24vw)",
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
                key={img.id}
                className="absolute transition-all duration-1000 ease-in-out mobile:top-20 4k:top-52"
                style={styles}
              >
                <div className="h-[47vh] w-[64vh] bg-[url('/assets/gallery/img7.png')] bg-contain bg-center px-11 py-9.5">
                  <img src={img.image} alt="" />
                </div>
                <img
                  src="/assets/gallery/Group.png"
                  alt=""
                  className="relative h-[12rem] mx-auto -translate-y-[3.2rem] -z-10"
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

        <div className="-translate-y-[7rem] relative z-10">
          <img src="/assets/gallery/grp2.png" alt="" />
          <img
            src="/assets/gallery/grp3.png"
            alt=""
            className="absolute top-[2rem] -left-[16rem] w-full z-30 animate-horizontal2"
          />
          <img
            src="/assets/gallery/grp4.png"
            alt=""
            className="absolute top-[4rem] left-[4.5rem] w-[150%] scale-120 z-30 animate-horizontal1"
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
