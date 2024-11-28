import cup1 from "../assets/cups/Rectangle 9.png";
import cup2 from "../assets/cups/Rectangle 10.png";
import cup3 from "../assets/cups/Rectangle 11.png";
import cup4 from "../assets/cups/Rectangle 12.png";
import cup5 from "../assets/cups/Rectangle 13.png";
import cup6 from "../assets/cups/Rectangle 14.png";
import cup7 from "../assets/cups/Rectangle 15.png";
import cup8 from "../assets/cups/Rectangle 16.png";

const Galary = () => {
  return (
    <div className="w-11/12 mx-auto my-8">
      <h3 className="text-center my-2">Follow Us Now</h3>
      <h2 className="font-rancho text-3xl font-semibold text-[#331A15] text-center mb-5">
        Follow on Instagram
      </h2>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-3 ">
        <img src={cup1} alt="" />
        <img src={cup2} alt="" />
        <img src={cup3} alt="" />
        <img src={cup4} alt="" />
        <img src={cup5} alt="" />
        <img src={cup6} alt="" />
        <img src={cup7} alt="" />
        <img src={cup8} alt="" />
      </div>
    </div>
  );
};

export default Galary;
