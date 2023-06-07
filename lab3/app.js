/*
This file is where you will import your functions from the two other files and run test cases on your functions by calling them with various inputs.  We will not use this file for grading and is only for your testing purposes to make sure:

1. Your functions in your 2 files are exporting correctly.

2. They are returning the correct output based on the input supplied (throwing errors when you're supposed to, returning the right results etc..).

Note: 
1. You will need an async function in your app.js file that awaits the calls to your function like the example below. You put all of your function calls within main each in its own try/catch block. and then you just call main().
2. Do not create any other files beside the 'package.json' - meaning your zip should only have the files and folder in this stub and a 'package.json' file.
3. Submit all files (including package.json) in a zip with your name in the following format: LastName_FirstName.zip.
4. DO NOT submit a zip containing your node_modules folder.
*/
import {getUserById, sameGenre, moviesReviewed, referMovies} from "./users.js"
import {findMoviesByCastMember, findMoviesByDirector, getMovieById, getOverallRating} from "./movies.js";

async function main(){
    //Question 1 in users
    // try{
    //     let usersData = await getUserById("48fded55-37cd-4e6b-8f19-e78b481a14a4");
    //     console.log (usersData);
    // }catch(e){
    //     console.log (e);
    // }
    //
    // try{
    //     let userData = await getUserById('7989fa5e-5617-43f7-a931-46036f9dbcff');
    //     console.log(userData);
    // }catch (e){
    //     console.log(e);
    // }
    //
    // try{
    //     let userData = await getUserById(" 9dc9402d-980f-41b1-a0c3-65e277364c07 ");
    //     console.log(userData);
    // }catch (e){
    //     console.log(e);
    // }
    try{
        let userData = await sameGenre("aDvenTure");
        console.log(userData);
    }catch (e) {
        console.log(e);
    }
    //
    // try{
    //     let userData = await sameGenre(true);
    //     console.log(userData);
    // }catch (e) {
    //     console.log(e);
    // }
    // try{
    //     let movieReviewed = await moviesReviewed("64035fad-a5b7-48c9-9317-3e31e22fe26c");
    //     console.log(movieReviewed);
    // }catch (e) {
    //     console.log(e);
    // }
    // try{
    //     let movieReviewed = await moviesReviewed('7989fa5e-5617-43f7-a931-46036f9dbcff');
    //     console.log(movieReviewed);
    // }catch (e) {
    //     console.log(e);
    // }
    // try{
    //     let movies = await referMovies("5060fc9e-10c7-4f38-9f3d-47b7f477568b");
    //     console.log(movies);
    // }catch (e){
    //     console.log(e);
    // }
    // try{
    //     let movies = await referMovies('7989fa5e-5617-43f7-a931-46036f9dbcff');
    //     console.log(movies);
    // }catch (e){
    //     console.log(e);
    // }
    // try{
    //     let director = await findMoviesByDirector("Fernando Dollimore");
    //     console.dir(director,{depth: null});
    // }catch (e){
    //     console.log(e);
    // }
    // try{
    //     let director = await findMoviesByDirector("Anabelle Kirkup");
    //     console.dir(director, {depth: null});
    // }catch (e){
    //     console.log(e);
    // }
    // try{
    //     let cast = await findMoviesByCastMember("Huberto Snoddon");
    //     console.dir(cast, {depth: null});
    // }catch (e){
    //     console.log(e);
    // }
    // try{
    //     let cast = await findMoviesByCastMember("Milly Eamer");
    //     console.log(cast, {depth: null});
    // }catch (e){
    //     console.log(e);
    // }
    // try{
    //     let sum = await getOverallRating("Asterix and the Vikings (Astérix et les Vikings)");
    //     console.log(sum);
    // }catch (e){
    //     console.log(e);
    // }
    // try{
    //     let sum = await getOverallRating();
    //     console.log(sum);
    // }catch (e){
    //     console.log(e);
    // }
    // try{
    //     let id = await getMovieById("38fd6885-0271-4650-8afd-6d09f3a890a2");
    //     console.dir(id, {depth: null})
    // }catch (e){
    //     console.log(e);
    // }
    // try{
    //     let id = await getMovieById("7989fa5e-5617-43f7-a931-46036f9dbcff");
    //     console.dir(id, {depth: null})
    // }catch (e){
    //     console.log(e);
    // }

}

main()

