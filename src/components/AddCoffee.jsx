import Swal from "sweetalert2";
const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  return (
    <div className="my-10">
      <div className="min-h-screen flex flex-col justify-center items-center md:w-9/12 mx-auto bg-[#F4F3F0] p-4">
        <h3 className="text-3xl font-mono text-center mb-3 font-semibold text-gray-600">
          Add New Coffee
        </h3>
        <p className="text-center md:w-9/12 mx-auto">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.{" "}
        </p>
        <form onSubmit={handleAddCoffee} className="card-body w-full">
          <div className="flex md:flex-row flex-col  gap-3 items-center">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="input input-bordered rounded-none  "
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Enter coffee quantity"
                className="input input-bordered rounded-none "
                required
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col  gap-3 items-center">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered rounded-none  "
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="input input-bordered rounded-none "
                required
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col  gap-3 items-center">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input input-bordered rounded-none  "
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input input-bordered rounded-none "
                required
              />
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered rounded-none "
              required
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value=" Add Coffee"
              className="bg-[#D2B48C] py-2 rounded-sm font-semibold font-mono text-gray-600 cursor-pointer"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
