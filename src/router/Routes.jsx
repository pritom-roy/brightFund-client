import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddNewCampaign from "../pages/AddNewCampaign";
import AllCampaigns from "../pages/AllCampaigns";
import MyCampaigns from "../pages/MyCampaigns";
import MyDonations from "../pages/MyDonations";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details";
import Update from "../pages/Update";
import Error from "../pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "campaigns",
                element: <AllCampaigns />,
            },
            {
                path: "campaigns/:id",
                element: <Details />,
                loader: ({ params }) => fetch(`https://bright-fund-server.vercel.app/campaign/${params.id}`)
            },
            {
                path: "addCampaign",
                element: <PrivateRoute><AddNewCampaign /></PrivateRoute>
            },
            {
                path: "myCampaign",
                element: <PrivateRoute><MyCampaigns /></PrivateRoute>
            },
            {
                path: "updateCampaign/:id",
                element: <PrivateRoute><Update /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://bright-fund-server.vercel.app/campaign/${params.id}`)
            },
            {
                path: "myDonations",
                element: <PrivateRoute><MyDonations /></PrivateRoute>
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
        ]
    },
    {
        path: "*",
        element: <Error />,
    },
]);

export default router;