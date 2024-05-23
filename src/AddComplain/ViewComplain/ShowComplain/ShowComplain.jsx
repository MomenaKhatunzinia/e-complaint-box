

import { AiOutlineLike } from "@react-icons/all-files/ai/AiOutlineLike";
import { AiOutlineDislike } from "@react-icons/all-files/ai/AiOutlineDislike";



const ShowComplain = ({ a }) => {

  //LIke
  const handelUp =()=>
    {
      
    }

  const { address, description, file } = a;

  

  console.log("File data:", file);

  const bufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const createFileUrl = (file) => {
    if (!file || !file.buffer || !file.mimetype) {
      console.error("Invalid file data:", file);
      return null;
    }

    const base64String = bufferToBase64(file.buffer.data);
    console.log("Base64 string:", base64String);

    if (!base64String) {
      console.error("Failed to convert buffer to Base64:", file);
      return null;
    }

    return `data:${file.mimetype};base64,${base64String}`;
  };

  const fileUrl = createFileUrl(file);

  console.log("File URL:", fileUrl);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        {fileUrl && file.mimetype.startsWith('image/') && (
          <figure>
            <img src={fileUrl} alt="Uploaded content" />
          </figure>
        )}
        {fileUrl && file.mimetype.startsWith('video/') && (
          <figure>
            <video controls>
              <source src={fileUrl} type={file.mimetype} />
              Your browser does not support the video tag.
            </video>
          </figure>
        )}
        <div className="card-body">
          <h2 className="card-title">{address}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline
            gap-5
            ">
              <div

              >
              <button
              onClick={handelUp}
              ><AiOutlineLike /></button>
              </div>
            <div>
            <AiOutlineDislike></AiOutlineDislike>
            </div>
            </div>
            <div className="badge badge-outline">Comment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowComplain;
