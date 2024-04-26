
import ViewComplain from "../AddComplain/ViewComplain/ViewComplain";

import Banner from "./Banner/Banner";


const Home = () => {
    return (

        <div>
          
           <div className=" ">
           <Banner></Banner>
           </div>
           
            <div className="mt-64">
            <ViewComplain></ViewComplain>
            </div>
        </div>
    );
};

export default Home;