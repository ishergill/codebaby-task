import Image from "next/image";

// !assets
import { boys } from "../assets";


const ShareApp = () => {
  return (
    <div className="ShareApp ">
      <Image src={boys} alt="bg"  />
      <div className="ShareApp__data">
        <h3 >
          One Share can save many lives
        </h3>
        <p >
          Your one share can unlock a world of education for unprivileged.
        </p>
        <button >
          Share App
        </button>
      </div>
    </div>
  );
};

export default ShareApp;
