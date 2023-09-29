import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../Login/Login";
import Register from "../components/Register/Register";

const createRouter = createBrowserRouter ([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },{
                path:"/login",
                element:<Login/>
            },{
                path:"/register",
                element:<Register/>
            }
        ]
    }
])
export default createRouter;