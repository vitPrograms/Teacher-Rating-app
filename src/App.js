import './main.scss' 
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/header/Header';

import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TeacherPage from './pages/TeacherPage';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import { path } from './config/client/path'
import PrivateRoute from './components/route/PrivateRoute';
import Login from './components/login/Login';
import Help from './components/help/Help';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticated, setAuthentication } from './features/user/authenticationSlice';
import Cookies from 'js-cookie';

function App() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(selectAuthenticated)
  const token = Cookies.get('token')

  if(!isAuthenticated && token) {
    dispatch(setAuthentication(token))
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <main>
    
            <Routes>
              <Route path={path.BASE} element={<HomePage/>} />
              <Route path={path.TEACHER_PAGE} element={<PrivateRoute component={<TeacherPage />} />} />
              <Route path={path.LOGIN} element={<Login path={path.BASE} />} />
              <Route path={path.HELP} element={<Help />} />
              <Route path={path.ANY} element={<div>Page not found</div>} />
            </Routes>

          <Footer />
        </main>

      </BrowserRouter>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App;
