
import ShowComplain from "./ShowComplain/ShowComplain";
import { useEffect, useState } from "react";



const ViewComplain = () => {
    // const [loadData, setLoadData] = useState(null);
    const [publicComplains, setPublicComplains] = useState(null);

    useEffect(() => {
      fetch('http://localhost:5000/Complains')
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            const publicData = data.filter((item) => item.level === "Public" && item.mark !='Done');
            setPublicComplains(publicData);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    // useEffect(() => {
    //   if (loadData) {
    //     const publicData = loadData.filter((item) => item.level.toLowerCase() === "public");
    //     setPublicComplains(publicData);
    //   }
    // }, [loadData]);

    return (
        <div className="grid 
        grid-cols-1
        md:grid-cols-1
        md: px-44
        lg:grid-cols-2 gap-3">
        
          {
                publicComplains?.map(a=>
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