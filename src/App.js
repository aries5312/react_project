import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./pages/Hero";
import Footer from "./components/Footer";
import Test from "./pages/Test";

function App() {
  const [sideBarShow, setSideBarShow] = useState(false);

  const toggleSideBar = () => {
    console.log("click");
    setSideBarShow(!sideBarShow);
  };

  return (
    <div className="flex flex-col h-screen">
      {sideBarShow && (
        <div className="absolute left-0 top-0 h-full z-10">
          <Sidebar toggleSideBar={toggleSideBar} />
        </div>
      )}
      <div className="flex flex-col h-screen">
        {sideBarShow && (
          <div
            className="bg-black/30 absolute h-full w-full"
            onClick={toggleSideBar}
          ></div>
        )}

        <Navbar toggleSideBar={toggleSideBar} />
        <Hero className="h-auto max-w-full"/>
        <Test />
        <Footer />
        </div>
    </div>
  );
}

export default App;
