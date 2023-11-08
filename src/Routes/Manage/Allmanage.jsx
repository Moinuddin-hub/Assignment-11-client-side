import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const AllManage = ({item}) => {

    const handleDelete =(_id)=>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'
        })

        .then(res=>res.json())
        .then(data=>{
        console.log(data);
        if (data.deletedCount > 0) {
            toast.success('Successfully Delete!')
          }
        })
    }
    console.log(item);
    const {_id,service,Photo,price,Image,Email,name,area,description}=item;
    return (
        <div>
                      <div className="card card-compact w-96 h-96 shadow-xl">
                 <figure><img src={Image} alt="" className="h-60 w-full" /></figure>
   <div className="card-body">
      <div className="flex items-center justify-between">
      <h2 className="card-title font-bold">{service}</h2>
      <div className="">
      <h1 className="text-xl font-bold ml-20">TK:{price}</h1>
      <h2 className="text-xl font-semibold ">Location:{area}</h2>
      </div>
     </div>
    <p>{description}</p>
    <div className="flex  card-actions justify-between">
       <div className="flex gap-4 items-center">
           <img src={Photo} alt="" className=" w-12 h-12 rounded-full" />
         <h2 className="text-xl font-bold">{name}</h2>
         
      </div>
      <Link to={`/update/${_id}`}><button className="btn btn-primary">Edit</button></Link>
<button onClick={()=>handleDelete(item._id)} className="btn btn-primary">Delete</button>
   </div>
 </div>
 </div> 
        </div>
    );
};

export default AllManage;