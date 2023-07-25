import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ toggleSideBar }) => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Our Purpose",
      link: "/",
    },
    {
      name: "About Br Atur Service",
      link: "/",
    },
  ];

  const subLink = [
    {
      name: "Product Info",
      link: "/",
    },
    {
      name: "Product Comparison",
      link: "/",
    },
    {
      name: "CTOS Check",
      link: "https://ctoscredit.com.my",
    },
    {
      name: "Eligibility Check- DSR and NDI Calculator",
      link: "/",
    },
    {
      name: "Application Form and Detail  Applicant",
      link: "/",
    },
    {
      name: "Required Document (to be specified)",
      link: "/",
    },
  ];

  return (
    <div className="bg-white h-full w-96 p-6 py-10 flex">
      <div className="flex flex-col gap-3">
        {links.map((link, i) => {
          return (
            <a href={link.link} key={i} className="underline text-blue-800">
              {link.name}
            </a>
          );
        })}
        <p>Our Services</p>
        <ul className=" list-disc space-y-3 ml-10">
          {subLink.map((link, i) => {
            return (
              <li key={i}>
                <a href={link.link} className=" underline text-blue-800">
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <button>
          <AiOutlineClose className="text-3xl" onClick={toggleSideBar} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
