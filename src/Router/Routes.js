import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../Layout/Main";
import Skills from "../components/Page/Skill/Skills";
import Projects from "../components/Page/Project/Projects";

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
            }

        ]
    }
]);

export default routes;