import axios from 'axios';
const url = "/api/picture"

export default class API{
    //get all the pictures 
    static async getAllPicture(){
        const res = await axios.get(url);
        console.log(res.data);
        return res.data;
    }

    static async addPicture(picture){
        const res = await axios.post(url,picture);
        return res.data;
    }
}