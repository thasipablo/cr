import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Boats, Login, Register, Reservations} from "./pages";
import {BoatDetails, BoatsList} from "./components";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/boats',
        element: <Boats />,
        children: [
            {
                path: '',
                element: <BoatsList />,
            },
            {
                path: ':id',
                element: <BoatDetails />,
            },
            {
                path: 'reservations',
                element: <Reservations />
            }
        ]
    },
    {
        path: '*',
        element: <h1>404 &middot; Not Found</h1>,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
