import React, { useContext, useEffect, useState } from 'react';
import { HiBars3BottomRight, HiOutlineArrowLeftOnRectangle, HiOutlineXMark} from "react-icons/hi2";
import logo from "../../../assets/logo/write.png"
import { Link, NavLink } from 'react-router-dom';
import { userContext } from '../../../Auth/Auth';
import { toast } from 'react-toastify';
const Navbar = () => {
    const [open , setOpen] =useState(false);
const {user , logOUt} = useContext(userContext)
    const [theme , setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")


    const handleToggle = e =>{
        if(e.target.checked){
            setTheme("night")
        }
        else{
            setTheme("light")
        }
    }

    
    const handleLogOut = () => {
      logOUt()
          .then(() => {

              toast.success('Log Out Successful!', {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
              });


          })
          .catch((error) => {
              toast.error(error.message, {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
              });
          })
  }


    useEffect(()=>{
localStorage.setItem("theme" , theme)
const activeTheme = localStorage.getItem("theme");
document.querySelector("html").setAttribute("data-theme" , activeTheme)
    },[theme])


    const navItems = <>
    <li><NavLink to="/" className={({isActive}) => (isActive ? "active" : "default")}>Home</NavLink></li>
    <li><NavLink to="/resources" className={({isActive}) => (isActive ? "active" : "default")}>Resources</NavLink></li>
    <li><NavLink to="/community" className={({isActive}) => (isActive ? "active" : "default")}>Community</NavLink></li>

    <div className="form-control mx-3">
  <label className="label cursor-pointer">
    <span className="label-text mr-2 font-semibold">
        {
            theme === "light" ? "Light" : "Dark"
        }
        </span> 
    <input type="checkbox" className="toggle toggle-secondary" onChange={handleToggle} checked={theme === "light" ? false : true}/>
  </label>
</div>


{
        user ?  <div className="dropdown z-50">
  
          <div tabIndex={0} className="w-10 rounded-full">
            <img src={user.photoURL} className='w-12 rounded-full'/>
          </div>
        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 right-0 top-7 rounded-box w-52">
          
          <li><NavLink to="/profile" className={({isActive}) => (isActive ? "active" : "default")}>Profile</NavLink></li>
          <li className='myBtn my-4' onClick={handleLogOut}>Sing Out</li>
        </ul>
      </div>: <Link to="/signIn" className='myBtn inline-flex items-center gap-1 text-center'>Sing In <HiOutlineArrowLeftOnRectangle className='w-5 h-5'/></Link>
    }

    </>
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md">

<Link to="/" className='navbar-start gap-1 items-center'>
    <img src={logo} alt="Logo" className='w-10'/>
<h1 className='font-extrabold text-xl text-primary brand-title'>ByteBeats</h1>
</Link>

<div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 hidden lg:flex">
  {navItems}    
    </ul>
  </div>

  <div className="navbar-end  lg:hidden">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost" onClick={()=>setOpen(!open)}>
        {
            open ? <HiOutlineXMark className='w-8 h-8 text-error'/> : <HiBars3BottomRight className='w-8 h-8 text-primary'/>
        }
      </label>
{
    open ? <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 right-0 rounded-box w-52">
    {navItems}
          </ul> : ""
}
    </div>
  </div>




</div>
    );
};

export default Navbar;