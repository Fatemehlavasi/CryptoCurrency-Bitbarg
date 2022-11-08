
import axios from "axios"

export const options = axios.create(
    {
        method: 'GET',
        baseURL: 'https://coinranking1.p.rapidapi.com',


        headers: {
            'X-RapidAPI-Key': '4a7914c0c7msh13b9ac22da04889p13b624jsn7a3fadd4640a',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
          }
    }
) 
