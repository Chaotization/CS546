//You will code the route in this file
//Lecture Code Refernece -> https://github.com/stevens-cs546-cs554/CS-546/tree/master/lecture_05/routes
import {Router} from 'express'
const router = Router();

/*
import the router and create the follow routes using the GET http method

'/aboutme';
'/mystory';
'/educationhistory'

export the router */
router.get("/aboutme",
    async (req, res)=>{
        try{
            const aboutme = {
                "firstName": "Chao",
                "lastName": "Zheng",
                "biography": "I was major in electrical engineering at CUNY-College of Staten Island,\n" +
                                "and continue studying computer science at Stevens.",
                "favoriteMovies": ["Soul", "Nobody", "Wreck-It Ralph"],
                "hobbies": ["bike riding", "running", "hiking"],
                "fondestMemory": "The last time I went back to China"
            }
            res.json(aboutme);
    }catch (e){
        res.status(500).send(e);
    }
})

router.get("/mystory",
    async (req, res)=>{
        try{
            const mystory = {
                "storyTitle": "The Three-Body Problem",
                "storyGenre": "scientific fraction",
                "story": "The story begins during China's Cultural Revolution, where a young astrophysicist named Ye Wenjie watches her father being killed by Red Guards. She is later recruited to work at a secret military base where she sends a message to space about the harsh reality of humanity's self-destructive tendencies. " +
                    "Her message is received by an alien civilization that is facing its own imminent destruction due to the instability of its planetary system. The aliens send a fleet to Earth, hoping to conquer it and establish a new home for their civilization.\n" + "The novel also follows the story of Wang Miao, a nanotechnologist who becomes involved " +
                    "in a virtual reality game that is actually a complex test designed by the aliens to find humans who can help them take over Earth. As Wang uncovers the true purpose of the game, he is drawn into a battle between humanity and the aliens, which ultimately leads to a shocking revelation about the nature of the universe itself. " +
                    "the story explores themes of morality, human nature, and the vastness of the universe, while also providing a thought-provoking examination of how humanity would react to an extraterrestrial threat."

            }
            res.json(mystory);
        }catch (e){
            res.status(500).send(e);
        }
    })

router.get("/educationhistory",
    async (req, res)=>{
        try{
            const educationhistory = [
                {
                "schoolName": "ChaoDe High School",
                "degreeEarned": "H.S. Diploma",
                "numberOfYearsAttended": 2010,
                "favoriteClasses": ["Science", "Chemistry", "Music"],
                "favoriteSchoolMemory": "Classmate"
                },
                {
                "schoolName": "College of Staten Island",
                "degreeEarned": "Bachelor",
                "numberOfYearsAttended": 2018,
                "favoriteClasses": [" Analog and Digital Systems Design", "Modern physics", "Microcontroller"],
                "favoriteSchoolMemory": "Senior design and capstone"
                },
                {
                "schoolName": "Stevens Institute of Technology ",
                "degreeEarned": "Master",
                "numberOfYearsAttended": 2022,
                "favoriteClasses": ["Web Programing", "Algorithm", "Distributed System and Could Computing"],
                "favoriteSchoolMemory": "Senior design and capstone"
                }];
            res.json(educationhistory);
        }catch (e){
            res.status(500).send(e);
        }
    })

export default router;