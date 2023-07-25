import { AiFillBank } from "react-icons/ai";
import { MdOutlineEmojiPeople } from "react-icons/md";
import {
  FaMoneyBillTrendUp,
  FaUserShield,
  FaPersonCane,
  FaPeopleArrows,
} from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GiReceiveMoney } from "react-icons/gi";

const Footer = () => {
  const services = [
    {
      logo: <AiFillBank />,
      description: "Corporate loan Services",
    },
    {
      logo: <MdOutlineEmojiPeople />,
      description: "Personal Financing",
    },
    {
      logo: <FaPersonCane />,
      description: "Pensionar Financing",
    },
    {
      logo: <HiBuildingOffice2 />,
      description: "Corporative Financing",
    },
    {
      logo: <GiReceiveMoney />,
      description: "Mortgage Consultant",
    },
    {
      logo: <FaPeopleArrows />,
      description: "Government Staff Loan",
    },
    {
      logo: <FaUserShield />,
      description: "Insurance Agent",
    },
    {
      logo: <FaMoneyBillTrendUp />,
      description: "Investment",
    },
  ];

  return (
    <div className="h-[40%]">
      <div className="px-20 py-10">
        <h1 className="font-semibold text-3xl mb-12 italic">
          Start Making smart Financial Decision with Us
        </h1>
        <div className="flex justify-center items-center gap-40">
          <div className="grid grid-cols-4 w-[65%] gap-6">
            {services.map((service, i) => {
              return (
                <div className="flex items-center gap-4" key={i}>
                  <p className=" text-7xl text-[#dfa27e]  ">{service.logo}</p>
                  <p className=" text-2xl text-gray-900">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="text-center space-y-4">
            <button className="ring-1 ring-green-500 p-2 bg-green-600 shadow-lg text-white font-bold">
              Apply Now
            </button>
            <h1 className="text-center font-bold tracking-tight text-lg italic">
              Manage Your Finances <br />
              Effectively and Achieve Your <br /> 
              Financial Goal with Us
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
