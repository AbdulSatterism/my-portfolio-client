import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../Layout/Main";
import Skills from "../components/Page/Skill/Skills";
import Projects from "../components/Page/Project/Projects";
import Login from "../components/Page/Shared/Login/Login";
import Signup from "../components/Page/Shared/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

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
    }
]);

export default routes;