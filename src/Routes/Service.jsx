import { useLoaderData } from "react-router-dom";

import AllServiceCard from "./AllService/AllServiceCard";
import { useState } from "react";
const Service = () => {
    const allService=useLoaderData();
//   const [service,setService]=useState('');
const [inputValue, setInputValue] = useState("");
const [services,setServices]=useState(allService);
const handleInputChange = (e) => {
    setInputValue(e.target.value);
};

  const logInputValue = () => {
    // console.log(inputValue);
    setServices(allService.filter(item=>item.service.toLowerCase().includes(inputValue.toLowerCase())))
  };

    return (
        <div>
            <div className="mt-8 ">
                <input type="text" value={inputValue}  className="border-black border-2 h-10"  onChange={handleInputChange} />
                <button onClick={logInputValue} className="btn btn-primary">search</button>
            </div>
        <div className=" grid grid-cols-3 gap-4 mt-10">
          {
            services.map(item=><AllServiceCard key={item._id} item={item}></AllServiceCard>)
           }
      </div>
        </div>
    );
};

export default Service;