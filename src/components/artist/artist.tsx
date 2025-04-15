'use client';
import React, { useState } from "react";
import artists from "public/assets/data/artists";
import PopupModal from './popupModel';

type ArtistType = {
  id: number;
  imageSrc: string;
  name: string;
  description: string;
};

export default function Artist() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<ArtistType | null>(null);

  const handleCardClick = (artist: ArtistType) => {
    setSelectedArtist(artist);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedArtist(null);
  };

  return (
    <>
      <div className="mt-[5rem] overflow-hidden">
        <div
          className="w-full bg-[#E3C7A1] text-white overflow-x-hidden"
          style={{
            backgroundImage: `url('assets/gallery/bg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex w-full flex-row items-center justify-center py-4">
            <img
              src="/assets/artist/dhakiLeft.png"
              className="w-[18%] animate-dhakiLeft object-contain sm:w-[13%] max-w-full"
              alt="Dhaki Left"
            />
            <img
              src="/assets/artist/artist.png"
              className="mx-4 w-[18%] object-contain sm:w-[15%] max-w-full"
              alt="Artist Text"
            />
            <img
              src="/assets/artist/dhakiRight.png"
              className="w-[18%] animate-dhakiRight object-contain sm:w-[13%] max-w-full"
              alt="Dhaki Right"
            />
          </div>

          {/* Artist cards */}
          <div className="mt-6 flex w-full flex-row flex-wrap items-start justify-center gap-x-25 gap-y-6">
            {artists.map((artist, index) => (
              <button
                key={artist.id}
                type="button"
                className="group flex w-[35%] min-w-[250px] cursor-pointer flex-col items-center"
                onClick={() => handleCardClick(artist)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleCardClick(artist);
                  }
                }}
              >
                <div className="flex w-full flex-row items-center justify-center">
                  <img
                    src="/assets/artist/designRight.png"
                    className="relative right-[-25%] w-[60%] rotate-[30deg] object-contain transition-transform duration-900 group-hover:rotate-[-1deg] max-w-full"
                    alt="Design Left"
                  />
                  <img
                    src="/assets/artist/sideFrame.png"
                    className="relative left-[1%] z-10 w-[6%] object-contain max-w-full"
                    alt="Side Frame"
                  />
                  <img
                    src={artist.imageSrc}
                    className="z-10 w-[45%] object-contain max-w-full"
                    alt="Artist"
                  />
                  <img
                    src="/assets/artist/sideFrame.png"
                    className="z-10 w-[6%] object-contain max-w-full"
                    alt="Side Frame"
                  />
                  <img
                    src="/assets/artist/designLeft.png"
                    className="-rotate-[34deg] group-hover:-rotate-[-1deg] relative left-[-23%] w-[55%] object-contain transition-transform duration-900 max-w-full"
                    alt="Design Right"
                  />
                </div>

                <img
                  src="/assets/artist/nameBox.png"
                  className="-mt-4 sm:-top-7  -top-1 relative left-1 w-[65%] object-contain sm:relative sm:left-3 max-w-full"
                  alt="Name Box"
                />
                <h1 className="sm:-top-29 -top-14 relative left-1 mt-2 text-center font-bold text-3xl text-lg sm:relative sm:left-3 sm:text-4xl">
                  <span className="text-[#7D2E2E]">{artist.name}</span>
                </h1>
              </button>
            ))}
          </div>
        </div>

        {/* Popup Modal */}
        {isOpen && selectedArtist && (
          <PopupModal isOpen={isOpen} onClose={handleCloseModal}>
            <div className="flex h-full w-full flex-col items-center justify-center bg-[#E3C7A1] text-white sm:flex-row overflow-hidden">
              {/* Image Container */}
              <div className="group absolute top-0 flex w-full flex-col items-center sm:static sm:w-[35%] md:w-[40%]">
                <div className="flex w-full flex-row items-center justify-center">
                  <img
                    src="/assets/Artist/designRight.png"
                    className="-right-[10%] relative w-[35%] rotate-[30deg] object-contain transition-transform duration-900 group-hover:rotate-[-1deg] sm:right-[-25%] sm:w-[60%] md:w-[50%] max-w-full"
                    alt="Design Right"
                  />
                  <img
                    src="/assets/Artist/sideFrame.png"
                    className="relative left-[1%] z-10 w-[3%] object-contain sm:w-[6%] md:w-[5%] max-w-full"
                    alt="Side Frame"
                  />
                  <img
                    src={selectedArtist.imageSrc}
                    className="z-10 w-[23%] object-contain sm:w-[45%] md:w-[38%] max-w-full"
                    alt="Artist"
                  />
                  <img
                    src="/assets/Artist/sideFrame.png"
                    className="z-10 w-[3%] object-contain sm:w-[6%] md:w-[5%] max-w-full"
                    alt="Side Frame"
                  />
                  <img
                    src="/assets/Artist/designLeft.png"
                    className="-rotate-[34deg] -left-[12%] relative w-[35%] object-contain transition-transform duration-900 group-hover:rotate-[-1deg] sm:left-[-23%] sm:w-[55%] md:w-[50%] max-w-full"
                    alt="Design Left"
                  />
                </div>

                <img
                  src="/assets/Artist/nameBox.png"
                  className="-mt-4 sm:-top-9 -top-3 relative w-[35%] object-contain sm:w-[65%] md:w-[60%] max-w-full"
                  alt="Name Box"
                />
                <h1 className="sm:-top-32 -top-13  relative left-0 mt-2 text-center font-bold text-sm sm:text-4xl md:text-3xl">
                  <span className="text-[#7D2E2E]">{selectedArtist.name}</span>
                </h1>
              </div>

              {/* Text Container */}
              <div className="flex w-full flex-col items-center justify-center px-4 py-6 sm:mx-5 sm:w-[60%] sm:py-0 md:w-[55%]">
                <h1 className="hidden font-Oswald font-bold text-[#7D2E2E] text-lg italic sm:block sm:text-xl md:text-2xl">
                  {selectedArtist.name}
                </h1>

                <p className="absolute top-[35%]  px-3 text-justify font-serif text-black text-sm sm:static sm:top-auto sm:mt-6 sm:text-md md:text-base">
                  {selectedArtist.description}
                </p>
              </div>
            </div>
          </PopupModal>
        )}
      </div>
    </>
  );
}
