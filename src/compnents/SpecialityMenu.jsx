import { specialityData } from "../assets/assets";
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
    return (
        <div className="flex flex-col items-center py-16 gap-4 text-gray-800 " id="#speciality">

            <h1 className="text-3xl font-medium">Find by Speciality </h1>

            <p className="sm:w-1/3 text-center text-sm">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>

            <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
                {
                    specialityData.map((data , idx) => (
                        <Link onClick={()=>scrollTo(0,0)} className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0  hover:translate-y-[-10px] transition-all duration-500 "  key={idx} to={`/doctors/${data.speciality}`}>
                            <img className="w-16 sm:2-24 mb-2" src={data.image} alt="" />
                            <p >{data.speciality}</p>

                        </Link>
                    ))
                }

            </div>



            
        </div>
    );
};

export default SpecialityMenu;