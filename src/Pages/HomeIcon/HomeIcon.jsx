
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { Link } from "react-router-dom";
const HomeIcon = () => {
    return (
        <div>
            <Link to={"/"}>
            <FaHome
            className="w-20 h-8 mb-2"></FaHome></Link>
        </div>
    );
};

export default HomeIcon;