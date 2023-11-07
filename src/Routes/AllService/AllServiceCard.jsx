

const AllServiceCard = ({item}) => {
    const {service,Photo,price,Image,Email,name,area,description}=item;
    return (
        <div>
        <div className="card card-compact w-96 h-96 shadow-xl">
                 <figure><img src={Image} alt="" className="h-60 w-full" /></figure>
   <div className="card-body">
      <div className="flex items-center justify-between">
      <h2 className="card-title font-bold">{service}</h2>
      <div className="">
      <h1 className="text-xl font-bold">TK:{price}</h1>
      <h2 className="text-xl font-bold">{area}</h2>
      </div>
     </div>
    <p>{description}</p>
    <div className="flex  card-actions justify-between">
       <div className="flex gap-4 items-center">
           <img src={Photo} alt="" className=" w-12 h-12 rounded-full" />
         <h2 className="text-xl font-bold">{name}</h2>
         
      </div>
    <button className="btn btn-primary">View Details</button>
   </div>
 </div>
 </div> 
        </div>
    );
};

export default AllServiceCard;