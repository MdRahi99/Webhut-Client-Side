import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Courses from "../../pages/Courses/Courses/Courses";
import Faq from "../../pages/Faq/Faq/Faq";
import Blog from "../../pages/Blog/Blog/Blog";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
        ]
    }
]);