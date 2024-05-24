import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext)
console.log(user)
    return (
        <div className="flex justify-center  ">
            <div className="avatar">
        <div className="w-24 rounded">
        <img src={user?.photoURL} alt={user?.displayName}/>
        </div>
        <h1>{user?.displayName}</h1>
      </div>
        </div>
    );
};

export default Profile;