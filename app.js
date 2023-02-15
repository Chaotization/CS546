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

async function main(){
    try{
        let usersData = await getUserById("48fded55-37cd-4e6b-8f19-e78b481a14a4");
        console.log (usersData);
    }catch(e){
        console.log (e);
    }

    try{
        let userData = await getUserById('7989fa5e-5617-43f7-a931-46036f9dbcff');
        console.log(userData);
    }catch (e){
        console.log(e);
    }

    try{
        let userData = await sameGenre("Action");
        console.log(userData);
    }catch (e) {
        console.log(e);
    }

    try{
        let userData = await sameGenre(["Action"]);
        console.log(userData);
    }catch (e) {
        console.log(e);
    }
    try{
        let movieReviewed = await moviesReviewed("64035fad-a5b7-48c9-9317-3e31e22fe26c");
        console.log(movieReviewed);
    }catch (e) {
        console.log(e);
    }


}

main()

