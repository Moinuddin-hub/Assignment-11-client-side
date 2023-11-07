import { useLoaderData } from "react-router-dom";

import AllServiceCard from "./AllService/AllServiceCard";
import { useState } from "react";
const Service = () => {
    const allService=useLoaderData();
//   const [service,setService]=useState('');
const [inputValue, setInputValue] = useState("");

const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const logInputValue = () => {
    console.log("Input Value:", inputValue);
  };

    return (
        <div>
            <div className="">
                <input type="text" value={inputValue}  className="border  h-10"  onChange={handleInputChange} />
                <button onClick={logInputValue} className="btn btn-primary">search</button>
            </div>
        <div className=" grid grid-cols-3 gap-4 mt-10">
          {
            allService.map(item=><AllServiceCard key={item._id} item={item}></AllServiceCard>)
           }
      </div>
        </div>
    );
};

export default Service;