import React, { useState, useEffect } from "react";
import jumpscareImage from "./assets/jumpscareImage.jpg";
import jumpscareSound from "./assets/jumpscareSound.mp3";

function Content() {
  // Preload image
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = jumpscareImage;
    image.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  // Initialize audio
  const audio = new Audio(jumpscareSound);

  const [isJumpscareVisible, setIsJumpscareVisible] = useState(false);

  // Handle button click :)
  const handleClick = () => {
    audio.play();
    setTimeout(() => {
      setIsJumpscareVisible(true);
    }, 500);
  };

  return (
    <>
      {isJumpscareVisible && (
        <div className="absolute z-99">
          <img
            src={jumpscareImage}
            alt="Jumpscare"
            className="h-screen object-cover md:object-fill sm:w-screen"
          />
        </div>
      )}

      <div className="h-screen">
        <div className="p-5">
          <h1 className="text-text font-black text-4xl sm:text-5xl text-center uppercase">
            Heartstopper
          </h1>
        </div>

        {isImageLoaded && (
          <div className="flex flex-col justify-center">
            <button
              onClick={handleClick}
              className="bg-primary-button text-background font-semibold text-3xl sm:text-5xl p-3 sm:p-5 text-center mx-auto rounded-lg mt-64 sm:mt-44 hover:shadow-2xl hover:shadow-accent/50 hover:text-text active:scale-95 transition-colors duration-200"
            >
              <span>Start the Experience</span>
            </button>
            <span className="text-text text-center mt-4">
              Click the button above to reveal a surprise
            </span>
          </div>
        )}

        {!isJumpscareVisible && (
          <div className="fixed w-full bottom-0 gap-4 pb-8 flex flex-row justify-center items-center">
            <a
              href="https://pump.fun/"
              className="hover:scale-110 active:scale-95 transition duration-200"
            >
              <img width={30} height={30} src="/heartstopper/pump-fun.svg" />
            </a>
            <a
              href="https://t.me/notajumpscare"
              className="hover:scale-110 active:scale-95 transition duration-200"
            >
              <img width={30} height={30} src="/heartstopper/telegram.svg" />
            </a>
            <a
              href="https://x.com/Notajumpscare"
              className="hover:scale-110 active:scale-95 transition duration-200"
            >
              <img width={30} height={30} src="/heartstopper/twitter.svg" />
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Content;
