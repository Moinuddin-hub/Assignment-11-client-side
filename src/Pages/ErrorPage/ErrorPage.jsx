import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
             <div className='h-screen flex justify-center items-center'>
             <img src="https://i.ibb.co/m5dzbgv/Error.jpg" alt="" className="" />
       <Link to='/home'><button className="btn btn-secondary">Go home</button></Link>
        </div>
        </div>
    );
};

export default ErrorPage;
