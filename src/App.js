import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import { Toaster } from 'react-hot-toast';
import Login from './components/Shared/Login';
import SignUp from './components/Shared/SignUp';
import Home from './components/Pages/Home';
import NotFound from './components/Shared/NotFound';
import RequireAuth from './components/Shared/RequiredAuth';
import AddProduct from './components/Pages/Dashboard/AddProduct';
import Profile from './components/Pages/Dashboard/Profile';
import AllProducts from './components/Pages/AllProducts';
import Purchase from './components/Pages/Purchase';
import MyReviews from './components/Pages/Dashboard/MyReviews';
import MyOrder from './components/Pages/Dashboard/MyOrder';

function App() {
  return (

    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={
          <AllProducts></AllProducts>
        }></Route>

        <Route path="/products/:id" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>

        } ></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<SignUp></SignUp>} />
        {/* <Route path='/resetpassword' element={<ResetPassword></ResetPassword>} /> */}
        <Route path='/addItems' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>} />
        <Route path='myreview/:id' element={<MyReviews></MyReviews>}></Route>
        <Route path='/myOrders' element={
          <RequireAuth>
            <MyOrder></MyOrder>
          </RequireAuth>} />
        <Route path='/profile' element={
          <RequireAuth>
            <Profile></Profile>
          </RequireAuth>} />

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
