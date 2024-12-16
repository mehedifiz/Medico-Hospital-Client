import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContex";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      console.log(doctors.filter((doc) => doc.speciality === speciality));
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600 ">Browse through the doctors specialist.</p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div
          className={`flex flex-col gap-4 text-sm text-gray-600 *:w-[94vw] *:sm:w-auto *:pl-3 *:py-1.5 *:pr-16 *:border *:border-gray-300 *:rounded *:transition-all *:cursor-pointer   `}
        >
          <p
            className={`${
              speciality === "General physician"
                ? "bg-indigo-50 text-black "
                : ""
            }`}
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
          >
            General physician
          </p>

          <p
            className={`${
              speciality === "Gynecologist" ? "bg-indigo-50 text-black " : ""
            }`}
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
          >
            Gynecologist
          </p>

          <p
            className={`${
              speciality === "Dermatologist" ? "bg-indigo-50 text-black " : ""
            }`}
            onClick={() =>
              speciality === " "
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
          >
            Dermatologist
          </p>

          <p
            className={`${
              speciality === "Pediatricians" ? "bg-indigo-50 text-black " : ""
            }`}
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
          >
            Pediatricians
          </p>
          <p
            className={`${
              speciality === "Neurologist" ? "bg-indigo-50 text-black " : ""
            }`}
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
          >
            Neurologist
          </p>

          <p
            className={`${
              speciality === "Gastroenterologist"
                ? "bg-indigo-50 text-black "
                : ""
            }`}
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
          >
            Gastroenterologist
          </p>
        </div>

        <div className="w-full grid grid-cols-auto gap-4">
          {filterDoc.map((item, idx) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={idx}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer  hover:translate-y-[-10px] transition-all duration-500  ]"
            >
              <img className="bg-blue-50 " src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p
                    className={`w-2 h-2 rounded-full ${
                      item.available ? "bg-green-500" : "bg-orange-700"
                    }`}
                  ></p>
                  <p>{item.available ? "Available" : "Not Available"}</p>
                </div>

                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
