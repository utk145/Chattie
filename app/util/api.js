import axios from "axios";

// const BASE_URL='http://192.168.29.107:3000/api/bardapi?ques=' 
const BASE_URL='https://bard-api-nextjs.vercel.app/api/bardapi'

const getApiEndpoint=(userMsg)=>axios.get(BASE_URL+"?ques="+userMsg);
export default{
    getApiEndpoint
}

