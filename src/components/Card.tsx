// import { EventData } from "../constants/EventsData";
import type { EventList } from "constants/EventsData";
import { EventPhotos } from "public/EventsPhotos/EventsPhotos";

type CardProps = {
  data: EventList;
};

export default function Card({ data }: CardProps) {
  return (
    <div className="relative z-2 flex h-auto w-full items-center justify-center bg-[rgba(125,46,46,1)] py-4 md:mt-12 md:px-2 md:py-4">
      <div
        className="absolute top-0 left-0 z-10 h-[50px] w-[50px] rounded-br-full"
        style={{
          backgroundImage: `url(${EventPhotos.cardDeco1})`,
          width: "50px",
          height: "40px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute top-0 left-0 z-10 h-[50px] w-[50px] rounded-br-full"
        style={{
          backgroundImage: `url(${EventPhotos.cardDeco2})`,
          width: "105px",
          height: "100px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute bottom-0 left-0 z-0 h-[50px] w-[50px] rounded-tr-full"
        style={{
          backgroundImage: `url(${EventPhotos.cardDeco3})`,
          width: "105px",
          height: "130px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute bottom-0 left-0 z-0 h-[50px] w-[50px] rounded-tr-full"
        style={{
          backgroundImage: `url(${EventPhotos.cardDeco4})`,
          width: "120px",
          height: "140px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      <div className="flex h-auto w-[85%] flex-col-reverse items-center justify-center gap-2 px-2 py-6 md:flex-row md:justify-between md:px-8 md:py-20">
        <div className="flex h-auto w-[100%] flex-col md:h-[500px] md:w-[50%] md:justify-center md:py-4">
          {/* Content */}
          <h1 className="mt-2 mb-6 px-2 py-2 text-center font-bold mobile:text-4xl md:text-4xl lg:text-6xl text-[rgba(243,202,78,1)]" style={{fontFamily: 'var(--font-aprillia)'}}>
            {data.title}
          </h1>
          <p className="z-10 text-justify text-[14px] text-white md:text-[16px] lg:text-[18px]">
            {data.desc}
          </p>
        </div>
        <div className="my-2 w-[100%] md:h-[100%] md:w-[45%] border-4 border-[rgba(125,46,46,1)]">
          <img
            className="w-full object-cover md:min-h-[330px] lg:h-[500px] "
            src={EventPhotos.cardImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
