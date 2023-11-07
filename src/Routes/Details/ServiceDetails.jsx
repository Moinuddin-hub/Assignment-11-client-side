import { Link, useLoaderData } from "react-router-dom";



const ServiceDetails = () => {
    const details=useLoaderData();
    const {_id,service,Photo,price,Image,Email,name,area,description}=details;
    return (
        <div>
              <div className="hero mt-8 bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={Image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{service}</h1>
      <p className="py-6">{description}</p>

      <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
      <p className="text-2xl font-bold">Price:{price}Tk</p>
       <div className="flex mt-4 ">
        <div className="flex gap-8 items-center">
            <img src={Photo} alt="" className=" w-16 h-16 rounded-full" />
            <h2 className="text-xl font-bold">{name}</h2>
        </div>
       
       </div>
       {/* <button className="btn btn-primary mt-4">Book Now</button> */}
       
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceDetails;