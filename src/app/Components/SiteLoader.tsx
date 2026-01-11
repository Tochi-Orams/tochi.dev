import React, { FC } from "react";
import Background from "./Background/Background";

interface props {
  pageLoaded: boolean;
  display: boolean;
  preferBasicUI: () => void;
  basic: boolean;
  limit: number;
}

const SiteLoader: FC<props> = ({
  pageLoaded,
  display,
  preferBasicUI,
  basic,
  limit,
}) => {
  return (
    <div>
      <div
        className={`absolute top-0 left-0 z-[5] h-screen w-full bg-black duration-[0.85s] ease-in ${
          display ? "opacity-0 blur-sm" : "opacity-100 blur-0"
        }`}
      >
        <img
          src="/Icon.png"
          alt="logo"
          className={`pointer-events-none xm:h-48 h-28 object-contain duration-1000 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            display ? "scale-[0.34]" : "scale-100"
          }`}
        />

        <div className="absolute left-1/2 top-[65%] xm:w-[25%] w-[40%] -translate-x-1/2">
          <div className="w-full h-[6px] bg-white/30 overflow-hidden rounded-sm">
            <div
              className={`loadBar w-full h-full bg-white/60 rounded-full -translate-x-[100%]`}
            />
          </div>
        </div>

        <div
          className="w-200px z-50 absolute top-[80%] left-1/2 -translate-x-1/2 p-4 glass cursor-pointer duration-300 hover:bg-white/45"
          onClick={preferBasicUI}
        >
          <p className="text-center">
            Switch to basic version for faster loading
          </p>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-[100vw] h-screen ease-in-out ${
          pageLoaded ? "opacity-100" : "opacity-0"
        } ${display ? "duration-0" : "duration-1000"}`}
      >
        {/* Background */}
        {basic ? (
          <div className="absolute top-0 left-0 h-[100vh] w-[100vw] -z-10 pointer-events-none">
            <img
              src="/Sequence/0010.jpg"
              alt="bg"
              className="h-full w-full object-cover pointer-events-none opacity-40"
            />
          </div>
        ) : (
          <div>
            <Background limit={limit} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SiteLoader;
