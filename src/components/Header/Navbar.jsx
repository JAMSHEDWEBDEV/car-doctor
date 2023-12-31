import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);
    
    const handleLogOut = () =>{
        logOut()
        .then(()=>console.log('logOut successful'))
        .catch(error => {
            console.error(error);
        })
       }

    const Navlinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/service">Services</NavLink></li>
    <li><NavLink to="/blog">Blog</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    {
        user? <>
        <li><NavLink to="/myCart">My Cart</NavLink></li>
        <li><NavLink onClick={handleLogOut} >LogOut</NavLink></li>
        </> :
        <li><NavLink to="/login">Login</NavLink></li>
    }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Navlinks}
                    </ul>
                </div>
                <a className="normal-case text-xl"><img src={logo} alt="logo-image" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link><button className="btn btn-outline text-[#FF3811]">Appointment</button></Link>
            </div>
        </div>
    );
};

export default Navbar;