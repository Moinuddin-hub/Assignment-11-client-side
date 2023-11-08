import { useLoaderData } from "react-router-dom";
import AllManage from "./Allmanage";

const Manage = () => {
    const manage=useLoaderData();
    // console.log(manage);
    return (
        <div>
           <div className="grid grid-cols-3 gap-4 mt-4">
           {
                manage.map(item=><AllManage key={item._id} item={item}></AllManage>)
            }
           </div>
        </div>
    );
};

export default Manage;