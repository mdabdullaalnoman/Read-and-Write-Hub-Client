
import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Login from './Authentication/Login/Login';
import Register from './Authentication/Register/Register';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Approve from './Pages/Dashboard/Approve';
import Chart from './Pages/Dashboard/Chart';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyBlogs from './Pages/Dashboard/MyBlogs';
import Setting from './Pages/Dashboard/Setting';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import ViewPost from './Pages/ViewPost/ViewPost';
import WriteBlog from './Pages/WriteBlog/WriteBlog';


const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/blogs/:id" element={<ViewPost />} />
          <Route path="writeblog" element={<WriteBlog />} />
          <Route path="contact" element={<Contact />} />

          <Route path="dashboard" element={<Dashboard />} >
            <Route path="approve" element={<Approve />} />
            <Route path="chart" element={<Chart />} />
            <Route path="myBlogs" element={<MyBlogs/>} />
            <Route path="setting" element={<Setting />} />
          </Route>

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