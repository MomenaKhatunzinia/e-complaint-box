
const ShowComplain = ({a}) => {
    console.log(a)
    const { address, description, pictureorVideo} = a
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={pictureorVideo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {address}
    
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShowComplain;