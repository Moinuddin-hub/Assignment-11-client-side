
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import ServiceCard from "./Services/ServiceCard";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Feedback from "./Feedback/Feedback";
const Home = () => {
    const users=useLoaderData();
    const user=users.slice(0,4);

   
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
           <Link to='/service'> <button className="btn btn-primary  mt-5">Show all</button></Link>
            </div>
          </div>
          <About></About>
          <Feedback></Feedback>
          <Footer></Footer>
        </div>
    );
};

export default Home;