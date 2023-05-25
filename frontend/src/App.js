import  React from 'react';
import Sidebar from './components/Sidebar';
//import Feed from './components/Feed';
import Rightbar from './components/Rightbar'
import Navbar from './components/Navbar'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Home from './components/Home';
//import Links from './components/Links';
import Login from './pages/Login';
import Register from './pages/Register'
import Write from './pages/Write'
import Social from './components/Social';
import Single from './pages/Single'
import Ball from './components/Ball';
import Homes from './pages/Homes';
//import Head from './components/Head';
import "./style.scss"
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Footer from "./components/footer/Footer"

const Layout = () => {
  return (
    <>
  
      <Box>    

  <Stack direction="row" spacing={0} justifyContent="center">

  <Social />
  <Ball />
 </Stack>
 <Navbar/> 
 <Home />
 <Sidebar />
 <Rightbar />
  <Footer />

 </Box>
    </>
  );
};

const router = createBrowserRouter([
  { 
    path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Homes />,
    },
    {
      path: "/post/:id",
      element: <Single />,
    },
    {
      path: "/write",
      element: <Write />,
    },
  ],
},
{
  path: "/register",
  element: <Register />,
},
{
  path: "/login",
  element: <Login />,
},
]);
function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );

}

export default App;
