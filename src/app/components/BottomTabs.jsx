"use client";

import { useState } from "react";

const tabs = [
  {
    id: 1,
    label: "Home",
    icon: "",
  },
  {
    id: 2,
    label: "Community",
    icon: "",
  },
  {
    id: 3,
    label: "Stories",
    icon: "",
  },
  {
    id: 4,
    label: "Shop",
    icon: "",
  },
  {
    id: 5,
    label: "Feedback",
    icon: "",
  },
];
const BottomTabs = () => {
  const [option, setOption] = useState(0);

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
          {icon}
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomTabs;
