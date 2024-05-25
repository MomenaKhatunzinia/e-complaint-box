import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ComplainDetails = () => {
  const data = useLoaderData();
  const [mark, setMark] = useState(data.mark || "Pending");

  const handleLevelChange = async (newMark) => {
    setMark(newMark);

    const updatedComplain = {
      ...data,
      mark: newMark
    };

    try {
      const response = await fetch(`http://localhost:5000/updateComplaint/${data._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedComplain),
      });

      if (response.ok) {
        console.log('Status updated successfully');
      } else {
        console.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={data.file?.imageUri} alt="Complaint" /></figure>
        <div className="card-body">
          <h2 className="card-title">{data.address}</h2>
          <p>{data.description}</p>
          <div className="card-actions justify-end">
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button" className="btn m-1 btn-primary">
                {mark} {/* Display the current mark status */}
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a onClick={() => handleLevelChange("Pending")}>Pending</a></li>
                <li><a onClick={() => handleLevelChange("Fixing")}>Fixing</a></li>
                <li><a onClick={() => handleLevelChange("Done")}>Done</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ComplainDetails;
