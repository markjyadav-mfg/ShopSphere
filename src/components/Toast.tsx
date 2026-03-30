import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeToast } from '../features/toast/toastSlice';
import type { Toast as ToastType } from '../types';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

interface ToastProps {
  toast: ToastType;
}

const Toast = ({ toast }: ToastProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeToast(toast.id));
    }, toast.duration || 3000);

    return () => clearTimeout(timer);
  }, [dispatch, toast.id, toast.duration]);

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle className="text-green-500" size={22} />;
      case 'error':
        return <XCircle className="text-red-500" size={22} />;
      case 'info':
        return <Info className="text-blue-500" size={22} />;
      default:
        return null;
    }
  };

  const getBgColor = () => {
    switch (toast.type) {
      case 'success': return 'bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-700';
      case 'error': return 'bg-red-50 dark:bg-red-900 border-red-200 dark:border-red-700';
      case 'info': return 'bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700';
      default: return 'bg-gray-50 dark:bg-gray-800';
    }
  };

  return (
    <div className={`flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl border w-96 ${getBgColor()}`}>
      {getIcon()}
      
      <p className="flex-1 text-sm font-medium dark:text-white">
        {toast.message}
      </p>

      <button 
        onClick={() => dispatch(removeToast(toast.id))}
        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default Toast;