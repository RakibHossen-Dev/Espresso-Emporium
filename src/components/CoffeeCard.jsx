import { GoEye } from "react-icons/go";
import { MdOutlineDeleteForever, MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });

        // console.log("delete", _id);
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.handleDelete > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="flex gap-2 justify-evenly items-center shadow-sm bg-[#ece8e2] p-3 rounded-md">
      <div>
        <img className=" md:w-auto w-32" src={photo} alt="" />
      </div>
      <div>
        <h3>
          <span className="font-bold">Name:</span> {name}
        </h3>
        <p>
          <span className="font-bold">Quantity:</span> {quantity}
        </p>
        <p>
          <span className="font-bold">Taste:</span> {taste}
        </p>
      </div>
      <div className="flex gap-4 flex-col justify-center items-center">
        <button className="p-2 rounded-sm text-white bg-[#D2B48C]">
          <GoEye />
        </button>
        <button className="p-2 rounded-sm text-white bg-black">
          <Link to={`updateCoffee/${_id}`}>
            <MdOutlineEdit />
          </Link>
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="p-2 rounded-sm text-white bg-red-400"
        >
          <MdOutlineDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
