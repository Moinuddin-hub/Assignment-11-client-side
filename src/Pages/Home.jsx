
import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import ServiceCard from "./Services/ServiceCard";
const Home = () => {
    const user=useLoaderData();
    // console.log(user);
   
    return (
        <div>
          <Banner></Banner>
         <div className=" grid grid-cols-2">
         {
            user.map(data=><ServiceCard key={data._id} data={data}></ServiceCard>)
          }
         </div>
        </div>
    );
};

export default Home;