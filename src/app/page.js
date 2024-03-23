import Image from "next/image";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import BottomTabs from "./components/BottomTabs";


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <Content />
    </div>
    <BottomTabs />
  </div>
  );
}
