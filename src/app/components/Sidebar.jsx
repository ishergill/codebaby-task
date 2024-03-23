import Image from "next/image";

// ! componets
import BuyNowSection from "./BuyNowSection";

// !assets
import {
  Storefront,
  Users,
  home,
  logo,
  logouticon,
  messagesquare,
  stories,
} from "../assets";

const Sidebar = () => {
  // * sidebar menu data
  const navOptions = [
    {
      id: 1,
      label: "Home",
      icon: home,
    },
    {
      id: 2,
      label: "Community",
      icon: Users,
    },
    {
      id: 3,
      label: "Stories",
      icon: stories,
    },
    {
      id: 4,

      label: "Shop",
      icon: Storefront,
    },
    {
      id: 5,

      label: "Feedback",
      icon: messagesquare,
    },
  ];

  return (
    <div className="hidden w-[25%] bg-gradient-to-b from-[#1158DA] to-[#002569] lg:flex flex-col items-center justify-between">
      <div className="flex flex-col items-center w-full">
        <div className="flex gap-1 items-center">
          <Image
            src={logo}
            alt="logo"
            className="h-12 w-12 object-contain my-1"
          />
          <span className="text-xl text-white">BabyCode</span>
        </div>
        <div className="flex w-full items-center flex-col gap-2 my-6">
          {navOptions.map(({ id, label, icon }) => (
            <div
              className={`flex w-[80%] gap-2 items-center rounded-md hover:bg-[#3771DD] cursor-pointer p-2 ${
                label === "Home" && "bg-[#3771DD]"
              }`}
              key={id}
            >
              <Image
                src={icon}
                alt={label}
                height={24}
                width={24}
                className="h-6 w-6 object-contain"
              />
              <span className="text-white">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <BuyNowSection />
        <div className="mb-6 flex w-[80%] gap-2 items-center rounded-md hover:bg-[#3771DD] cursor-pointer p-2">
          <Image
            src={logouticon}
            height={24}
            width={24}
            alt="logout"
            className="h-7 w-7 object-contain"
          />
          <span className="text-white">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
