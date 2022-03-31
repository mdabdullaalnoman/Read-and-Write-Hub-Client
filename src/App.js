
import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Login from './Authentication/Longin/Login';
import Register from './Authentication/Register/Register';
import About from './Pages/About.js/About';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;







// <Route path="dashboard" element={<Dashboard />} >
//   <Route path="upcomingService" element={<UpcomingService />} />
//   <Route path="underReview" element={<UnderReview />} />
//   <Route path="Reviewed" element={<Reviewed />} />
// </Route>