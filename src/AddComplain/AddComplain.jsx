
import Swal from "sweetalert2";
 

const AddComplain = () => {
  const handelSubmit = e =>
  {
      e.preventDefault();
      const form = e.target;
      console.log(form)
      const email = form.email.value
      const name = form.name.value
      const address = form.address.value
      const nid_Number = form.nid_Number.value
      const description = form.description.value
      const pictureorVideo = form.pictureorVideo.value

      const formComplain = {email,name,address,nid_Number, description, pictureorVideo}

      console.log(formComplain)
      form.reset();
        fetch('http://localhost:5000/Complains',{
            method:'POST',
            headers: {
                'content-type' : 'application/json '
            },
            body: JSON.stringify(formComplain)
        })
        .then(res => res.json())
        .then(data => 
          {
              console.log(data)
              Swal.fire({
                title: "Your Complain has been added",
                text: "You clicked the button!",
                icon: "success"
              });
              
  
          })
  }
    return (
          <div>
        
         
        
              <div className="hero bg-[url('https://i.ibb.co/Ld3B2CL/Complain-Box.jpg')] h-screen
            
            ">
              
  
    <div className=" rounded-xl shadow-2xl
    bg-white
    bg-opacity-85
    w-5/6">
      <form 
      onSubmit={handelSubmit}
      className="card-body font-bold text-2xl">
        <div className=
        "form-control font-bold  "
        >
          <label className="label ">
            <span className="">Email</span>
          </label>
          <input type="email" placeholder="Email" 
          name ="email"
          
          className="input input-bordered" required />
        </div>
        {/* name */}
        <div className="form-control">
          <label className="label">
            <span>Name</span>
          </label>
          <input type="Name" placeholder="Name" 
          name ="name"
          className="input input-bordered" required />
        </div>
        {/* address */}
        <div className="form-control">
          <label className="label">
            <span>Address</span>
          </label>
          <input type="Address" placeholder="Address"
          name ="address"
           className="input input-bordered" required />
        </div>
        {/* NID */}
        <div className="form-control">
          <label className="label">
            <span>NID number</span>
          </label>
          <input type="NID_Number" 
          name = "nid_Number"
          placeholder="NID_Number" className="input input-bordered" required />
        </div>
        {/* ProbDes */}
        <div className="form-control">
          <label className="label">
            <span>Problem Description</span>
          </label>
          <input type="ProbDes" 
          name = "description"
          placeholder="Problem Description" className="input input-bordered" required />
        </div>
        {/* Picture or Video */}
        <div className="form-control">
          <label className="label">
            <span>Picture or Video</span>
          </label>
          <input type="Picture or Video_Number" 
          name = "pictureorVideo"
          placeholder="Picture or Video_Number" className="input input-bordered" required />
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