"use client"

import { useState } from "react";

const tabs = [
  {
    label: "Home",
    icon: '',
  },
  {
    label: "Community",
    icon: '',
  },
  {
    label: "Stories",
    icon: '',
  },
  {
    label: "Shop",
    icon:'',
  },
  {
    label: "Feedback",
    icon: '',
  },
];
const BottomTabs = () => {
  const [option, setOption] = useState(0);
  return (
    <div className="grid lg:hidden grid-cols-5 h-24 pt-2 pb-3 px-3 gap-4 fixed bottom-0 left-0 w-full bg-white">
      {tabs.map(({ label, icon }, index) => (
        <div
          className={`flex flex-col p-2 justify-between items-center ${
            option === index
              ? "border-t border-t-blue-500 text-blue-500"
              : " text-gray-800"
          }`}
          key={label}
          onClick={() => setOption(index)}
        >
          {icon}
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomTabs;
