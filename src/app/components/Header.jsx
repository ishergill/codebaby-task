'use client'

import Image from "next/image";
import { useState } from "react";

const options = ["IELTS", "PTE", "TOEFL"];

const Header = () => {
  const [option, setOption] = useState(0);
  return (
    <div className="flex flex-col">
      <div className="hidden lg:flex py-2 bg-[#F6DDC9] justify-center">
        <span className="text-[#DF7146] text-sm">
          Get 50% discount on BabyCode membership
        </span>
      </div>
      <div className="lg:hidden bg-gradient-to-b from-[#1158DA] to-[#002569] py-3 px-6 md:px-14 md:py-6">
        <div className="flex justify-between items-center">
          <Image
            src={''}
            className="w-10 h-10 object-contain cursor-pointer"
            alt=""
          />
          <span className="text-white font-medium text-xl">Home</span>
          <Image
            src={''}
            className="w-10 h-10 object-contain cursor-pointer"
            alt=""
          />
        </div>
        <div className="rounded-full w-fit mx-auto my-2 flex items-center text-white gap-2 bg-[#1C50AF] p-2">
          {options.map((item, index) => (
            <div className="flex items-center" key={index}>
              {option === 2 && index === 1 ? (
                <div className="h-5 w-[1px] bg-white"></div>
              ) : (
                ""
              )}
              <span
                className={`rounded-full p-2 w-20 flex justify-center cursor-pointer ${
                  index === option
                    ? "bg-white text-[#1C50AF]"
                    : "bg-[#1C50AF] text-white"
                }`}
                onClick={() => setOption(index)}
              >
                {item}
              </span>
              {index === 1 && option === 0 ? (
                <div className="h-5 w-[1px] bg-white"></div>
              ) : (
                ""
              )}
            </div>
          ))}
          {/* <span className="bg-white rounded-full text-[#1C50AF] py-2 px-4 cursor-pointer">
            IELTS
          </span>
          <span className="rounded-full text-white py-2 px-4 cursor-pointer">
            PTE
          </span>
          |
          <span className="rounded-full text-white py-2 px-4 cursor-pointer">
            TOEFL
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
