import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type{ RootState } from '../app/store';
import { clearCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'cod',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Fake order placement
    setTimeout(() => {
      alert(`🎉 Order Placed Successfully! Total: ₹${totalPrice}`);
      dispatch(clearCart());
      navigate('/');
    }, 800);
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-10">Checkout</h1>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Form */}
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl border dark:border-gray-600 bg-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl border dark:border-gray-600 bg-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl border dark:border-gray-600 bg-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">City</label>
                <input type="text" name="city" required value={formData.city} onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl border dark:border-gray-600 bg-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Pincode</label>
                <input type="text" name="pincode" required value={formData.pincode} onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl border dark:border-gray-600 bg-transparent" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Payment Method</label>
              <select 
                name="paymentMethod" 
                value={formData.paymentMethod} 
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl border dark:border-gray-600 bg-transparent"
              >
                <option value="cod">Cash on Delivery</option>
                <option value="card">Credit / Debit Card</option>
                <option value="upi">UPI</option>
              </select>
            </div>

            <button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-semibold mt-6"
            >
              Place Order - ₹{totalPrice}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-2">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl sticky top-8">
            <h2 className="font-semibold text-xl mb-6">Order Summary</h2>
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between py-3 border-b dark:border-gray-700">
                <div>
                  {item.name} <span className="text-gray-500">× {item.quantity}</span>
                </div>
                <div>₹{item.price * item.quantity}</div>
              </div>
            ))}
            <div className="flex justify-between font-bold text-lg mt-6">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;