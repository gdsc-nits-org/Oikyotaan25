"use client";
import { useEffect, useState } from 'react';
import styles from "../styles/loader.module.scss";

const Loader = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);


  const LOADER_DURATION = 3000;
  const FADE_DURATION = 500;

  useEffect(() => {
    setIsMounted(true);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflow = originalOverflow;
    }, LOADER_DURATION);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);


  return (
    <>
      {/* Loading Screen */}
      <div
        aria-hidden={isLoaded}
        className={`
          fixed inset-0 h-screen w-full z-50
          ${styles.loaderBase}
          ${isMounted ? styles.animatePageSlideUp : ''}
          ${isLoaded ? styles.animatePageSlideDown : ''}
        `}
      >
        <div className="relative h-full w-full bg-[#7D2E2E] bg-[url(https://res.cloudinary.com/dffke2hbp/image/upload/v1744984951/nexo7atbwcy6aaf2ixxw.svg)] bg-contain bg-no-repeat bg-cover overflow-hidden">
          <div className="absolute right-[2rem] top-[18rem] flex -translate-y-1/2 items-center gap-4 lg:left-140">
            <div className="ml-[-22rem] flex flex-col-reverse items-center justify-center sm:ml-[-30rem] md:ml-[-35rem] lg:ml-[-13rem] xl:ml-[-8rem] 2xl:ml-[-3rem]">
              <img
                src="https://res.cloudinary.com/dffke2hbp/image/upload/v1744984156/d8kwj1po4rzxqk0vgl8i.png"
                alt="Cultural Motif"
                className="mt-[-4.6rem] h-[160px] w-[250px]
                  sm:mt-[-6rem] sm:h-[200px] sm:w-[340px] ml-[1.5rem]
                  md:mt-[-6rem] md:h-[200px] md:w-[340px] sm:ml-0
                  lg:mt-[-7.5rem] lg:h-[250px] lg:w-[400px]
                  xl:mt-[-9rem] xl:h-[300px] xl:w-[500px]
                  2xl:mt-[-10rem] 2xl:h-[340px] 2xl:w-[565px]"
              />
              <img
                src="https://res.cloudinary.com/dffke2hbp/image/upload/v1744984208/flccko9az6qcmzdg678y.png"
                alt="Butterfly Element"
                className="ml-[3rem] h-[60px] w-[60px] 
                sm:ml-[10rem] sm:h-[70px] sm:w-[70px] 
                md:ml-[11rem] md:h-[80px] md:w-[80px]
                lg:ml-[12rem] lg:h-[80px] lg:w-[80px]
                xl:ml-[14rem] xl:h-[110px] xl:w-[110px]
                2xl:ml-[15rem] 2xl:h-[120px] 2xl:w-[120px]"
              />
            </div>
          </div>


          {/* Text Content */}
          <div className="relative h-full flex flex-col justify-center 
            left-[-2rem] top-[2rem]
            sm:left-[8rem] sm:top-[4rem]
            md:left-[12rem] md:top-[4rem]
            lg:left-[18rem] lg:top-[5rem]
            xl:left-[24rem] xl:top-[6rem]
            2xl:left-[34rem] 2xl:top-[6rem]
            pl-8 sm:pl-16">
            <h1 className={`text-4xl 
            sm:text-4xl 
            md:text-5xl 
            lg:text-5xl 
            xl:text-6xl 
            2xl:text-6xl 
            text-amber-500 ml-[11rem]
            font-aprillia mb-4 ${styles.animateTextFadeIn}`}>
              Subhanarekha
            </h1>
            <p className={`text-2xl 
              sm:text-xl 
              md:text-2xl 
              lg:text-3xl 
              xl:text-3xl 
              2xl:text-4xl 
              text-white 
              ml-[12rem]
              sm:ml-[15rem]
              md:ml-[11rem]
              lg:ml-[13rem]
              xl:ml-[15rem]
              2xl:ml-[17rem]
              font-aprillia ${styles.animateTextFadeIn} ${styles.delay100}`}>
              Streak of gold
            </p>
          </div>

        </div>
      </div>

      {/* Main Content */}
      <div
        aria-live="polite"
        className={`
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          transition-opacity duration-500
        `}
      >
        {children}
      </div>
    </>
  );
};

export default Loader;