import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AddProduct from "../Pages/AddProduct/AddProduct";
import BrandsProducts from "../Pages/Home/BrandsProducts";
import Home from "../Pages/Home/Home";
import ItemDetails from "../Pages/ItemDetails";
import ItemUpdate from "../Pages/ItemUpdate";
import Login from "../Pages/Login/Login";
import MyCart from "../Pages/MyCart/MyCart";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                
            },
            {
                path:'/addproduct',
                element: <PrivateRoute>
                    <AddProduct></AddProduct>,
                </PrivateRoute>
            },
            {
                path: '/mycart',
                element: <MyCart></MyCart>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/brands-products/:id',
                element:<BrandsProducts></BrandsProducts>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path:'/item-details/:id',
                element:<PrivateRoute>
                    <ItemDetails></ItemDetails>
                </PrivateRoute>,
                loader:  ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path:'/item-update/:id',
                element: <PrivateRoute>
                    <ItemUpdate></ItemUpdate>
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    }
])

export default Routes;