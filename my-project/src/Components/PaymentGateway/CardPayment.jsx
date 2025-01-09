import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CardPayment = () => {
  // const [cartItems, setCartItems] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  // const [addresses, setAddresses] = useState([]);
  // const [paymentMethod, setPaymentMethod] = useState("card");
  // const navigate = useNavigate();
  // const userId = localStorage.getItem('userId');
  // const token = localStorage.getItem('token');

  // useEffect(() => {
  //   if (userId && token) {
  //     getCartItems();
  //     fetchAddresses();
  //   } else {
  //     navigate("/login");
  //   }
  // }, [userId, token, navigate]);

  // const fetchAddresses = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3003/api/getaddress/${userId}`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     setAddresses(Array.isArray(response.data) ? response.data : [response.data]);
  //   } catch (error) {
  //     console.error("Error fetching addresses:", error);
  //     if (error.response && error.response.status === 401) {
  //       navigate("/login");
  //     }
  //   }
  // };

  // const getCartItems = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3003/api/cart/${userId}`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     setCartItems(response.data.items);
  //     calculateTotal(response.data.items);
  //   } catch (error) {
  //     console.error("Error fetching cart items:", error);
  //   }
  // };

  // const calculateTotal = (items) => {
  //   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  //   setTotalPrice(total);
  // };

  // const clearCartAfterPayment = async () => {
  //   try {
  //     const response = await axios.delete(`http://localhost:3003/api/clear-cart/${userId}`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     console.log("Cart cleared:", response.data.message);
  //   } catch (error) {
  //     console.error("Failed to clear cart:", error?.response?.data?.message || error.message);
  //   }
  // };

  // const handlePayment = async () => {
  //   try {
  //     const cartData = cartItems.map((item) => ({
  //       itemId: item.productId,
  //       price: item.price,
  //       quantity: item.quantity,
  //       name: item.name,
  //       photo: item.imageLink,
  //     }));

  //     const addressData = addresses.map((address) => ({
  //       Name: address.name,
  //       AddressLine: address.addressLine,
  //       City: address.city,
  //       State: address.state,
  //       Pincode: address.zipCode,
  //       Phone: address.phone,
  //     }));

  //     console.log(cartData);
  //     console.log(addressData);

  //     const response = await axios.post(
  //       'http://localhost:3003/api/payment/createorder',
  //       {
  //         userId,
  //         amount: totalPrice,
  //         currency: 'INR',
  //         items: cartData,
  //         address: addressData,
  //       },
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );

  //     if (response.data && response.data.order) {
  //       openRazorpay(response.data.order);
  //     } else {
  //       console.error("Unexpected response format:", response.data);
  //       alert("Error while creating payment order. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error('Payment initiation error:', error);
  //     alert("Error while initiating payment");
  //   }
  // };

  // const openRazorpay = (order) => {
  //   const options = {
  //     key: 'rzp_test_wqQZK7PHsAYpBP',
  //     amount: order.amount,
  //     currency: order.currency,
  //     name: 'Santics Gaming',
  //     description: 'Test Transaction',
  //     order_id: order.id,
  //     handler: async (response) => {
  //       await verifyPayment(response);
  //     },
  //     prefill: {
  //       name: 'nidin',
  //       email: 'nidin@example.com',
  //       contact: '7012543724',
  //     },
  //     notes: {
  //       address: 'note value',
  //     },
  //     theme: {
  //       color: '#F37254',
  //     },
  //   };

  //   const rzp = new window.Razorpay(options);
  //   rzp.open();
  // };

  // const verifyPayment = async (response) => {
  //   try {
  //     await axios.post('http://localhost:3003/api/verifypayment', {
  //       razorpay_order_id: response.razorpay_order_id,
  //       razorpay_payment_id: response.razorpay_payment_id,
  //       razorpay_signature: response.razorpay_signature,
  //     });
  //     alert("Payment successful");
  //     setTimeout(() => {
  //       alert("Order Placed Successfully");
  //     }, 2000);

  //     await clearCartAfterPayment();

  //     navigate("/orderes");
  //   } catch (error) {
  //     console.error("Payment verification error:", error);
  //     alert("Payment verification failed");
  //   }
  // };

  // const handlePaymentClick = () => {
  //   if (paymentMethod === "card") {
  //     handlePayment();
  //   } else if (paymentMethod === "upi") {
  //     initiateUpiPayment(); 
  //   }
  // };

  return (
    // <div className="font-sans bg-black p-4 lg:max-w-7xl max-w-xl mx-auto rounded-md shadow-lg">
    //   <div className="grid lg:grid-cols-1 p-5">
    //     <div className="lg:col-span-1 bg-white/20 p-6 rounded shadow-md">
    //       <h2 className="text-xl font-semibold mb-4 text-red-600 font-mono">Order Summary</h2>
    //       <ul className="mb-4">
    //         {cartItems.map((item) => (
    //           <li key={item.id} className="flex justify-between mb-2">
    //             <span className='text-white'>{item.name}</span>
    //             <span className='text-gray-100'>₹{item.price}</span>
    //           </li>
    //         ))}
    //       </ul>
    //       <hr className="mb-4" />
    //       <h1 className='text-2xl font-bold text-white mb-4 font-mono'>Shipping Address</h1>
    //       {addresses.map((address) => (
    //         <div key={address._id} className='mb-6'>
    //           <h4 className="font-bold text-red-500">{address.name}</h4>
    //           <p className="text-sm text-white/60">{address.addressLine}</p>
    //           <p className="text-sm text-white/60">{address.city}, {address.state} {address.zipCode}</p>
    //           <p className="text-sm text-white/60">Phone: {address.phone}</p>
    //         </div>
    //       ))}
    //       <div className="flex justify-between text-lg font-bold">
    //         <span className='text-white'>Total:</span>
    //         <span className='border-red-500 bg-red-600 hover:bg-white/10 border p-3 text-white'>₹{totalPrice}</span>
    //       </div>
    //       <button
    //         onClick={handlePaymentClick}
    //         className="mt-6 w-full py-2 px-4 bg-gray-400 text-white rounded hover:bg-red-600"
    //       >
    //         Pay Now
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        Razorpay Payment Gateway Unavailable
      </h1>
      <p className="text-gray-700 mb-6">
        The payment gateway is currently disabled because AWS and Privacy Protection have restricted access due to the absence of HTTPS certification. 
      </p>
      <p className="text-gray-700 mb-6">
        Please check the GitHub link for payment gateway integrations, or clone the repository, navigate to the project directory, and run:
      </p>
      <code className="block bg-gray-200 text-gray-800 p-2 rounded-md mb-4">
        cd my-project <br />
        npm run dev
      </code>
      <a
        href="https://github.com/nidinbose/Gaming-website-santics"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-500 font-medium hover:underline"
      >
        View GitHub Repository
      </a>
    </div>
  </div>
  
  );
};

export default CardPayment;
