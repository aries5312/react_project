import { FiMenu } from "react-icons/fi";
import {
  AiOutlineSearch,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFacebook, BsYoutube, BsLinkedin } from "react-icons/bs";

import logo from "../images/Picture2.png";

const Navbar = ({ toggleSideBar }) => {
  const social = [
    {
      logo: <BsFacebook />,
      link: "",
      style: "text-3xl/4",
    },
    {
      logo: <BsYoutube />,
      link: "",
      style: "text-4xl/8",
    },
    {
      logo: <AiFillTwitterCircle />,
      link: "",
      style: "text-3xl",
    },
    {
      logo: <AiFillInstagram />,
      link: "",
      style: "text-3xl/8",
    },
    {
      logo: <BsLinkedin />,
      link: "",
      style: "text-2xl",
    },
  ];

  return (
    <div className="h-24 flex items-center px-10 justify-between">
      <div className="h-full flex">
        <button onClick={toggleSideBar}>
          <FiMenu className="text-3xl" />
        </button>
        <img src={logo} className=" max-h-full"></img>
      </div>

      <div className="ring-1 ring-gray-300 shadow-md rounded-md flex bg-gray-300 items-center p-2 gap-2">
        <AiOutlineSearch className="text-xl" />
        <input
          type="text"
          className=" bg-transparent w-[300px] focus:outline-none"
          placeholder="Search for Br Atur Services"
        ></input>
        
      </div>

      <div className="flex items-center gap-3">
        {social.map((social, i) => {
          return (
            <a key={i} href={social.link} className={social.style}>
              {social.logo}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
