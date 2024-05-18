
import { useState } from "react";
import Swal from "sweetalert2";

const AddComplain = () => {
  const [level, setLevel] = useState(""); 
  const [file, setFile] = useState(null);
  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const handleFileChange = (e) => {
    console.log("handelFile")
    const selectedFile = e.target.files[0]; 
    // console.log(selectedFile.name)
    setFile(selectedFile);
  }

//  console.log("File",file)
const handelSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  formData.append("level", level);
  formData.append("file",file);
  console.log("FormData size:", formData.size); 

  for (const pair of formData.entries()) {
    console.log(pair[0] + ', ' + pair[1]);
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
          <form onSubmit={handelSubmit} className="card-body font-bold text-2xl">
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
            {/* Rest of the form
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span>Email</span>
              </label>
              <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
            </div>
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span>Name</span>
              </label>
              <input type="Name" placeholder="Name" name="name" className="input input-bordered" required />
            </div>
            {/* address */}
            <div className="form-control">
              <label className="label">
                <span>Address</span>
              </label>
              <input type="Address" placeholder="Address" name="address" className="input input-bordered" required />
            </div>
            {/* NID */}
            <div className="form-control">
              <label className="label">
                <span>NID number</span>
              </label>
              <input type="NID_Number" name="nid_Number" placeholder="NID_Number" className="input input-bordered" required />
            </div>
            {/* ProbDes */}
            <div className="form-control">
              <label className="label">
                <span>Problem Description</span>
              </label>
              <input type="ProbDes" name="description" placeholder="Problem Description" className="input input-bordered" required />
            </div> 
            {/* Picture or Video */}
            <div className="form-control">
              <label className="label">
                <span>Picture or Video</span>
              </label>
              <input
                type="file"
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
