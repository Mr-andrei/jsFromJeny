import axios from 'axios';

const key = '81db0e02';
const configOMB = {
    baseURL: 'http://www.omdbapi.com',
    params: {
        apikey: key
    }
};
const axiosInstance = axios.create(configOMB);
   // ?apikey=[ваш ключ]&
// http://www.omdbapi.com/?t=r&plot=full
// http://www.omdbapi.com/?i=tt3896198&apikey=81db0e02
const API = {
    searchFilmsByTitle: (title: string) => {
       return  axiosInstance.get(``,{params:{t:title}})
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
