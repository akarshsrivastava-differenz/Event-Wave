import { createBrowserRouter } from "react-router";
import Landing from "./Pages/Landing /Landing";
import Events from "./Pages/events/Events";
import Signup from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Landing },
            { path: "events", Component: Events },
            { path: "login", Component: Login },
            { path: "signup", Component: Signup },
        ]
    },
])

export default router;