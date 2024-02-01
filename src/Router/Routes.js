import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../Layout/Main";
import Skills from "../components/Page/Skill/Skills";
import Projects from "../components/Page/Project/Projects";
import Login from "../components/Page/Shared/Login/Login";
import Signup from "../components/Page/Shared/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import AdminHome from "../components/Page/Dashboard/AdminHome/AdminHome";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/skill',
                element: <Skills></Skills>
            },
            {
                path: '/project',
                element: <Projects></Projects>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }

        ]
    },

    {
        path: 'admin',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>
            },

        ]
    }

]);

export default routes;