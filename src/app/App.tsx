import { RouterProvider } from 'react-router';
import { CartProvider } from '@/app/context/CartContext';
import { router } from '@/app/routes';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </CartProvider>
  );
}