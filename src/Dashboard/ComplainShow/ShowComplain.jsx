import { Link } from "react-router-dom";


const ShowComplain = ({a}) => {
    const {nid_number, email, address,file,_id} = a
    return (
        <div>
               <div className="overflow-x-auto">
  <table className="table">
   
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={file?.imageUri} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{nid_number}</div>
              <div className="text-sm opacity-50">{address}</div>
            </div>
          </div>
        </td>
        <td>
          {email}
          <br/>
          <span className="badge badge-ghost badge-sm">{a.level}</span>
        </td>
        <td>{a.mark}</td>
        <th>
          <Link to={`/dashboard/complainDetails/${_id}`}>
          <button className="btn btn-ghost btn-xs">details</button>
          </Link>
        </th>
      </tr>
 
    
    </tbody>
    {/* foot */}
   
    
  </table>
</div>
        </div>
    );
};

export default ShowComplain;