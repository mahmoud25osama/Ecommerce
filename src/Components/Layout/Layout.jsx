import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import CartDrawer from '../CartDrawer/Drawer';

export default function Layout() {
  return (
    <>

      <Navbar />
      <CartDrawer />
      <Outlet />
      <Footer />

    </>
  )
}
