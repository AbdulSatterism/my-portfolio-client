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
                path: 'admin-home',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'all-user',
                element: <AllUser></AllUser>
            },
            {
                path: 'add-project',
                element: <AddProject></AddProject>
            },
            {
                path: 'add-skill',
                element: <AddSkill></AddSkill>
            },
            {
                path: 'manage-project',
                element: <ManageProject></ManageProject>
            },
            {
                path: 'manage-skill',
                element: <ManageSkill></ManageSkill>
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