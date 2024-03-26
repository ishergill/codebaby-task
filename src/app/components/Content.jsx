"use client";
import Image from "next/image";

// !#3rd party
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

// !components
import BuyNowSection from "./BuyNowSection";
import ShareApp from "./ShareApp";

// !assets
import {
  arrowCircleRightBlack,
  checklist,
  classes,
  ilestsExam,
  listening,
  reading,
  speaking,
  studentNews,
  user,
  vocabulary,
  whatsapp,
  writeing,
  youtube,
} from "../assets";


const data = {
  labels: [
    "18 Feb",
    "17 Feb",
    "16 Feb",
    "15 Feb",
    "14 Feb",
    "13 Feb",
    "11 Feb",
   
  ],
  datasets: [
    {
      label: "User Activity",
      data: [90, 60, 50, 45, 40, 30, 20, 55, 48, 42, 38, 33, 28, 0],
      borderColor: "#1158DA",
    },
  ],
};

const options = {
  responsive: true,
  aspectRatio: 8.9 / 3,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  indexAxis: "y",
  scales: {
    x: {
      beginAtZero: false,
    },
  },
};
Chart.register(CategoryScale);
const Content = () => {
  const gridItems = [
    {
      id: 1,
      icon: speaking,
      title: "Speaking",
    },
    {
      id: 2,
      icon: listening,
      title: "Listening",
    },
    {
      id: 3,
      icon: reading,
      title: "Reading",
    },
    {
      id: 4,
      icon: writeing,
      title: "Writing",
    },
    {
      id: 5,
  
      icon: vocabulary,
      title: "Vocalbulary",
    },
    {
      id: 6,
  
      icon: classes,
      title: "Classes",
    },
    {
      id: 7,
      icon: ilestsExam,
      title: "Book IELTS Exam",
    },
    {
      id: 8,
      icon: studentNews,
      title: "Student News",
    },
  ];
  
  return (
    <div className="Content">
      <div className="Content__nav">
        <Image
          src={user}
          alt="user"
        />
      </div>
      <div className="Content__help">
        <div className="Content__help__wrapper">
          <div className="Content__help__wrapper__main">
            <span >
              How many students we helped?
            </span>
            <button >
              Check
            </button>
          </div>
        </div>
      </div>

      <div className=" Content__main ">
        <div className="Content__main__data">
          <div className="Content__main__data__wrapper ">
            <h3 >Your Progress Summary</h3>
            <div className="Content__main__data__wrapper__graph">
              <div className="Content__main__data__wrapper__graph__left">
                <div className="Content__main__data__wrapper__graph__left__tag ">
                  <span className="Content__main__data__wrapper__graph__left__tag__left ">Wow! </span>
                  <span>You&apos;re about to reach your targeted band</span>
                </div>
                <Line datasetIdKey="id" data={data} options={options} />
              </div>
              <div className="Content__main__data__wrapper__graph__right">
                <ShareApp />
              </div>
            </div>
          </div>
        </div>

        <div className="Content__btns">
          <h3 >
            Prepare with ease
          </h3>
          <div className="Content__btns__main">
            <div className="Content__btns__main__left">
              {gridItems.map(({ id, icon, title }) => (
                <div
                  className={`Content__btns__main__left__card  
                  ${title === "Book IELTS Exam" && "order-last md:order-2"}
                  `}
                  key={id}
                >
                  <Image
                    src={icon}
                    alt={title}

                    style={{
                      scale : id === 8 ? 1.1 : 1,
                    }}
                  />
                  <span >
                    {title}
                  </span>
                </div>
              ))}
            </div>

            <div className="Content__btns__main__right ">
              <button >
                <Image src={youtube}  alt="" />
                <span >App Guide Video</span>
              </button>
              <div className="Content__btns__main__right__content ">
                <h2 >Practice Mock Tests</h2>
                <p >
                  Get the authentice IELTS exam experience with all four modules
                  covered!
                </p>
                <button>
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="Content__mb-mocktest ">
          <div className="Content__mb-mocktest__main ">
            <Image src={checklist}  alt="" />
            <div className="Content__mb-mocktest__main__data ">
              <h4 >Practice Mock Test</h4>
              <p >
                Get the authentic IELTS exam experience with all four modules
                covered!
              </p>
            </div>
          </div>
          <Image src={arrowCircleRightBlack}  alt="arrow" />
        </div>

        <div className=" Content__mb__buynow">
          <BuyNowSection />
        </div>

        <div className="Content__mb__btns__wrapper">
<h3>
  Quick Actions
</h3>
        <div className="Content__mb__btns__wrapper__main ">
          <button >
            <Image src={youtube}  alt="youtube" />
            <span >App Guide Video</span>
          </button>
          <button >
            <Image src={whatsapp} className="w-5 h-5 object-contain" alt="" />
            <span >Help & Support</span>
          </button>
        </div>
        </div>

        <div className="Content__mb__share">
          <ShareApp />
        </div>
      </div>
    </div>
  );
};

export default Content;
