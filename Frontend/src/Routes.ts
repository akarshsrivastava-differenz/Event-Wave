import { createBrowserRouter } from "react-router";

import Landing from "./Pages/Landing ";
import Events from "./Pages/events/index"; 1
import Signup from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login";
import App from "./App";
import ProtectedRoutes from "./ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
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
                    { index: true, Component: Landing },
                    { path: "events", Component: Events }
                ]
            }
        ]
    },
])

export default router;