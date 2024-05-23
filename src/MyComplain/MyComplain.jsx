import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ShowMyComplain from "./ShowMyComplain";



const MyComplain = () => {
  const [my, setMy] = useState(null);
  const { user } = useContext(AuthContext);
  const email = user?.email;
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/complains/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setMy(data);
          console.log(data)
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [email]);
  
  console.log(my)
    return (
      <div className="grid 
      grid-cols-1
      md:grid-cols-1
      md: px-44
      lg:grid-cols-2 gap-3">
      
        {
              my?.map(a=>
                <ShowMyComplain
                key={a._id}
                a={a}
                >

                </ShowMyComplain>
                  )
          }
     
      </div>
    );
};

export default MyComplain;