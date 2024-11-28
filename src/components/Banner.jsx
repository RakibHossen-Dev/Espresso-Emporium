import bannerImage from "../assets/more/3.png";
import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";
const Banner = () => {
  return (
    <div>
      <div
        className="navbar bg-cover bg-center flex    h-[500px]  "
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="lg:w-1/2"></div>
        <div className="flex flex-col items-start justify-start space-y-3 lg:w-1/2 ">
          <h1 className="text-white text-4xl font-rancho">
            Would you like a Cup of Delicious Coffee?{" "}
          </h1>
          <p className="text-white">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>

          <button className="py-1 px-4 bg-[#E3B577] font-rancho">
            Learn More
          </button>
        </div>
      </div>
      <div className=" bg-[#ECEAE3] py-5  ">
        <div className="w-11/12 mx-auto grid grid-cols-4 gap-5">
          <div className="flex flex-col gap-1">
            <img className="w-20" src={icon1} alt="" />
            <h3 className="text-2xl font-semibold font-rancho text-[#331A15]">
              Awesome Aroma
            </h3>
            <p>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <img className="w-20" src={icon2} alt="" />
            <h3 className="text-2xl font-semibold font-rancho text-[#331A15]">
              High Quality{" "}
            </h3>
            <p>We served the coffee to you maintaining the best quality </p>
          </div>
          <div className="flex flex-col gap-1">
            <img className="w-20" src={icon3} alt="" />
            <h3 className="text-2xl font-semibold font-rancho text-[#331A15]">
              Pure Grades
            </h3>
            <p>
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <img className="w-20" src={icon4} alt="" />
            <h3 className="text-2xl font-semibold font-rancho text-[#331A15]">
              Proper Roasting
            </h3>
            <p>
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
