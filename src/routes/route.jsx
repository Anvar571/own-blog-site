import About from "../components/home/About";
import Blogs from "../components/home/Blogs";
import HomeRoute from "../components/home/HomeRoute";
import NotFound from "../components/home/NotFound";
import Project from "../components/home/Project";
import Tags from "../components/home/Tags";

export default [
    {
        path:"/",
        element: <HomeRoute/>,
        children: [
            {
                index: true,
                element: <Blogs/>
            },
            {
                path: "/blog",
                element: <Blogs/>
            },
            {
                path: "/tag",
                element: <Tags/>
            },
            {
                path: "/project",
                element: <Project/>
            },
            {
                path: "/about",
                element: <About/>
            },
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
]