//Todo You can use this file for any helper functions you may need. This file is optional and you don't have to use it if you do not want to.
import axios from "axios";
import {referMovies} from "./users.js";

async function getUsers(){
    const { data } = await axios.get("https://gist.githubusercontent.com/jdelrosa/381cbe8fae75b769a1ce6e71bdb249b5/raw/564a41f84ab00655524a8cbd9f30b0409836ee39/users.json");
    return data // this will be the array of user objects
}
async function getMovies(){
    const { data } = await axios.get("https://gist.githubusercontent.com/jdelrosa/78dfa36561d5c06f7e62d8cce868cf8e/raw/2292be808f74c9486d4085bdbc2025bab84d462b/movies.json");
    return data // this will be the array of user objects
}

let movieData = await getMovies();
let movies = movieData.filter(movie => movie.director === "Fernando Dollimore")
    .map(movie => {
        return {
            id: movie.id,
            title: movie.title,
            genre: movie.genre,
            director: movie.director,
            release_date: movie.release_date,
            runtime: movie.runtime,
            mpa_rating: movie.mpa_rating,
            cast: movie.cast,
            streaming_service: {
                company: movie.streaming_service.company,
                link: movie.streaming_service.link
            },
            reviews: movie.reviews.map(review =>
                ({
                    username: review.username,
                    rating: review.rating,
                    review: review.review
                })
            )
        }
    })


console.log(movies)