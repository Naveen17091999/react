import './App.css';
import Login from './views/SignIn';
import Register from './views/SignUp';
import Profile from './views/Profile';
import "./css/dashboard.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import DashBoard from './views/DashBoard';
import Navbar from './components/Navbar'

import Test from './views/Test';
import History from './views/History';
import Logout from './views/SignOut';
import NotFound from './views/NotFound';
function App() {
  const { currentUser } = useContext(AuthContext);
  const Layout = () => {
    return (
      <div id='layout'>
         <Navbar/>
        <div className="right">
          <Outlet />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    console.log(currentUser);
    if (!currentUser) {
      return <Navigate to="/signin" />;
    }

    return children;
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <DashBoard />  
        },
        {
          path: "/test",
          element: <Test/>
           
        },
        {
          path: "/history",
          element: <History/>
        },
        {
          path: "/profile",
          element: <Profile />
        },

      ],
    },
    {
      path: "/signin",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Register />,
    },
    {
      path: "/signout",
      element: <Logout/>
    },
    {
      path:"*",
      element:<NotFound />
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
