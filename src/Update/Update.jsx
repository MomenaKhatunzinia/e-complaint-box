import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const loadUpdate = useLoaderData();
  const { description, _id, level } = loadUpdate;
  const [Uplevel, setLevel] = useState(level || "");
  const [formData, setFormData] = useState({
    description: description || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedComplain = {
      description: formData.description,
      level: Uplevel,
    };

    fetch(`http://localhost:5000/Complains/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedComplain),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Your Complain has been updated",
          text: "You clicked the button!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="hero bg-[url('https://i.ibb.co/Ld3B2CL/Complain-Box.jpg')] h-screen">
        <div className="rounded-xl shadow-2xl bg-white bg-opacity-85 w-5/6">
          <form onSubmit={handleSubmit} className="card-body font-bold text-2xl">
            {/* Dropdown for selecting level */}
            <div className="form-control">
              <label className="label">
                <span>Level</span>
              </label>
              <select
                value={Uplevel}
                onChange={handleLevelChange}
                className="input input-bordered"
                required
              >
                <option value="">Select level</option>
                <option value="Private">Private</option>
                <option value="Public">Public</option>
              </select>
            </div>

            {/* Problem Description */}
            <div className="form-control">
              <label className="label">
                <span>Problem Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Problem Description"
                value={formData.description}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-2xl">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
