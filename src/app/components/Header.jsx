'use client'

import Image from "next/image";
import { useState } from "react";

// !assets
import { inicon, user } from "../assets";


const Header = () => {
const options = ["IELTS", "PTE", "TOEFL"];

  const [option, setOption] = useState(0);
  return (
    <div className="Header">
      <div className="Header__desktop ">
        <span >
          Get 50% discount on BabyCode membership
        </span>
      </div>
      <div className="Header__mobile">
        <div className="Header__mobile__top ">
          <Image
            src={user}
            alt=""
          />
          <span >Home</span>
          <Image
            src={inicon}
            alt="instagram"
          />
        </div>
        <div className="Header__mobile__btns ">
          {options.map((item, index) => (
            <div className="Header__mobile__btns__list " key={index}>
              {option === 2 && index === 1 ? (
                <div className="Header__mobile__btns__list__divider "/>
              ) : (
                ""
              )}
              <span
                className={` ${
                  index === option
                    ? "Header__mobile__btns__list--btn-active "
                    : "Header__mobile__btns__list--normal"
                }`}
                onClick={() => setOption(index)}
              >
                {item}
              </span>
              {index === 1 && option === 0 ? (
                <div className="Header__mobile__btns__list__divider "/>
              ) : (
                ""
              )}
            </div>
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default Header;
