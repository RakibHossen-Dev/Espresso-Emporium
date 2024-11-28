import footerlogo from "../assets/more/logo1.png";
import footerbg from "../assets/more/10.png";
import coppyRightImage from "../assets/more/24.jpg";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
const Footer = () => {
  return (
    <div>
      <div
        className="navbar bg-cover bg-center h-[500px]  "
        style={{ backgroundImage: `url(${footerbg})` }}
      >
        <div className="flex flex-col gap-5 lg:flex-row w-11/12 mx-auto">
          <div className="space-y-3 lg:w-1/2">
            <img className="w-24" src={footerlogo} alt="" />
            <h1 className="text-[#331A15] font-semibold text-3xl font-rancho">
              Espresso Emporium
            </h1>
            <p>
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex gap-2 items-center">
              <FaLinkedin className="text-[#331A15] text-2xl" />
              <FaFacebookSquare className="text-[#331A15] text-2xl" />
              <FaXTwitter className="text-[#331A15] text-2xl" />
              <FaInstagram className="text-[#331A15] text-2xl" />
            </div>
            <h1 className="text-[#331A15] text-2xl font-rancho">
              Get in Touch
            </h1>
            <div className="flex gap-2 items-center">
              <FaPhoneAlt className="text-[#331A15] text-xl" />
              <p>+88 01533 333 333</p>
            </div>
            <div className="flex gap-2 items-center">
              <MdEmail className="text-[#331A15] text-xl" />
              <p>info@gmail.com</p>
            </div>
            <div className="flex gap-2 items-center">
              <CiLocationOn className="text-[#331A15] text-xl" />
              <p>72, Wall street, King Road, Dhaka </p>
            </div>
          </div>

          <div className="space-y-3 lg:w-1/2">
            <h1 className="text-[#331A15] font-semibold text-3xl font-rancho">
              Connect with Us
            </h1>
            <form action="">
              <input
                className="p-2  w-full mb-3"
                type="text"
                placeholder="Name"
              />
              <input
                className="p-2  w-full mb-3"
                type="email"
                placeholder="Email"
              />
              <textarea
                className="w-full"
                name=""
                id=""
                cols=""
                rows="10"
              ></textarea>
              <button className="border border-[#331A15] py-1 text-xl px-4 text-[#331A15] rounded-full font-rancho">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className=" " style={{ backgroundImage: `url(${coppyRightImage})` }}>
        <p className="text-white text-sm text-center py-4 ">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
