"use client";

import { useState } from "react";
import Image from "next/image";
import { homeicon, msgicon, shopicon, storiesicon, usericon } from "../assets";



const tabs = [
  {
    id: 1,
    label: "Home",
    icon: homeicon,
  },
  {
    id: 2,
    label: "Community",
    icon: usericon,
  },
  {
    id: 3,
    label: "Stories",
    icon: storiesicon,
  },
  {
    id: 4,
    label: "Shop",
    icon: shopicon,
  },
  {
    id: 5,
    label: "Feedback",
    icon: msgicon,
  },
];
const BottomTabs = () => {
  const [option, setOption] = useState(1);

  return (
    <div className="bottomTabs">
      {tabs.map(({ id, label, icon }) => (
        <div
          className={`bottomTabs__item ${
            option === id
              ? " bottomTabs__item__active "
              : "bottomTabs__item__grey "
          }`}
          key={label}
          onClick={() => setOption(id)}
        >
          <Image src={icon} alt={label} height={24} width={24} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomTabs;
