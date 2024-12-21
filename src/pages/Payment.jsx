import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContex";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { toast } from "react-toastify";
import axios from "axios";

const stripePromise = loadStripe('pk_test_51QC1uEI8sInWbbt4ioMAiWk6J5onxQJbFJWRxTwUuuwcdYqEB2HrL19jwHHpSoKwkxrMEbrU5bWW3dJrxeykXZin00IBQiRiOw');

const Payment = () => {
  const {   backendUrl, token } = useContext(AppContext);


  const [doctor, setDoctor] = useState(null);
  const { appoinmentId } = useParams();  
  const [appointments, setAppointments] = useState([]);
  const [appointment, setAppointment] = useState(null);

  // Fetch appointments
  // console.log("doctors" , {doctors , appoinmentId})

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/appointments`, {
        headers: { token },
      });
      if (data.success) {
        // console.log( data.appoinments , appoinmentId ,)
        const appoint =data.appoinments.find((app) => app._id === appoinmentId);
        
        console.log("data of doctor" , appoint.docData)
        setAppointment(appoint)

        setDoctor( appoint.docData)
    

        setAppointments(data.appoinments);
      } else {
        toast.error("Failed to fetch appointments");
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
      toast.error("Something went wrong while fetching appointments");
    }
  };

 
  // console.log('appointment' , appointment)

  
  useEffect(() => {
    getUserAppointments();
  }, []);
 

  

  if (!doctor || !appointment) {
    return <div>Loading...</div>;
  }

  // todo if appointment.payment === true the donot code to the payment page 

   return  (
    <div className="h-[100vh] bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
        <h2 className="text-xl font-bold text-center text-green-600 mb-4">
          Pay for Appointment with Dr. {doctor.name}
        </h2>
        <div className="mb-4">
          <p className="text-gray-600">
            <span className="font-semibold">Speciality:</span> {doctor.speciality}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Amount:</span> ${doctor.fees}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Appointment Date:</span> {appointment.slotDate}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Appointment Time:</span> {appointment.slotTime}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Payment Status:</span> {appointment.payment.toString()}
          </p>
        </div>
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm amount={doctor.fees} doctor={doctor} appoinmentId={appoinmentId} getUserAppointments={getUserAppointments} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
