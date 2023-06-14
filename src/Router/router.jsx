import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Resources from "../Pages/Resources/Resources";
import CommunityForm from "../Pages/Community/CommunityForm";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"signIn",
                element:<SignIn></SignIn>
            },
            {
                path:"signUp",
                element:<SignUp></SignUp>
            },
            {
                path:"resources",
                element:<Resources></Resources>
            },
            {
                path:"community",
                element:<CommunityForm></CommunityForm>
            }
        ]
    },
]);

export default router;