import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Landing from './views/Landing';
import Exhibitions from './views/Exhibitions';
import './App.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/exhibits',
        element: <Exhibitions />,
      }
    ],
  },
],
  {
    basename:"/bonjour",
  } 
);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}