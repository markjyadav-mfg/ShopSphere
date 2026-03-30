import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type{ RootState } from '../app/store';
import { removeFromCart, updateQuantity, clearCart } from '../features/cart/cartSlice';
import { Trash2, Plus, Minus } from 'lucide-react';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart ({cartItems.length})</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-400">Your cart is empty</p>
          <Link to="/" className="mt-6 inline-block text-indigo-600 hover:underline">Start Shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-6 bg-white dark:bg-gray-800 p-6 rounded-2xl">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-xl"
                />
                
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-indigo-600 font-medium mt-1">₹{item.price}</p>

                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center border dark:border-gray-600 rounded-lg">
                      <button 
                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                        className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
                        disabled={item.quantity === 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-1 font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                        className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button 
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-lg">₹{(item.price * item.quantity).toFixed(0)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl h-fit sticky top-24">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr className="dark:border-gray-700" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>

            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-semibold text-lg"
            >
              Proceed to Checkout
            </button>

            <button 
              onClick={() => dispatch(clearCart())}
              className="w-full mt-4 text-red-500 hover:text-red-600 py-3"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;