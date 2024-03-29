import { Route, Routes, useLocation } from 'react-router-dom';
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
import RequireAdmin from './components/Shared/RequireAdmin'
import Users from './components/Pages/Dashboard/Users';
import MangeOrder from './components/Pages/Dashboard/ManageOrder';
import Payment from './components/Pages/Dashboard/Payment'
import Reviews from './components/Pages/Reviews';
import AboutPage from './components/Pages/AboutPage';
import Blog from './components/Pages/Blog';
import ManageReviews from './components/Pages/Dashboard/ManageReviews';

function App() {

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === '/signup';

  return (

    <div className='font-sans'>

      {!isLoginPage && !isSignUpPage ? <Navbar></Navbar> : null}

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={
          <AllProducts></AllProducts>
        }></Route>
        <Route path='/about' element={
          <AboutPage></AboutPage>
        }></Route>

        <Route path="/products/:id" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>

        } ></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/review' element={<Reviews></Reviews>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
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
        <Route path='payment/:id' element={<Payment></Payment>}></Route>
        <Route path='/users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        <Route path='/manageOrder' element={<RequireAdmin><MangeOrder></MangeOrder></RequireAdmin>}></Route>
        <Route path='/manageReview' element={<RequireAdmin><ManageReviews></ManageReviews></RequireAdmin>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


      {!isLoginPage && !isSignUpPage ? <Footer /> : null}

      {/* Pop Up Notification */}
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'green',
              color: 'white',
            },
          },
          error: {
            style: {
              background: 'red',
              color: 'white',
            },
          },
        }} s
      />
    </div>
  );
}

export default App;
