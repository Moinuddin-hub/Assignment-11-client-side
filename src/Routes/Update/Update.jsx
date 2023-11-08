import { useContext } from "react";
import { AuthContext } from "../../Pages/Provider/AuthProvider";


const Update = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
              <form  className="p-16">
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
          <button className="btn btn-primary font-bold">Update</button>
        </div>
      </form> 
        </div>
    );
};

export default Update;