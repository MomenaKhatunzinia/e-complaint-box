

const ShowMyComplain = ({a}) => {
    const{file,description,level} = a;
    return (
        <div>
               <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure>
    <img src={a?.file} alt="Not found" />
    </figure>
  <div className="card-body">
    <h2 className="card-title">{a?.level}</h2>
    <p>{a?.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Update</button>
      <button className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShowMyComplain;