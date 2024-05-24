import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowMyComplain = ({ a, onDelete }) => {
  const { _id, file, description, level } = a;

  const handleDelete = () => {
    fetch(`http://localhost:5000/DeleteComplains/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Complaint Deleted",
          text: "The complaint has been successfully deleted.",
          icon: "success",
        });
        // Optionally, trigger a state update or refresh the component
        if (onDelete) {
          onDelete(_id);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while deleting the complaint.",
          icon: "error",
        });
      });
  };

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={file?.imageUri} alt="Not found" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{level}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/update/${_id}`}>
              <button className="btn btn-primary">Update</button>
            </Link>
            <button onClick={handleDelete} className="btn btn-primary">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMyComplain;
