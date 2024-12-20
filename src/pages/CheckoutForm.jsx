import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContex";
import axios from "axios";
import { toast } from "react-toastify";

const CheckoutForm = ({ fees, doctor , appoinmentId }) => {
  const { token, backendUrl, userData } = useContext(AppContext);

  console.log(doctor);

  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setclientSecret] = useState("");

  console.log(clientSecret);
  useEffect(() => {
    const testRequest = async () => {
      try {
        const response = await axios.post(
          backendUrl + "/api/user/payment-intent",
          { price: 100 },
          { headers: { token } }
        );
        // console.log("Response from backend:", response.data);
        setclientSecret(response.data.clientSecret);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    testRequest();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error");
    } else {
      // console.log(paymentMethod);
    }

    const { paymentIntent, error: Carderror } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: userData.name,
            email: userData.email,
          },
        },
      }
    );

    if (Carderror) {
      console.log("Carderror");
    }
    if (paymentIntent.status === "succeeded") {
      const success = paymentIntent.status;
      console.log( {success , appoinmentId} );

      const {data} = axios.post(backendUrl +"/api/user/verifyStripe" , {success , appoinmentId} , {headers:{token}})
      // console.log("dat ", data)




      toast.success("Success");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="px-5 py-2 bg-primary text-white"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
