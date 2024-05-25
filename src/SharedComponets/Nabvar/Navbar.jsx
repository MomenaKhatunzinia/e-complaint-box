import { Link } from "react-router-dom";
import {  BsBoxArrowInDown } from "@react-icons/all-files/bs/BsBoxArrowInDown";
import HomeIcon from "../../Pages/HomeIcon/HomeIcon";
import SignOut from "../../signOut/SignOut";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {

  const [admins, setAdmins] = useState([]);
const{user} = useContext(AuthContext);
  useEffect(()=>
    {
  
  axios.get("http://localhost:5000/admins")
  .then((response) => {
    console.log("Fetched admins:", response.data);
    setAdmins(response.data);
  })
  .catch((error) => {
    console.error("Error fetching admins:", error);
    Swal.fire({
      title: "Error!",
      text: "There was an error fetching admin data.",
      icon: "error",
    });
  });
}, []);

console.log(user?.email)

const adminEmail = admins?.filter(a=>
  a?.email == user?.email
)
console.log(adminEmail)

  const link = <>
  <li><Link to={'/myComplain'}> My Complain</Link></li>
  <li ><Link to={'/addComplain'}>Add Complain</Link></li>
  <li ><Link to={'/register'}>Register</Link></li>
  <li ><Link to={'/login'}>Login</Link></li>
  <li ><Link to={'/profile'}>Profile</Link></li>

  {adminEmail.length>0 && <li><Link to={'/dashboard'}>Dashboard</Link></li>}

  </>
    return (
      <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {link}
           
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
         <BsBoxArrowInDown></BsBoxArrowInDown>
          E-gov-ComplainBox</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>
  
      <div className="navbar-end">
        <SignOut></SignOut>
        <HomeIcon></HomeIcon>
      </div>
    </div>
   
    );
};

export default Navbar;