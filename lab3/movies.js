//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//Movie data link: https://gist.githubusercontent.com/jdelrosa/78dfa36561d5c06f7e62d8cce868cf8e/raw/2292be808f74c9486d4085bdbc2025bab84d462b/movies.json
import axios from "axios";

async function getMovies(){
    const { data } = await axios.get("https://gist.githubusercontent.com/jdelrosa/78dfa36561d5c06f7e62d8cce868cf8e/raw/2292be808f74c9486d4085bdbc2025bab84d462b/movies.json");
    return data // this will be the array of user objects
}
async function checkDirector(directorName) {
    if (!directorName || typeof directorName !== "string" || directorName.trim().length === 0) {
        throw "Error: That directorName  parameter exists and is of the proper type (string) or  just empty spaces"
    }
    let movieData = await getMovies();
    let director = movieData.find(movie=> movie.director === directorName);
    if (!director || director.length === 0){
        throw "Error: the no movies can be found in movies.json for the directorName provided"
    }
}
async function checkCast(castMemberName){
    if (!castMemberName || typeof castMemberName !== "string" || castMemberName.trim().length === 0) {
        throw "Error: That castMemberName  parameter exists and is of the proper type (string) or  just empty spaces"
    }
    let movieData = await getMovies();
    let cast = movieData.filter(movie=> movie.cast.includes(castMemberName));
    if (!cast || !cast.length){
        throw "Error: the no movies can be found in movies.json  for the castMemberName provided"
    }
}
async function checkTitle(title){
    if (!title || typeof title !== "string" || title.trim().length === 0) {
        throw "Error: That title  parameter exists and is of the proper type (string) or just empty spaces"
    }
    let movieData = await getMovies();
    let titleName = movieData.find(movie=> movie.title === title);
    if (!titleName || titleName.length === 0){
        throw "Error:  the movie cannot be found in movies.json for the supplied title parameter"
    }
}
async function checkID(id){
    if(!id || typeof id !== "string" || id.trim().length === 0){
        throw "Error: that the id  parameter exists and is of proper type (string)."
    }
    let movieData = await getMovies();
    let user = movieData.find(user => user.id === id);
    if(!user || user.id.trim().length === 0){
        throw "Error: the id is not found in the array of users or just empty spaces";
    }
}
export const findMoviesByDirector = async (directorName) => {
    await checkDirector(directorName);
    let movieData = await getMovies();
    return movieData.filter(movie => movie.director === directorName)
};

export const findMoviesByCastMember = async (castMemberName) => {
    await checkCast(castMemberName);
    let movieData = await getMovies();
    return movieData.filter(movie=> movie.cast.includes(castMemberName))
};

export const getOverallRating = async (title) => {
    await checkTitle(title);
    let movieData = await getMovies();
    let movie = movieData.find(movie=> movie.title === title);
    let aveSum=  movie.reviews.reduce((sum, review)=> sum + review.rating, 0) / movie.reviews.length;
    return Math.floor(aveSum * 10) / 10;
};

export const getMovieById = async (id) => {
    await checkID(id);
    let movieData = await getMovies();
    return movieData.filter(movie=> movie.id === id)
};
