
const ShowAdminPanel = ({a}) => {
    return (
        <div>
             <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Post</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>{a.name}</td>
        <td>{a.email} </td>
        <td>{a.post}</td>
        
      </tr>

    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default ShowAdminPanel;