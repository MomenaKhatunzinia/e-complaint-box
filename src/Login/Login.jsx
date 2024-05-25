import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";

// import {  useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const[success, setSuccess] = useState('');
    const [error, setError] =
      useState('')
    const { SignIn,googleSignIn} = useContext(AuthContext)

    const handelSignIn = (e) =>
    {
   

        e.preventDefault();
      const form = new FormData(e.currentTarget)
    
      const email = form.get('email')
      const password = form.get('password')
        setSuccess('')
        setError('')
       
      SignIn(email,password)
     
      .then(result =>
         { console.log(result.user);
          
          
          setSuccess('Successfully')
          Swal.fire("Login Successful");
        }
          )
          .catch(error =>
              {console.log(error);
              setError(error.message)
              Swal.fire("Information Incorrect");})

  }
  const handelGoogle = () =>
  {
    googleSignIn()
    .then(result =>
      { console.log(result.user);
       
        setSuccess('Successfully')
        
       
      }
       )
       .catch(error =>
           console.log(error))

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form
      onSubmit={handelSignIn}
      className="card-body">
     
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
          name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" 
          name="password"
          className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-sky-200  text-black">Sign In</button>
         <div className="flex justify-center items-center">
         {/* <FcGoogle></FcGoogle> */}
          <button
          
          onClick={handelGoogle}
          >

google
          </button>
         </div>
        </div>
        <Link to={'/register'}>
        <button className="btn btn-primary w-full bg-sky-200 text-black">Register</button>
        </Link>
        <h1>{error}</h1>
      </form>
    
    </div>
   
  </div>
</div>  
        </div>
    );
};

export default Login;