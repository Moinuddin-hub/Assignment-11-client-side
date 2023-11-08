import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Pages/Provider/AuthProvider";
import toast from "react-hot-toast";



const ServiceDetails = () => {
    const {user}=useContext(AuthContext);
    const details=useLoaderData();
    const {_id,service,Photo,price,Image,Email,name,area,description}=details;

  const handleSubmit=(e)=>{
    e.preventDefault();
    const service=e.target.service.value;
    const Photo=e.target.photo.value;
    const price=e.target.price.value;
    const Image=e.target.image.value;
    const Email=e.target.email.value;
    const name=e.target.name.value;
    const Date=e.target.date.value;
    const description=e.target.description.value;
    const user={service,Photo,price,Image,Email,name,Date,description};
    console.log(user);
   
    fetch('http://localhost:5000/bookings',{
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
         <div className="mt-2 ">
        <div className="flex gap-8 items-center">
            <img src={Photo} alt="" className=" w-16 h-16 rounded-full" />
            <div className="">
            <h2 className="text-xl font-bold">Provider Name:<br/>{name}</h2>
            <h2 className="text-2xl font-bold">Location:{area}</h2>
            </div>
        </div>
       
         <p className="w-46">I am repair man won't you take a bow, come on give me space, tell me which part aches
       </p>
       </div>
     <div className="hero mt-8 ">
       <div className="hero-content flex-col lg:flex-row">
       <img src={Image} className="max-w-sm h-full rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold">{service}</h1>
      <p className="">{description}</p>

      <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
      <p className="text-2xl font-bold">Price:{price}Tk</p>

       {/* <button className="btn btn-primary mt-4">Book Now</button> */}
       {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-primary mt-2" onClick={()=>document.getElementById('my_modal_5').showModal()}>Book Now</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box w-full">
  <div className="card flex-shrink-0  mx-auto shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit}  className="p-16">
     <div className="grid grid-cols-2 gap-4"> 
      <div className="">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Service Name</span>
          </label>
          <input type="text" name="service" defaultValue={service} readOnly placeholder="Write name" className="input input-bordered" required />
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
          <input type="text" name="image" defaultValue={Image} readOnly  placeholder="write image link" className="input input-bordered" required />

        </div>
      </div>

     <div className="">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email} readOnly  placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Your Name</span>
          </label>
          <input type="text" name="name" readOnly defaultValue={user?.displayName}  placeholder="provider name" className="input input-bordered" required />
      
        </div>

   
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Date:</span>
          </label>
          <input type="date" name="date"  placeholder="write area" className="input input-bordered" required />
        </div>
       

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Instruction</span>
          </label>
          <input type="text" name="description"   placeholder="write description" className="input input-bordered" required />
        </div>
        </div>
   </div>
        <div className="flex justify-center mt-4">
        <button className="btn btn-primary font-bold">Purchase</button>
        </div>
   </form>
    </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>

  </div>
</dialog>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceDetails;