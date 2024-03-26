import Image from "next/image";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import BottomTabs from "./components/BottomTabs";


export default function Home() {
  return (
    <div className="main">
    <Header />
    <div className="main__wrapper">
      <Sidebar />
      <Content />
    </div>
    <BottomTabs />
  </div>
  );
}
