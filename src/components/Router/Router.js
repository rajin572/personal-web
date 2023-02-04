import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../HomePage/HomePage";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage></HomePage>
    },
    {
        path: '/home',
        element: <HomePage></HomePage>
    },
    {
        path:'/projectDetails/:id',
        element:<ProjectDetails></ProjectDetails>,
        loader : ({params}) => fetch(`https://my-protfolio-server.vercel.app/data/${params.id}`)
      },
    {
        path: '/blog',
        element: <Blog></Blog>
    },
    {
        path: '*',
        element:<ErrorPage></ErrorPage>
    }
])
export default router;