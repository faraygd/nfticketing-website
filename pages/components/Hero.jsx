import React from "react";
const Hero = () => {
  return (
    <>
      <div className="mt-40 ml-20 text-white text-center pl-auto">
        <div className="grid grid-cols-2 gap-20">
          <div className="text">
            <h1 className="text-[60px] text-center">Bring Your Experience With Us</h1>
            <p>
              Buy music ticket easily and quickly for you using cryptocurrency
            </p>
          </div>
          <div className="minting">
            <div className="bg-white w-72 h-72">
                <img src="#" alt="" />
                <p className="text-black">Supply :</p>
                <button className="bg-black">Connect Wallet</button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="mt-40 ml-20 text-white">Sup Nerd</h2>
    </>
  );
};

export default Hero;
