import './main.scss' 

import Header from './components/header/Header';

import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TeacherPage from './pages/TeacherPage';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <main>
          
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/:teacherId' element={<TeacherPage />} />
                <Route path='*' element={<div>Page not found</div>} />
            </Routes>

          <Footer />
        </main>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
