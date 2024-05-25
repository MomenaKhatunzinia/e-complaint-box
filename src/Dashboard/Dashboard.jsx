import { Link, Outlet } from "react-router-dom";




const Dashboard = () => {
  const links = <>
    <li><Link to={'/'}> Home</Link></li>
  <li><Link to={'/dashboard/complain'}> Complains</Link></li>
  <li><Link to={'/dashboard/addAdmin'}> Add Admin</Link></li>
  <li><Link to={'/dashboard/admin'}> Admin List</Link></li>
  </>
    return (
       <div className="flex">
         <div className="flex justify-around">
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open SideBar</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {links}
    </ul>
  
  </div>
</div>
{/* <div className=" mx-72">
        <Profile></Profile>
</div> */}
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
       </div>
    );
};

export default Dashboard;