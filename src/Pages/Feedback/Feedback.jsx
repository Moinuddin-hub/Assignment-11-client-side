

const Feedback = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-4 w-1/2 lg:w-full text-green-500">Feedback Corner</h2>
            <div className=" grid grid-col-1 lg:grid-cols-3 ml-16 lg:ml-0 gap-8 mt-8">
            <div className="card w-96 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">MD:AKRUM KHUN</h2>
    <p>We’ve covered why asking for customer feedback is important and the types of questions to include, but you still might be wondering how to put it all together.</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
      
<div className="card w-96 transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-primary text-primary-content ">
  <div className="card-body">
    <h2 className="card-title">MD:MOIN UDDIN</h2>
    <p>Customer satisfaction surveys help businesses better understand and utilize the voice of the customerto sustain growth. There are several key reasons above and beyond this overarching goal
         </p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>

<div className="card w-96 transition ease-in-out delay-150  bg-gray-500 hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-primary  text-primary-content">
  <div className="card-body">
    <h2 className="card-title">MD:ABUL KALAM </h2>
    <p>The primary purpose of customer satisfaction surveys is to gather customer feedback about anything from the ease of using a product to the quality of service provided by customer support agents.</p>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Feedback;