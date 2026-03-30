import { useSelector } from 'react-redux';
import type{ RootState } from '../app/store';
import Toast from './Toast';

const ToastContainer = () => {
  const toasts = useSelector((state: RootState) => state.toast.toasts);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

export default ToastContainer;