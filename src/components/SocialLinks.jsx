import React from "react";
import { FaPhone, FaFacebook, FaInstagram, FaIdCard } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import Brochure from "../assets/Brochure.pdf"
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/financialfsolutions/?utm_source=qr&igsh=MXNhY3hsaTFrdGdxdQ%3D%3D",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Contact <FaPhone size={30} />
        </>
      ),
      href: "https://66659c5ad8028bc6167a1d56--kaleidoscopic-alpaca-8d219e.netlify.app/",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:sales.ffs@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Brochure <FaIdCard size={30} />
        </>
      ),
      href: Brochure,
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          Facebook <FaFacebook size={30} />
        </>
      ),
      href: "https://www.instagram.com/financialfsolutions/?utm_source=qr&igsh=MXNhY3hsaTFrdGdxdQ%3D%3D",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child,onClick, href, style, download }) => (
          
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
             
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
