//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//User data link: https://gist.githubusercontent.com/jdelrosa/381cbe8fae75b769a1ce6e71bdb249b5/raw/564a41f84ab00655524a8cbd9f30b0409836ee39/users.json
import axios from "axios";

async function getUsers(){
    const { data } = await axios.get("https://gist.githubusercontent.com/jdelrosa/381cbe8fae75b769a1ce6e71bdb249b5/raw/564a41f84ab00655524a8cbd9f30b0409836ee39/users.json");
    return data // this will be the array of user objects
}
async function getMovies(){
    const { data } = await axios.get("https://gist.githubusercontent.com/jdelrosa/78dfa36561d5c06f7e62d8cce868cf8e/raw/2292be808f74c9486d4085bdbc2025bab84d462b/movies.json");
    return data // this will be the array of user objects
}
function checkID(id){
    if(!id || typeof id !== "string" || id.trim().length === 0  ){
        throw "Error: that the id  parameter exists and is of proper type (string)."
    }
}
export const getUserById = async (id) => {
    checkID(id);
    let data = await getUsers();
    let user = data.find(user => user.id === id);
    if(!user || user.id.trim().length === 0){
        throw "Error: the id is not found in the array of users or just empty spaces";
    }
    return user;
};

export const sameGenre = async (genre) => {
    let data = await getUsers();
    if(!genre || typeof genre !== "string" || genre.trim().length === 0){
        throw "Error: that the genre parameter exists and is of proper type (string)."
    }

    let userData = data.filter(user=> user.favorite_genre.toLowerCase() === genre.toLowerCase());
    if(userData.length < 2){
        throw "Error: at least two users that have the same favorite genre";
    }
    userData = userData.map(user=> `${user.first_name} ${user.last_name}`)
    return userData;
};

export const moviesReviewed = async (id) => {
    checkID(id);
    let usersData = await getUsers();
    let moviesData = await getMovies();
    let a = moviesData.filter(movie=>
        console.log(movie.reviews.find(username=> username  === usersData.find(user=> user.id === id).username)));
    return a;
    // usersData.find(user=> user.id === id).username
};

export const referMovies = async (id) => {};
