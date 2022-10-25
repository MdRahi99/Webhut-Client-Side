import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Courses from "../../pages/Courses/Courses/Courses";
import CourseDetails from "../../pages/CourseDetails/CourseDetails/CourseDetails";
import Faq from "../../pages/Faq/Faq/Faq";
import Blog from "../../pages/Blog/Blog/Blog";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async() => {
                    return fetch('http://localhost:5000/courses-categories')
                },
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: async() => {
                    return fetch('http://localhost:5000/courses-categories')
                },
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>
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