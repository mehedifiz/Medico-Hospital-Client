import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContex";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="py-16 bg-gray-50 text-gray-900 px-4 md:px-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Top Doctors to Book</h1>
        <p className="text-gray-600 mt-2 text-sm sm:w-2/3 md:w-1/2 mx-auto">
          Browse through our list of highly trusted doctors and schedule your appointment effortlessly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {doctors.slice(0, 10).map((doctor, idx) => (
          <div
            key={idx}
            onClick={() => {
              navigate(`/appointment/${doctor._id}`);
              scrollTo(0, 0);
            }}
            className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full  object-cover group-hover:scale-105 transition-transform duration-300"
              />
               {doctor.available  ? <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full"> Available </div> :<div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                Not Available
               </div> 

                
             }
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
              <p className="text-sm text-gray-600">{doctor.speciality}</p>
              <div className="mt-2 flex items-center text-sm text-yellow-500">
                <span className="material-icons">star</span>
                <span className="ml-1 text-gray-600">4.5 (120 reviews)</span>
              </div>
              <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                Experienced in {doctor.speciality}, dedicated to providing the best healthcare solutions.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => {
            navigate("/doctors");
            scrollTo(0, 0);
          }}
          className="px-10 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          View All Doctors
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;
