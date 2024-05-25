import axios from 'axios';
import { useState } from "react";
import { AiOutlineLike } from "@react-icons/all-files/ai/AiOutlineLike";
import { AiOutlineDislike } from "@react-icons/all-files/ai/AiOutlineDislike";

const ShowComplain = ({ a }) => {
  const { _id, address, description, file, upVote: initialUpVote, downVote: initialDownVote } = a;

  const [upVote, setUpVote] = useState(parseInt(initialUpVote, 10) || 0);
  const [downVote, setDownVote] = useState(parseInt(initialDownVote, 10) || 0);
  const [userAction, setUserAction] = useState(null);

  const handleUp = async () => {
    try {
      if (userAction === 'up') {
        setUpVote(prevUpVote => prevUpVote - 1);
        setUserAction(null);
        await axios.put(`http://localhost:5000/complain/upvote/${_id}`, { increment: -1 });
      } else {
        setUpVote(prevUpVote => prevUpVote + 1);
        if (userAction === 'down') {
          setDownVote(prevDownVote => prevDownVote - 1);
        }
        setUserAction('up');
        await axios.put(`http://localhost:5000/complain/upvote/${_id}`, { increment: 1 });
        if (userAction === 'down') {
          await axios.put(`http://localhost:5000/complain/downvote/${_id}`, { increment: -1 });
        }
      }
    } catch (error) {
      console.error("Error updating upvote count:", error);
    }
  };

  const handleDown = async () => {
    try {
      if (userAction === 'down') {
        setDownVote(prevDownVote => prevDownVote - 1);
        setUserAction(null);
        await axios.put(`http://localhost:5000/complain/downvote/${_id}`, { increment: -1 });
      } else {
        setDownVote(prevDownVote => prevDownVote + 1);
        if (userAction === 'up') {
          setUpVote(prevUpVote => prevUpVote - 1);
        }
        setUserAction('down');
        await axios.put(`http://localhost:5000/complain/downvote/${_id}`, { increment: 1 });
        if (userAction === 'up') {
          await axios.put(`http://localhost:5000/complain/upvote/${_id}`, { increment: -1 });
        }
      }
    } catch (error) {
      console.error("Error updating downvote count:", error);
    }
  };

 




  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
      
      <figure>
          <img src={file?.imageUri} alt="Not found" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{address}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end ">
            <div className="badge badge-outline gap-5 h-10 w-32">
              <div>
                <h1>{upVote}</h1>
                <button onClick={handleUp}>
                  <AiOutlineLike />
                </button>
              </div>
              <div>
                <h1>{downVote}</h1>
                <button onClick={handleDown}>
                  <AiOutlineDislike />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowComplain;
