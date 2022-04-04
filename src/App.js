
import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Login from './Authentication/Login/Login';
import Register from './Authentication/Register/Register';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About.js/About';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import WriteBlog from './Pages/WriteBlog/WriteBlog';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="writeblog" element={<WriteBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;







// <Route path="dashboard" element={<Dashboard />} >
//   <Route path="upcomingService" element={<UpcomingService />} />
//   <Route path="underReview" element={<UnderReview />} />
//   <Route path="Reviewed" element={<Reviewed />} />
// </Route>