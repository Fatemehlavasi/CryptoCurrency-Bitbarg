import { createContext , useState } from "react";
import { options } from '../Api/Api'
export const DataContext = createContext({state:[] , dispatch: ()=>{}})

const DataContextProvider = ({children}) => {
    const [dataCoins, setDataCoins] = useState([])
   
  
    return(
        <DataContext.Provider value={{dataCoins , setDataCoins  }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider