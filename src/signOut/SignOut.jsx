import { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const SignOut = () => {

    const {user,logout} = useContext(AuthContext);
    console.log(user?.photoURL?user.photoURL:user?.displayName[0])
    const handleSignout = ()=>
    {
      logout()
      .then()
      .catch()
    }
    return (
        <div className="">
            <div >
 {
      user? 
     <div className="flex justify-end 
     gap-2 mb-6" >
 
 <div className="avatar">
  <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
<img

 src={user?.photoURL}></img> 
  </div>
</div>

 <button className="brn underline text-pink-700" onClick={handleSignout}>Signout</button>

      </div>

      : 
  <div className="flex justify-end mb-6">
        <Link to={'/login'}>
     <button className="btn bg-sky-200 "> Sign In</button>
      </Link>
    </div>
    }

 </div>
        </div>
    );
};

export default SignOut;