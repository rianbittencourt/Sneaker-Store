import React from 'react'


interface Props {

    title: string;
    subtitle?: string;
    buttonText: string;
    backgroundImage?: string;

}

export default function AltBanner({title, subtitle, buttonText, backgroundImage}: Props) {


    return (
        <div className="relative w-full py-[5vw] mb-10 overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div className="relative max-w-7xl m-auto flex flex-col gap-12 px-5 z-10">
            <p className="text-4xl font-thin text-stone-500">Up to 40% Discount</p>
            <h2 className="text-6xl lg:w-1/2 font-bold text-stone-900">
              Puma Sneakers Cali Sport Shoes
            </h2>
    
            <a className="bg-stone-900 py-4 w-[10rem] text-center text-white uppercase rounded-md hover:rounded-none animation-all duration-300 cursor-pointer ease-in-out">
              Shop Now
            </a>
          </div>
        </div>
      );
    };
