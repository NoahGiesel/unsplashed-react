import axios from "axios"


export default axios.create( {
    baseURL: "https://api.unsplash.com",
    headers : {
            Authorization : "Client-ID cfdea4247dfc92dc393615aa995c3007f59d22acee0b41eeb710666a298efb96" 
    }


}) 