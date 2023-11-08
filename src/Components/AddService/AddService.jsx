import { useContext} from "react";
import { AuthContext } from "../../Pages/Provider/AuthProvider";
import toast from "react-hot-toast";


const AddService = () => {
    const {user}=useContext(AuthContext);
   

     const handleSubmit=(e)=>{
        e.preventDefault();
        const service=e.target.service.value;
        const Photo=e.target.photo.value;
        const price=e.target.price.value;
        const Image=e.target.image.value;
        const Email=e.target.email.value;
        const name=e.target.name.value;
        const area=e.target.area.value;
        const description=e.target.description.value;
        const user={service,Photo,price,Image,Email,name,area,description};
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                toast.success('Successfully added!')
            }
        }
            )
  
     }
   
    return (
        <div>
              {/* <div className="hero min-h-screen bg-base-200"> */}
  {/* <div className="hero-content flex-col lg:flex-row-reverse"> */}
 
    <div className="card flex-shrink-0 w-1/2 mx-auto shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="p-16">
     <div className="grid grid-cols-2 gap-4"> 
      <div className="">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Service Name</span>
          </label>
          <input type="text" name="service" placeholder="Write name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Picture URL</span>
          </label>
          <input type="text" name="photo"  defaultValue={user?.photoURL} placeholder="Picture url" className="input input-bordered" required />
        </div>

   
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Price</span>
          </label>
          <input type="number" name="price"   placeholder="write price" className="input input-bordered" required />

        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Service Image</span>
          </label>
          <input type="text" name="image"   placeholder="write price" className="input input-bordered" required />

        </div>
      </div>

     <div className="">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email}  placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Your Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.displayName}  placeholder="provider name" className="input input-bordered" required />
      
        </div>

   
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Service area:</span>
          </label>
          <input type="text" name="area"  placeholder="write area" className="input input-bordered" required />
        </div>
       

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Description</span>
          </label>
          <input type="text" name="description"   placeholder="write description" className="input input-bordered" required />
        </div>
        </div>
   </div>



        <div className="form-control mt-6">
          <button className="btn btn-primary font-bold">Add-Service</button>
        </div>
      </form>
    </div>
    
  </div>
// </div>
        // </div>
    );
};

export default AddService;