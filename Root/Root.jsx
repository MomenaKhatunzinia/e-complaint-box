import { Outlet } from "react-router-dom";
import Home from "../src/Home/Home";
import Navbar from "../src/SharedComponets/Nabvar/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;