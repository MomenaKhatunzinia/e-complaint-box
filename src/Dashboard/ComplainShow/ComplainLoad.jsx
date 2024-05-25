import { useLoaderData } from "react-router-dom";
import ShowComplain from "./ShowComplain";


const ComplainLoad = () => {
    const loadData = useLoaderData()
    console.log(loadData)
    return (
        <div>

 <table className="table">
 <thead>
      <tr>
        <th>
          <label>
          
          </label>
        </th>
        <th>Nid Number & Address</th>
        <th>Email & Post Label</th>
        <th>Marking</th>
        <th></th>
      </tr>
    </thead>
 </table>
             
         {
            loadData?.map(a=>
                <ShowComplain
                key={a._id}
                a={a}
                >

                </ShowComplain>
            )
         }
        <table className="table">
        <tfoot>
      <tr>
        <th></th>
        <th>Nid Number & Address</th>
        <th>Email & Post Label</th>
        <th>Marking</th>
        <th></th>
      </tr>
    </tfoot>
        </table>
        </div>
    );
};

export default ComplainLoad;