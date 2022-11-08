import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import DigitalCurrency from "../pages/DigitalCurrency";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/DigitalCurrency',
          element:<DigitalCurrency/>
        }
      ]
    },

  ]);
  
  export default router;