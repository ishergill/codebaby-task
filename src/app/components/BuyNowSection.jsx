import Image from "next/image";

// !assets
import { arrowCircleRightWhite, check } from "../assets";


const BuyNowSection = () => {

const content = [
  "Unlimited Speaking Test Access",
  "Unlimited Writing Test Access",
  "Analyze Your Answer",
  "Check Band Score",
];
  return (
    <div className="BuyNowSection">
      <div className="BuyNowSection__top">
        <h2 >
          Explore premium features with ease!
        </h2>
        <div className="BuyNowSection__content">
          {content.map((content) => (
            <div
              className="BuyNowSection__content__item "
              key={content}
            >
              <Image
                src={check}
                alt="check"
                height={24}
                width={24}
              />
              <span>{content}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="BuyNowSection__bottom">
        <span className=" ">Only @ ₹ 299</span>
        <button className="">
          Buy Now <Image src={arrowCircleRightWhite}  alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default BuyNowSection;
