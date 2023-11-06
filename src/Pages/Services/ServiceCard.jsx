

const ServiceCard = ({data}) => {
    console.log(data);
    const {service,Photo,price,Image,Email,name,area,description}=data;
    return (
        <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src={Image} alt="" className="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{service}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;