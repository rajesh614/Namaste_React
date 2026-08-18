import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Body from "../pages/Body";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "../pages/Error";
import RestaurantMenu from "../pages/RestaurantMenu";

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <Body />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/contact",
                    element: <ContactUs />,
                },
                {
                    path: "/restaurant/:id",
                    element: <RestaurantMenu />,
                },
            ],
        },
    ],
);

export default appRouter;
