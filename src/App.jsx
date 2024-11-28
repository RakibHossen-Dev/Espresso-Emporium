import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import Banner from "./components/Banner";
import Galary from "./components/Galary";
import { CiCoffeeCup } from "react-icons/ci";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <>
      <Banner></Banner>
      <div className="flex flex-col justify-center items-center gap-3 mt-10">
        <div class="  tracking-wide ">
          --- <span>Sip & Savor</span> ---
        </div>
        <h1 className="text-[#331A15] font-semibold text-3xl font-rancho ">
          Our Popular Products
        </h1>
        <Link
          to="/addCoffee"
          className="flex gap-1 items-center border rounded-md border-[#331A15] py-1 font-rancho px-3 bg-[#E3B577]"
        >
          <p className="font-semibold text-white">Add Coffee </p>
          <CiCoffeeCup className="text-[#331A15] text-xl" />
        </Link>
      </div>
      <div className="grid grid-cols-2 justify-center items-center gap-4 my-8 w-11/12 mx-auto">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
      <Galary></Galary>
    </>
  );
}

export default App;
