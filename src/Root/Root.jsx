import { Outlet } from "react-router-dom";

import Navbar from "../SharedComponets/Nabvar/Navbar";


const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
           
            <Outlet></Outlet>
        </div>
    );
};

export default Root;