import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContex";
const Navbar = () => {
  const navigate = useNavigate();

  const navlink = (
    <>
      <NavLink  onClick={()=> setShowmenu(false)}  to="/" >
        <li className="py-1 ">Home</li>
        <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
      </NavLink>
      <NavLink  onClick={()=> setShowmenu(false)}  to="/doctors">
        <li className="py-1 ">All Doctors</li>
        <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
      </NavLink>
      <NavLink   onClick={()=> setShowmenu(false)}  to="/about">
        <li className="py-1 ">About Us</li>
        <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
      </NavLink>
      <NavLink  onClick={()=> setShowmenu(false)}  to="/contact">
        <li className="py-1 ">Contact</li>
        <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
      </NavLink>
    </>
  );

  const [showMenu, setShowmenu] = useState(false);

  const { token, setToken , userData} = useContext(AppContext);

  const logOut =()=>{
    navigate('/')
    setToken(false);
    localStorage.removeItem('token')
  }
 
  

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 ">
      <h2 className="md:text-4xl text-xl font-semibold cursor-pointer"> <span className="text-primary font-extrabold ">M</span>edico</h2>

      <ul className="hidden md:flex items-start gap-5 font-medium ">
        <NavLink to="/">
          <li className="py-1 ">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1 ">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 ">About Us</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1 ">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center  cursor-pointer gap-2  group relative">
            <img src={userData.image} className=" w-9 h-9 object-cover rounded-full" />
            <img src={assets.dropdown_icon} className="w-2.5" />

            <div
              className="absolute top-0 text-base right-0 pt-14 font-medium text-gray-600 
                        z-20 hidden group-hover:block"
            >
              <div className="min-w-40 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer "
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="hover:text-black cursor-pointer "
                >
                  My Appointments
                </p>
                <p
                  onClick={logOut}
                  className="hover:text-black cursor-pointer "
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-bold hidden md:block"
          >
            Create Account
          </button>
        )}

        <img
          onClick={() => setShowmenu(true)}
          src={assets.menu_icon}
          className="w-6 md:hidden "
        />

        {/* moblie menu */}

        <div
        className={`${
          showMenu ? "fixed w-full h-screen" : "h-0 w-0"
        } md:hidden right-0 top-0 py-6 z-20 bg-white transition-all overflow-hidden`}
      >
        <div className="flex justify-between px-5">
          <img
            onClick={() => navigate("/")}
            src={assets.logo}
            className="w-24 cursor-pointer"
            alt="Logo"
          />
          <img
            src={assets.cross_icon}
            className="w-6 h-6 cursor-pointer"
            onClick={() => setShowmenu(false)}
            alt="Close Icon"
          />
        </div>
        <ul className="mt-5 w-full flex flex-col items-center gap-5">{navlink}</ul>
      </div>



      </div>



    </div>
  );
};

export default Navbar;
