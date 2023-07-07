import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../MainLayout/HomePageLayout";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";

const router = createBrowserRouter([
           {
            path:'/',
            errorElement:<Error></Error>,
            element:<HomePageLayout></HomePageLayout>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                }
            ]
           }
])

export default router;