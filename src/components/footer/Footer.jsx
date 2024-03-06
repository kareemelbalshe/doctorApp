import React from "react";
import logo from "../../assets/images/logo.png";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    path: "/",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "/",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "/",
    icon: <AiFillLinkedin className="group-hover:text-white w-4 h-5" />,
  },
];
const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];
const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];
const quickLinks03 = [
  {
    path: "/find-a-doctor",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
];
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <img src={logo} className="w-[200px]" alt="" />
          <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
            Copyright &copy; {year} developed by KareemElbalshy all right
            reserved.
          </p>
          <div className="flex items-center gap-3 mt-4">
            {socialLinks.map((link, index) => {
              <Link
                className="w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                key={index}
                to={link.path}
              >
                {link.icon}
              </Link>;
            })}
          </div>
          <div className="">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link className="text-[16px] leading-7 font-[400] text-textColor" to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link className="text-[16px] leading-7 font-[400] text-textColor" to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link className="text-[16px] leading-7 font-[400] text-textColor" to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
