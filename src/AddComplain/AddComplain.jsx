import { useState } from "react";
import Swal from "sweetalert2";

const AddComplain = () => {
 
  const [level, setLevel] = useState(""); 
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    nid_Number: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...setFormData, [name]: value });
  };

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]; 
    setFile(selectedFile);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);

    formData.append("level", level);
   
    if (file) {
      formData.append("file", file);
    }

    console.log("FormData content:");
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    fetch("http://localhost:5000/Complains", {
      method: "POST",
      body: formData,
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      Swal.fire({
        title: "Your Complain has been added",
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
        <div className=" rounded-xl shadow-2xl bg-white bg-opacity-85 w-5/6">
          <form onSubmit={handleSubmit} className="card-body font-bold text-2xl">
            {/* Dropdown for selecting level */}
            <div className="form-control">
              <label className="label">
                <span>Level</span>
              </label>
              <select
                value={level}
                onChange={handleLevelChange}
                className="input input-bordered"
                required
              >
                <option value="">Select level</option>
                <option value="Private">Private</option>
                <option value="Public">Public</option>
              </select>
            </div>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span>Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span>Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>
            {/* Address */}
            <div className="form-control">
              <label className="label">
                <span>Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>
            {/* NID */}
            <div className="form-control">
              <label className="label">
                <span>NID number</span>
              </label>
              <input
                type="text"
                name="nid_Number"
                placeholder="NID_Number"
                value={formData.nid_Number}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
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
            {/* Picture or Video */}
            <div className="form-control">
              <label className="label">
                <span>Picture or Video</span>
              </label>
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                className="input input-bordered"
                accept="image/*, video/*" 
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

export default AddComplain;
