import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Boats, Login, Register, Reservations} from './pages';
import {BoatDetails, BoatsList, NewBoatForm, ReservationForm, ReservationsList} from './components';
import store from './redux/store';

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
                path: 'all',
                element: <BoatsList />,
            },
            {
                path: ':id',
                element: <BoatDetails />,
            },
            {
                path: 'new-boat',
                element: <NewBoatForm />
            }
        ],
    },
    {
        path: 'reservations',
        element: <Reservations />,
        children: [
            {
                path: 'all',
                element: <ReservationsList />
            },
            {
                path: 'new',
                element: <ReservationForm />
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
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);
