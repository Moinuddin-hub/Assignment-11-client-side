
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import ServiceCard from "./Services/ServiceCard";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Feedback from "./Feedback/Feedback";
import Contact from "../Components/Contact/Contact";
const Home = () => {
    const users=useLoaderData();
    const user=users.slice(0,4);

   
    return (
        <div>
          <Banner></Banner>
          <div className=" mt-10">

          <h2 className="text-5xl font-bold w-1/2 lg:w-full text-center lg:text-center ">Our service</h2>
         <div className=" bg-slate-100 py-4 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 w-1/2 lg:w-full mt-10">
         {
            user.map(data=><ServiceCard key={data._id} data={data}></ServiceCard>)
          }
         </div>
            <div className="mx-auto w-1/2 lg:w-full lg:text-center">
           <Link to='/service'> <button className="btn btn-primary   mt-5">Show all</button></Link>
            </div>
          </div>
          <About></About>
          <Contact></Contact>
          <Feedback></Feedback>
          {/* <MapContainer></MapContainer> */}
          <Footer></Footer>
        </div>
    );
};

export default Home;