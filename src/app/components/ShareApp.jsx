import Image from "next/image";
import { boys } from "../assets";


const ShareApp = () => {
  return (
    <div className="relative h-[50vh] md:h-full mb-20">
      <Image src={boys} alt="" className="h-full w-full object-right-top object-cover rounded-xl" />
      <div className="absolute flex flex-col items-start md:items-center text-start md:text-center gap-2 bottom-5 left-[50%] -translate-x-[50%] w-[80%] md:w-[70%]">
        <h3 className="font-serif text-3xl text-white font-medium">
          One Share can save many lives
        </h3>
        <p className="text-gray-300 text-md">
          Your one share can unlock a world of education for unprivileged.
        </p>
        <button className="bg-white hover:bg-gray-300 transition-colors duration-300 rounded-full text-gray-700 py-2 px-10 md:px-5 mt-3 font-medium">
          Share App
        </button>
      </div>
    </div>
  );
};

export default ShareApp;
