import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContex";
import { useContext } from "react";


const Banner = () => {
  const {userData} =useContext(AppContext)

    const navigate = useNavigate()
  return (
    <div className="flex   bg-primary px-6 sm:px-10 lg:px-12 my-16 md:mx-10 ">
      {/* left side  */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:pl-5">
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white leading-snug">
        <p>Experience Seamless Healthcare</p>
        <p className="mt-4">Connect with 100+ Certified Professionals</p>
      </div>

      {userData ? (
        <div className="mt-6 text-lg text-white">
          <p>Welcome back, <span className="font-bold">{userData.name}</span>!</p>
          <p className="text-sm mt-2">Explore our services and schedule your next appointment with ease.</p>
        </div>
      ) : (
        <button
          onClick={() => navigate('/login')}
          className="bg-white text-sm sm:text-base text-gray-900 py-3 px-8 rounded-full mt-6 hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Create Account
        </button>
      )}
    </div>

      {/* right side  */}
      <div  className="hidden  md:block w-1/2 lg:w-[370px] relative">

        <img className="w-full absolute bottom-0  right-0  max-w-md" src={assets.appointment_img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
