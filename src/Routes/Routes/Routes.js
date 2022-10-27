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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Premium from "../../pages/shared/Premium/Premium";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: async({params}) => fetch(`https://webhut-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/course',
                element: <Courses></Courses>,
                loader: async() => fetch('https://webhut-server.vercel.app/courses')
            },
            {
                path: '/courses/:id',
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
                loader: async({params}) => fetch(`https://webhut-server.vercel.app/courses/${params.id}`) 
            },
            {
                path: '/premium/:id',
                element: <PrivateRoute><Premium></Premium></PrivateRoute>
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
        element: <Faq></Faq>
    },
    {
        path: '*',
        element: <div className="fs-4 fw-bold text-center my-4 shadow-lg w-75 mx-auto p-4">
            <h1>Please provide a valid URL!!!</h1>
        </div>
    }
]);