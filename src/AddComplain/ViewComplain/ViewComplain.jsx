
import ShowComplain from "./ShowComplain/ShowComplain";
import { useEffect, useState } from "react";



const ViewComplain = () => {
    const [loadData, setLoadData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/Complains')
          .then((res) => res.json())
          .then((data) => {
            setLoadData(data);
          })
          .catch((error) => {
            console.error( error);
          });
      }, []);
  
    return (
        <div className="grid 
        grid-cols-1
        md:grid-cols-1
        md: px-44
        lg:grid-cols-2 gap-3">
        
          {
                loadData?.map(a=>
                   <ShowComplain
                   key={a._id}
                   a={a}
                   >
                   </ShowComplain>
                    )
            }
       
        </div>
    );
};

export default ViewComplain;