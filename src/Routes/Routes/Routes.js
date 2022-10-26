import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Courses from "../../pages/Courses/Courses/Courses";
import Faq from "../../pages/Faq/Faq/Faq";
import Blog from "../../pages/Blog/Blog/Blog";
import SignUp from "../../pages/SignUp/SignUp";
import SignIn from "../../pages/SignIn/SignIn";
import Category from "../../pages/Category/Category";
import CourseDetails from "../../pages/CourseDetails/CourseDetails/CourseDetails";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async() => fetch('http://localhost:5000/courses')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: async({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/course',
                element: <Courses></Courses>,
                loader: async() => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: async({params}) => fetch(`http://localhost:5000/courses/${params.id}`) 
            },
            // ..............................................
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
        ]
    },
    {
        path: '*',
        element: <div className="fs-4 fw-bold text-center mt-5 shadow-lg w-75 mx-auto p-4">Please provide a valid URL!!!</div>
    }
]);