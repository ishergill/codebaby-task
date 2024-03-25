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
    <div className="Sidebar">
      <div className="Sidebar__top ">
        <div className="Sidebar__top__title ">
          <Image
            src={logo}
            alt="logo"
          />
          <span >BabyCode</span>
        </div>
        <div className="Sidebar__top__menu ">
          {navOptions.map(({ id, label, icon }) => (
            <div
              className={`Sidebar__top__menu__item`}
              key={id}
              style={{
                backgroundColor : '#3771DD'
              }}
            >
              <Image
                src={icon}
                alt={label}
                height={24}
                width={24}
              />
              <span >{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="Sidebar__bottom ">
        <BuyNowSection />
        <div className="Sidebar__bottom__btn  ">
          <Image
            src={logouticon}
            height={24}
            width={24}
            alt="logout"
          />
          <span >Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
