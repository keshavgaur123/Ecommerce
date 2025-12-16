import React from "react";
import { Link } from "react-router-dom";

import mnb from "/public/mnb.png";

export default function Hero() {
  return (
    <section className=" bg-gray-50/70  bg-no-repeat bg-cover bg-center  ">
      <div className="container mx-auto justify-around flex h-full">
        <div className="flex flex-col justify-center">
          <div className=" font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>new trand
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className=" font-semibold">WOMENS</span>
          </h1>
          <Link
            className=" self-start uppercase font-semibold border-b-2 border-primary "
            to={"/"}
          >
            Discover more
          </Link>
        </div>
        <div className="hidden md:block  mt-32 w-96 h-full">
          <img className="h-full" src={mnb} alt="" />
        </div>
      </div>
    </section>
  );
}

//"https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=800"
