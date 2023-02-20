import axios from 'axios'
import { EditJson } from './editJson'
import FormData from 'form-data'
const NewToken = async() => {
    
    try{
        

        console.log(process.env.API_URL)
        console.log(process.env.API_USERNAME)
        console.log(process.env.API_PASSWORD)


        const response = await axios.post('Token', {
            grant_type: 'password',
            username: process.env.API_USERNAME,
            password: process.env.API_PASSWORD
        }, {
            baseURL: process.env.API_URL,
            headers: {
                "Cache-Control": "no-cache",
                "Postman-Token": "4c8e3648-d325-5ddf-7408-60a4967bff69",
                "Content-Type": "application/x-www-form-urlencoded",
            }
        })

        console.log(response.data)

        EditJson(response.data.access_token,response.data[".expires"])

        return response.data.access_token

        //edit the key.json file in root directory and add the token
                
        

    }

    catch(err){
        console.log(err)
        return ""
    }

}

export {NewToken}
