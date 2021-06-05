import axios from "axios"

// https://api.themoviedb.org/3/movie/550?api_key=edfa2c91b99d18b5b2c09b6a735af79d

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

/*  instance.get will append the baseURL as 
 https:api.themoviedb.org/3/foo-bar*/ 
// instance.get("/foo-bar")


export default instance;