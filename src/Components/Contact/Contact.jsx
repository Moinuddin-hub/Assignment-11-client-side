

const Contact = () => {
    return (
        <div>
                           <h2 className="text-3xl text-center font-bold ">Contact Us</h2>
               <div className="hero ml-4 lg:ml-0  w-96 lg:w-full bg-gray-600">
            
  <div className="hero-content  flex-col lg:flex-row-reverse">
    <div className="text-center  lg:text-left text-white">
    <h1 className="text-3xl lg:5xl mt-0 font-bold">Contact now!</h1>
      <p className="py-6 text-left">Far too many website designers put contact pages 
      near the bottom of their priority list in terms of copywriting and design.
       It’s no wonder that many contact pages look like they were built in the 1990s,
       while the rest of the website is beautiful and updated.</p>
      <div className="">
        <button className='btn btn-primary'>Contact us</button>
      </div>
    </div>

    <div className="card flex-shrink-0 w-72 h-full max-w-sm shadow-2xl ">
      <form className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Phone</span>
          </label>
          <input type="number" placeholder="Phone" className="input input-bordered" required />
       
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Massage</span>
          </label>
         <textarea name="" id="" cols="10" rows="5" className="border"></textarea>
        
        
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>

  </div>
</div>
        </div>
    );
};

export default Contact;