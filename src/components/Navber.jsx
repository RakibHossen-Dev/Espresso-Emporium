import navImage from "../assets/more/15.jpg";
import navIocn from "../assets/more/logo1.png";

const Navber = () => {
  return (
    <div
      className="navbar h-20 bg-cover bg-center flex justify-center items-center "
      style={{ backgroundImage: `url(${navImage})` }}
    >
      <div className="flex items-center text-center ">
        <img className="w-16 mr-4" src={navIocn} alt="Logo" />
        <h1 className="text-white text-3xl font-rancho">Espresso Emporium</h1>
      </div>
    </div>
  );
};

export default Navber;
