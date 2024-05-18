import { useState } from "react";


const MyComplain = () => {
    const [file, setFile] = useState(null);
  
  
    const handleFileChange = (e) => {
      console.log("handelFile")
      const selectedFile = e.target.files[0]; 
      console.log(selectedFile.name)
      setFile(selectedFile.name);
      
    }
    
    const handelSubmit=()=>
    {
    const fd = new FormData();
    fd.append('image', file,  File.name)
    for (const pair of fd.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
    }

    return (
        <div>
             <div className="form-control">
              <label className="label">
                <span>Picture or Video</span>
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="input input-bordered"
                accept="image/*, video/*" 
                required
              />
            </div>
            <button 
            onClick={handelSubmit}
            >Upload</button>
        </div>
    );
};

export default MyComplain;