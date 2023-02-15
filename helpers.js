//Todo You can use this file for any helper functions you may need. This file is optional and you don't have to use it if you do not want to.
import axios from "axios";

async function getMovies(){
    const { data } = await axios.get("https://gist.githubusercontent.com/jdelrosa/78dfa36561d5c06f7e62d8cce868cf8e/raw/2292be808f74c9486d4085bdbc2025bab84d462b/movies.json");
    return data // this will be the array of user objects
}

const data = await getMovies();
let a = data.filter(movies=> movies.reviews.some(item=> item.username
                === "mthunders1z")[0]);
console.log(a)