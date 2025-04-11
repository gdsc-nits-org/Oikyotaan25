import artists from "~/data/artists";

export default function Artist() {
  return (
    <div>
      <div
        className="w-full bg-[#E3C7A1] text-white"
        style={{
          backgroundImage: `url('/assets/artist/bg_pattern.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Top section with text and dhaki */}
        <div className="flex w-full flex-row items-center justify-center py-4">
          <img
            src="/assets/artist/dhakiLeft.png"
            className="w-[18%] animate-dhakiLeft object-contain sm:w-[13%]"
            alt="Dhaki Left"
          />
          <img
            src="/assets/artist/artist.png"
            className="mx-4 w-[18%] object-contain sm:w-[15%]"
            alt="Artist Text"
          />
          <img
            src="/assets/artist/dhakiRight.png"
            className="w-[18%] animate-dhakiRight object-contain sm:w-[13%]"
            alt="Dhaki Right"
          />
        </div>

        {/* Artist cards */}
        <div className="mt-6 flex w-full flex-row flex-wrap items-start justify-center gap-x-25 gap-y-6">
          {artists.map((artist) => (
            <div
              className="group flex w-[35%] min-w-[250px] flex-col items-center"
              key={artist.id}
            >
              <div className="flex w-full flex-row items-center justify-center">
                <img
                  src="/assets/artist/designRight.png"
                  className="relative right-[-25%] w-[60%] rotate-[30deg] object-contain transition-transform duration-900 group-hover:rotate-[-1deg]"
                  alt="Design Left"
                />
                <img
                  src="/assets/artist/sideFrame.png"
                  className="relative left-[1%] z-10 w-[6%] object-contain"
                  alt="Side Frame"
                />
                <img
                  src={artist.imageSrc}
                  className="z-10 w-[45%] object-contain"
                  alt="Artist"
                />
                <img
                  src="/assets/artist/sideFrame.png"
                  className="z-10 w-[6%] object-contain"
                  alt="Side Frame"
                />
                <img
                  src="/assets/artist/designLeft.png"
                  className="-rotate-[34deg] group-hover:-rotate-[-1deg] relative left-[-23%] w-[55%] object-contain transition-transform duration-900"
                  alt="Design Right"
                />
              </div>

              <img
                src="/assets/artist/nameBox.png"
                className="-mt-4 sm:-top-5 relative left-1 w-[65%] object-contain sm:relative sm:left-3"
                alt="Name Box"
              />
              <h1 className="sm:-top-28 -top-14 relative left-1 mt-2 text-center font-bold text-3xl sm:relative sm:left-3 sm:text-4xl">
                <span className="text-[#7D2E2E]">{artist.name}</span>
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
