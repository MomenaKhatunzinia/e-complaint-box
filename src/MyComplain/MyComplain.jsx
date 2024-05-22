import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyComplain = () => {
  const [my, setMy] = useState(null);
  const { user } = useContext(AuthContext);
  const email = user?.email;
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/Complains?email=${email}`)
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
  
  
    return (
        <div>
            
        </div>
    );
};

export default MyComplain;