import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext)
console.log(user)
    return (
        <div className="avatar">
        <div className="w-24 rounded">
        <img src={user?.photoURL} alt={user?.displayName}/>
        </div>
      </div>
    );
};

export default Profile;