"use client";

//Swiper JS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { useEffect } from "react";

//Constants
import { EventData } from "constants/EventsData";
import { EventPhotos } from "public/EventsPhotos/EventsPhotos";

//Sass Styles
import "../../styles/events.scss";

//Card Component
import Card from "~/components/EventCard";

export default function EventPage() {
  const swiperRef = useRef<SwiperType | null>(null);

  function slideNext(): void {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }
  function slidePrev(): void {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
       <div
        className="min-h-screen relative  overflow-x-hidden bg-[#E3C7A1] mt-[5rem]"
        style={{
          backgroundImage: "url('assets/gallery/bg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat-y"
        }}
      >

      <div className="-z-10 absolute top-0 left-0 min-h-full w-full bg-[#E3C7A1]/80" />

      <div className="relative z-20 flex flex-col items-center justify-center text-black">
        <div className="m-2 flex h-[300px] w-[90%] items-start justify-center md:h-auto">
          {/* Desktop */}
          <div className="vertical-ball relative hidden h-[100px] w-[100px] md:my-16 md:block md:h-[150px] md:w-[150px]">
            <div className="ball1 absolute top-0 left-0 z-10 h-[180px] w-[180px] rounded-full">
              <img
                src={EventPhotos.ball1}
                className="h-full w-full rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="ball2 absolute top-0 left-0 z-10 h-[170px] w-[170px] rounded-full">
              <img
                src={EventPhotos.ball2}
                className="h-full w-full rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="ball3 absolute top-0 left-0 z-10 h-[160px] w-[160px] rounded-full bg-[#BA8120]">
              <img
                src={EventPhotos.ball3}
                className="h-full w-full rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="ball4 absolute top-0 left-0 z-10 h-[180px] w-[180px] rounded-full">
              <img
                src={EventPhotos.ball4}
                className="h-full w-full rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="ball5 absolute top-0 left-0 z-10 h-[170px] w-[170px] rounded-full">
              <img
                src={EventPhotos.ball5}
                className="h-full w-full rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="ball6 absolute top-0 left-0 z-10 h-[160px] w-[160px] rounded-full bg-[#E4C491] ">
              <img
                src={EventPhotos.ball6}
                className="h-full w-full rounded-full object-cover"
                alt=""
              />
            </div>

            <div className="absolute top-0 left-0 z-0 flex h-full w-full items-center justify-center">
              <h1 className="font-aprillia mx-auto mobile:text-3xl tablet:text-6xl laptop:text-8xl">Events</h1>
            </div>
          </div>

          {/* Mobile */}
          {/* <div className="flex flex-row gap-1 justify-center items-center w-full border-4 md:hidden">
            <div className="flex flex-col items-end justify-center">
              <div className="w-[100px] h-[100px] rounded-full bg-blue-500 absolute top-0 mt-4 mx-[-10px]"></div>
              <div className="w-[100px] h-[100px] rounded-full bg-red-500 absolute top-0 mt-4 mx-[-10px]"></div>
              <div className="w-[100px] h-[100px] rounded-full bg-pink-500 absolute top-0 mt-4 mx-[-10px]"></div>
            </div>
            <h1 className="text-4xl font-bold text-center">Events</h1>
            <div className="flex flex-col items-baseline justify-center">
              <div className="w-[100px] h-[100px] rounded-full bg-green-500 absolute top-0 mt-4 mx-[-10px]"></div>
              <div className="w-[100px] h-[100px] rounded-full bg-yellow-500 absolute top-0 mt-4 mx-[-10px]"></div>
              <div className="w-[100px] h-[100px] rounded-full bg-purple-500 absolute top-0 mt-4 mx-[-10px]"></div>
            </div>
          </div> */}

          <div className="flex h-[100%] w-full justify-between md:hidden">
            <div className="flex w-[30%] flex-col items-center">
              <div className="absolute mt-6 h-[80px] w-[80px] rounded-full bg-blue-800">
                <img
                  src={EventPhotos.ball1}
                  className="h-full w-full rounded-full object-cover"
                  alt=""
                />
              </div>
              <div className="drop-animate2 absolute mt-6 h-[100px] w-[100px] rounded-full bg-green-800">
                <img
                  src={EventPhotos.ball2}
                  className="h-full w-full rounded-full object-cover"
                  alt=""
                />
              </div>
              <div className="drop-animate3 absolute mt-6 h-[120px] w-[120px] rounded-full bg-[#BA8120]">
                <img
                  src={EventPhotos.ball3}
                  className="h-full w-full rounded-full object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <h1 className="font-aprillia mx-auto mobile:text-5xl tablet:text-6xl laptop:text-8xl translate-y-[1.5rem]">Events</h1>
            </div>

            <div className="flex w-[30%] flex-col items-center">
              <div className="absolute mt-6 h-[80px] w-[80px] rounded-full bg-blue-800">
                <img
                  src={EventPhotos.ball4}
                  className="h-full w-full rounded-full object-cover"
                  alt=""
                />
              </div>
              <div className="drop-animate2 absolute mt-6 h-[100px] w-[100px] rounded-full bg-green-800">
                <img
                  src={EventPhotos.ball5}
                  className="h-full w-full rounded-full object-cover"
                  alt=""
                />
              </div>
              <div className="drop-animate3 absolute mt-6 h-[120px] w-[120px] rounded-full bg-[#E4C491] ">
                <img
                  src={EventPhotos.ball6}
                  className="h-full w-full rounded-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-auto w-full items-center justify-center">
          {/* <div className="h-auto w-[90%] border-4 border-red-800 my-4 flex flex-col gap-10 md:hidden">
            {EventData.map((event, index) => (
              <Card data={event} />
            ))}
          </div> */}
          <div className="my-0 h-auto w-[90%] gap-10 md:flex">
            <Swiper
              modules={[Navigation]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              navigation={false}
              // direction="vertical"
              // spaceBetween={30}
              // slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={1200}
              className="custom-swiper w-full"
            >
              {EventData.map((event) => (
                <SwiperSlide key={event.title}>
                  <Card data={event} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="flex h-auto w-full justify-center gap-26 p-6 md:gap-52">
        <div className="flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={() => swiperRef.current && slidePrev()}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(125,46,46,1)] p-2 cursor-pointer"
          >
            <img
              src={EventPhotos.navButton}
              className="mr-2 h-8 w-8"
              alt="Prev"
            />
          </button>

          <h2 className="text-3xl">আগে</h2>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={() => swiperRef.current && slideNext()}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(125,46,46,1)] p-2 cursor-pointer"
          >
            <img
              src={EventPhotos.navButton}
              className="ml-2 h-8 w-8 rotate-180"
              alt="Next"
            />
          </button>

          <h2 className="text-3xl">পরে</h2>
        </div>
      </div>
    </div>
  );
}
