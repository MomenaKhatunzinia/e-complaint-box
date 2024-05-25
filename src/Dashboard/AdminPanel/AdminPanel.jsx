import { useLoaderData } from "react-router-dom";
import ShowAdminPanel from "./ShowAdminPanel";


const AdminPanel = () => {
  const data = useLoaderData();

  return (
    <div>
      {
        data?.map(a=>
          <ShowAdminPanel
          key={a._id}
          a={a}
          >

          </ShowAdminPanel>
        )
      }
    </div>
  );
};

export default AdminPanel;