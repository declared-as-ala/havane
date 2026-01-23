import { createBrowserRouter } from 'react-router';
import { Home } from '@/app/pages/Home';
import { Products } from '@/app/pages/Products';
import { Promotions } from '@/app/pages/Promotions';
import { About } from '@/app/pages/About';
import { Contact } from '@/app/pages/Contact';
import { Cart } from '@/app/pages/Cart';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'promotions', element: <Promotions /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
]);
