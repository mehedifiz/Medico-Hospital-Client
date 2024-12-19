import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContex";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyAppointment = () => {
  const { token, backendUrl, getDoctorsData } = useContext(AppContext);

  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const month = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("_");
    return dateArray[0] + " " + month[Number(dateArray[1]) - 1] + " " + dateArray[2];
  };

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/appointments`, {
        headers: { token },
      });
      if (data.success) {
        console.log("Appointments:", data.appoinments	);
        setAppointments(data.appoinments);
      } else {
        toast.error("Failed to fetch appointments");
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
      toast.error("Something went wrong while fetching appointments");
    }
  };

 
  const CancelAppoinments = async(appointmentId)=>{
    console.log('appoinmentId' , appointmentId);
    
     try {
   const {data} =await axios.post(backendUrl + "/api/user/cencel-appointment", {appointmentId} , {headers:{token}} )
 
   console.log(data)
   if(data.success){
     getUserAppointments();
     getDoctorsData()
     toast.success(data.message)
   }   else{
     toast.error(data.message)
 
   }
     }  catch (error) {
       console.log(error);
     }
   }
 

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointments
      </p>

      <div className="mt-6">
        {appointments.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b"
          >
            {/* Doctor Image */}
            <div>
              {item.docData?.image ? (
                <img
                  className="w-32 h-32 object-cover bg-indigo-50 rounded-md"
                  src={item.docData.image}
                  alt={item.docData.name || "Doctor"}
                />
              ) : (
                <div className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-gray-500 text-sm">No Image</span>
                </div>
              )}
            </div>

            {/* Appointment Details */}
            <div className="flex-1 text-sm text-zinc-800">
              <p className="text-neutral-800 font-semibold">
                {item.docData?.name || "Doctor Name Unavailable"}
              </p>
              <p>{item.docData?.speciality || "Speciality Unavailable"}</p>
              <p className="text-zinc-800 font-medium mt-1">Address:</p>
              <p className="text-xs">{item.docData?.address?.line1 || "N/A"}</p>
              <p className="text-xs">{item.docData?.address?.line2 || "N/A"}</p>

              <p>
                <span className="text-sm mt-1">Date & Time:</span>{" "}
                {slotDateFormat(item.slotDate)} {item.slotTime}
              </p>
            </div>

            {/* Appointment Actions */}
            <div className="flex flex-col gap-3 items-center mt-2">
              {!item.cancelled && (
                <button className="bg-primary text-white w-44 px-2 py-3 rounded hover:bg-indigo-700 transition">
                  Pay Online
                </button>
              )}
              {!item.cancelled && (
                <button
                  onClick={() => CancelAppoinments(item._id)}
                  className="border-2 text-black w-44 px-2 py-3 rounded hover:bg-orange-300 transition"
                >
                  Cancel Appointment
                </button>
              )}
              {item.cancelled && (
                <button className="border-2 text-orange-700 font-semibold w-44 px-2 py-3 border-orange-800 rounded hover:bg-orange-300 transition">
                  Appointment Cancelled
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
