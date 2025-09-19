import { createBrowserRouter } from "react-router";

import Landing from "./Pages/Landing ";
import Events from "./Pages/Events/index"; 1
import Signup from "./Pages/Auth/Signup/Signup";
import Login from "./Pages/Auth/Login/Login";
import App from "./App";
import ProtectedRoutes from "./ProtectedRoute";

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
                    { path: "events", Component: Events }
                ]
            }
        ]
    },
])

export default router;