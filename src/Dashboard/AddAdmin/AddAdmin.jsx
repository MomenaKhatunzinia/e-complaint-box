
import Swal from "sweetalert2";

const AddAdmin = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const post = form.post.value;
    
    const email = form.email.value;
    const name = form.name.value;

   const fromInfo = {email, post, name};
console.log(fromInfo)
    fetch("http://localhost:5000/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fromInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Admin has been added",
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
       <div className="hero min-h-screen bg-sky-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form
      onSubmit={handleSubmit}
      className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Post</span>
          </label>
          <input type="Post" placeholder="Post" 
          name="post"
          className="input input-bordered" required />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="Name" placeholder="Name" 
          name="name"
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
          name="email" placeholder="Email" className="input input-bordered" required />
        </div>
     
        <div className="form-control mt-6 gap-7">
          <button className="btn btn-primary bg-sky-200 text-black">Add Admin</button>

        </div>
        
      </form>
    
    </div>
   
  </div>
</div> 
    </div>
  );
};

export default AddAdmin;
