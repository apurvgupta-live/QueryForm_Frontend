import axios from "axios"; 
const baseUrl = "http://localhost:3000/api/v1" ;
export const addQuery= async(queryObj : any) =>{
    const result = await axios.post(`${baseUrl}/addQuery` , queryObj) ; 
    console.log(result);
    return result.data ; 
}