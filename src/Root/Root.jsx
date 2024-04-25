import { Outlet } from "react-router-dom";

import Navbar from "../SharedComponets/Nabvar/Navbar";


const Root = () => {
    return (
        <div className="">
            <div className="h-28 flex justify-center">
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;