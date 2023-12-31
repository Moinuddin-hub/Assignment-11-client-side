
const About = () => {
    return (
        <div className="mt-14  bg-slate-300">
          <h2 className="text-5xl w-1/2 lg:w-full font-bold text-center">About Us</h2>  
    <div className="hero w-1/2 lg:w-full h-full ">
  <div className="hero-content flex-col  lg:flex-row">

   <div className="w-1/2">
   <img src="https://i.ibb.co/2d5cLG4/Home.jpg" className="max-w-sm rounded-lg shadow-2xl" />
   </div>
    <div className="w-1/2 lg:w-full">
      <h1 className="text-3xl font-bold">About our service</h1>
      <p className="py-6">HomeExchange.com is a network to facilitate home exchanges. Each home has a number of points attributed, called "Guestpoints".
       Members can either do reciprocal exchanges or non-reciprocal exchanges with guestpoints. </p>
      <button className="btn btn-primary">Contact Us</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default About;