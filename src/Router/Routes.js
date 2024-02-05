import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../Layout/Main";
import Skills from "../components/Page/Skill/Skills";
import Projects from "../components/Page/Project/Projects";
import Login from "../components/Page/Shared/Login/Login";
import Signup from "../components/Page/Shared/Signup/Signup";
import DashboardLayout from "../Layout/DashboardLayout";
import AllUser from "../components/Page/Dashboard/AllUser/AllUser";
import AddProject from "../components/Page/Dashboard/AddProject/AddProject";
import AddSkill from "../components/Page/Dashboard/AddSkill/AddSkill";
import ManageProject from "../components/Page/Dashboard/ManageProject/ManageProject";
import ManageSkill from "../components/Page/Dashboard/ManageSkill/ManageSkill";
import AdminHome from "../components/Page/Dashboard/AdminHome/AdminHome";
import UpdateProject from "../components/Page/Dashboard/UpdateProject/UpdateProject";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

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
                element: <PrivateRoute>
                    <Signup></Signup>
                </PrivateRoute>
            }

        ]
    },

    {
        path: 'admin',
        element: <PrivateRoute>
            <AdminRoute> <DashboardLayout></DashboardLayout></AdminRoute>
        </PrivateRoute>,
        children: [
            {
                path: 'admin-home',
                element: <AdminRoute> <AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'all-user',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: 'add-project',
                element: <AdminRoute><AddProject></AddProject></AdminRoute>
            },
            {
                path: 'add-skill',
                element: <AdminRoute><AddSkill></AddSkill></AdminRoute>
            },
            {
                path: 'manage-project',
                element: <AdminRoute><ManageProject></ManageProject></AdminRoute>
            },
            {
                path: 'manage-skill',
                element: <AdminRoute><ManageSkill></ManageSkill></AdminRoute>
            },
            {
                path: 'update/:id',
                element: <UpdateProject></UpdateProject>,
                loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`),
            },

        ]
    }

]);

export default routes;