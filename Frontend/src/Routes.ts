import { createBrowserRouter } from "react-router";
import Landing from "./Pages/Landing";
import Events from "./Pages/Events/index";
import Signup from "./Pages/Auth/Signup/Signup";
import Login from "./Pages/Auth/Login/Login";
import App from "./App";
import ProtectedRoutes from "./ProtectedRoute";
import Dashboard from "./Pages/Dashboard";
import CreateEvent from "./Pages/Dashboard/Organizer/Pages/CreateEvent/create-event/CreateEvent";
import DashboardContent from "./Pages/Dashboard/DashboardContent";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                 index: true, Component: Landing 
            },
            {
                path: "login",
                Component: Login
            },
            {
                path: "signup",
                Component: Signup
            },
            {
                path: "",
                Component: ProtectedRoutes,
                children: [
                    { path: "events", Component: Events },
                    { 
                        path : "dashboard", 
                        Component : Dashboard,
                        children:[
                            { index : true , Component:DashboardContent },
                            { path : "create-event" , Component:CreateEvent }
                        ]
                    }
                ]
            }
        ]
    },
])

export default router;