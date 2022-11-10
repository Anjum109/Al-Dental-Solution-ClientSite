import Main from "../../layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog";
import DetailsOfService from "../../Pages/DetailsOfService/DetailsOfService";
import AllServices from "../../Pages/Home/AllServices/AllServices";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Terms from "../../Pages/Others/Terms";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: () => fetch('https://al-dental-solution-server.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <DetailsOfService></DetailsOfService>,
                loader: ({ params }) => fetch(`https://al-dental-solution-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addServices',
                element: <AddServices></AddServices>
            }, {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    }
]);

export default router;