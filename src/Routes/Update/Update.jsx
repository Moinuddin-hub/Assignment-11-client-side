import { useContext } from "react";
import { AuthContext } from "../../Pages/Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";


const Update = () => {
    const {user}=useContext(AuthContext);
    const update=useLoaderData();
    console.log(update);
  const handleUpdate=(e)=>{
    e.preventDefault();
    const service=e.target.service.value;
    const photo=e.target.photo.value;
    const price=e.target.price.value;
    const image=e.target.image.value;
    const email=e.target.email.value;
    const name=e.target.name.value;
    const area=e.target.area.value;
    const description=e.target.description.value;
    const user={service,photo,price,image,email,name,area,description};
    console.log(user);
    fetch(` https://assignment-11-server-plum-gamma.vercel.app/users/${update._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount>0){
            toast.success('Update date successfully!')
        }
      });
  }

    return (
        <div>
          
      <form  onSubmit={handleUpdate} className="p-16">

      <div className="text-center mt-4">
            <h2 className="text-3xl font-bold">Update</h2>
          </div>
     <div className="grid grid-cols-2 gap-4"> 
      <div className="">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Service Name</span>
          </label>
          <input type="text" defaultValue={update?.service} name="service" placeholder="Write name" className="input input-bordered" required />
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
          <input type="text" name="image"   placeholder="Provide image" className="input input-bordered" required />

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
          <input type="text" name="description"  placeholder="write description" className="input input-bordered" required />
        </div>
        </div>
   </div>



        <div className="form-control mt-6">
          <button  className="btn btn-primary font-bold">Update</button>
        </div>
      </form> 
        </div>
    );
};

export default Update;