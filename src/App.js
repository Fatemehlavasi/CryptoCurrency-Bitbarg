
import './App.css';
import "./assets/fonts/FontsFree-Net-ir_sans.ttf"
import DataContextProvider from "./contex/contex"
import { RouterProvider } from "react-router-dom";
import router from './router/Router';
function App() {
  return (

    <div>
      <DataContextProvider>
      <RouterProvider router={router}/>
       
      </DataContextProvider>
    </div>

  );
}

export default App;
