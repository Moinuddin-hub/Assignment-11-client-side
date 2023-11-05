import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hook/useAuth";
const Navbar = () => {
  const{user,logOut}=useAuth();
  //   const navLinks=  <>
      

            
       
  //               </>

  //   return (
  //       <div className="navbar bg-base-100">
  //       <div className="navbar-start">
  //         <div className="dropdown">
  //           <label tabIndex={0} className="btn btn-ghost lg:hidden">
  //             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  //           </label>
  //           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
  //               {navLinks}
       
  //           </ul>
  //         </div>
  //         <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  //       </div>
  //       <div className="navbar-end hidden lg:flex">
  //         <ul className="menu menu-horizontal px-1">
  //         {navLinks}
  //         </ul>
  //       </div>
        
  //       </div>
  //     </div>
  //   );
return (
<div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li> <NavLink to='/home'className={({isActive})=>
                isActive? 'btn btn-primary btn-sm' :'btn btn-ghost btn-sm'}>
                Home</NavLink></li>
        <li>
        <li> <NavLink to='/dashboard'className= {({isActive})=>
             isActive? 'btn btn-primary btn-sm' :'btn btn-ghost btn-sm'}>
               Dashboard </NavLink> </li>   
          <ul className="p-2">
          <li> <NavLink to='/home'className={({isActive})=>
                isActive? 'btn btn-primary btn-sm' :'btn btn-ghost btn-sm'}>
                My-service</NavLink></li>
                <li className="py-4"> <NavLink to='/home'className={({isActive})=>
                isActive? 'btn btn-primary btn-sm' :'btn btn-ghost btn-sm'}>
                Add-services</NavLink></li>
                <li> <NavLink to='/home'className={({isActive})=>
                isActive? 'btn btn-primary btn-sm' :'btn btn-ghost btn-sm'}>
                My-schedules</NavLink></li>
          </ul>
        </li>
        <li>  <NavLink to='/service'className={({isActive})=>
                isActive? 'btn btn-primary btn-sm' :'btn btn-ghost btn-sm'}>
                Service</NavLink></li>
      </ul>
    </div>
   <div className="w-24 h-20 rounded-lg ">
   <img src="https://i.ibb.co/BLjySXK/logo.jpg" alt="" className=" rounded-lg" />
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
               <NavLink to='/home'className={({isActive})=>
                isActive? 'btn btn-primary btn-sm' :'btn btn-ghost btn-sm'}>
                Home</NavLink>
      <li tabIndex={0}>
         {
          user?.email? 
          <details>
          <summary>
                    
           <li> <NavLink to='/dashboard'className= {({isActive})=>
             isActive? 'btn btn-primary btn-sm' :'btn btn-ghost btn-sm'}>
               Dashboard </NavLink> </li>                  
             </summary>
          <ul className="p-2 py-4">
           <li> <NavLink to='/home'className={({isActive})=>
                isActive? 'btn btn-primary btn-sm' :'btn btn-ghost btn-sm'}>
                My-service</NavLink></li>
                <li className="py-4"> <NavLink to='/home'className={({isActive})=>
                isActive? 'btn btn-primary btn-sm' :'btn btn-ghost btn-sm'}>
                Add-services</NavLink></li>
                <li> <NavLink to='/home'className={({isActive})=>
                isActive? 'btn btn-primary btn-sm' :'btn btn-ghost btn-sm'}>
                My-schedules</NavLink></li>
          </ul>
    
        </details>
        :<p></p>
         }
      </li>
             <li>  <NavLink to='/service'className={({isActive})=>
                isActive? 'btn btn-primary btn-sm' :'btn btn-ghost btn-sm'}>
                Service</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="">
        {
                        user?.email ?    <div className="flex items-center">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                           
                  
                            </ul>
                        </div>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
  </div>
</div>
</div>
)
};

export default Navbar;