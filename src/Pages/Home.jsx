
import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import ServiceCard from "./Services/ServiceCard";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Feedback from "./Feedback/Feedback";
const Home = () => {
    const user=useLoaderData();
    // const user=users.slice(0,4);

   
    return (
        <div>
          <Banner></Banner>
          <div className=" mt-10">

          <h2 className="text-5xl font-bold text-center ">Our service</h2>
         <div className=" grid grid-cols-2 gap-4 ml-16 mt-10">
         {
            user.map(data=><ServiceCard key={data._id} data={data}></ServiceCard>)
          }
         </div>
            <div className="mx-auto w-full text-center">
            <button className="btn btn-primary  mt-5">Show all</button>
            </div>
          </div>
          <About></About>
          <Feedback></Feedback>
          <Footer></Footer>
        </div>
    );
};

export default Home;