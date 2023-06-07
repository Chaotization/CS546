import {dbConnection, closeConnection} from "../config/mongoConnection.js";
import {bandData, albumData} from "../data/index.js";


const main = async () => {
    const db = await dbConnection();
    await db.dropDatabase();

    const bandOne = {
        name: "Pink Floyd",
        genre: ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
        website: "http://www.pinkfloyd.com",
        recordCompany: "EMI",
        groupMembers: ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright", "Sid Barrett"],
        yearBandWasFormed: 1965
    };

    const bandTwo = {
        name: "The Beatles",
        genre: ["Rock", "Pop", "Psychedelia"],
        website: "http://www.thebeatles.com",
        recordCompany: "Parlophone",
        groupMembers: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
        yearBandWasFormed: 1960
    };

    const bandThree = {
        name: "Linkin Park",
        genre: ["Alternative Rock", "Pop Rock", "Alternative Metal"],
        website: "http://www.linkinpark.com",
        recordCompany: "Warner",
        groupMembers: ["Chester Bennington", "Rob Bourdon", "Brad Delson", "Mike Shinoda", "Dave Farrell", "Joe Hahn"],
        yearBandWasFormed: 1996
    };

    const bandFour = {
        name: "Imagine Dragon",
        genre: ["Electropop", "Indie Pop", "Pop Rock"],
        website: "http://www.imaginedragonsmusic.com",
        recordCompany: "Interscope Records",
        groupMembers: ["Dan Reynolds", "Wayne Sermon", "Ben McKee", "Daniel Platzman"],
        yearBandWasFormed: 2003
    };

    const bandFive = {
        name: "Queen",
        genre: ["Heavy metal", "Glam rock", "Camp theatrics"],
        website: "http://www.queenonline.com",
        recordCompany: "Capitol Records",
        groupMembers: ["Freddie Mercury", " Brian May", "Roger Taylor", "John Deacon"],
        yearBandWasFormed: 1970
    };

    const bandSix = {
        name: "Led Zeppelin",
        genre: ["Rock", "Hard Rock", "Heavy Metal"],
        website: "http://www.ledzeppelin.com",
        recordCompany: "Atlantic Records",
        groupMembers: ["Jimmy Page", "Robert Plant", "John Bonham", "John Paul Jones"],
        yearBandWasFormed: 1968
    };

    const bandSeven = {
        name: "U2",
        genre: ["Rock", "Pop", "Alternative"],
        website: " http://www.u2.com",
        recordCompany: "Island Records",
        groupMembers: ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."],
        yearBandWasFormed: 1968
    };

    const bandEight = {
        name: "Guns N' Roses",
        genre: ["Hard Rock", "Heavy Metal", "Glam Metal"],
        website: "http://www.gunsnroses.com",
        recordCompany: "Dizzy Reed",
        groupMembers: ["Axl Rose", "Slash", "Duff McKagan", "Dizzy Reed"],
        yearBandWasFormed: 1985
    };

    const bandNine = {
        name: "AC/DC",
        genre: ["Hard Rock", "Heavy Metal", "Blues Rock"],
        website: "http://www.acdc.com",
        recordCompany: "Columbia Records",
        groupMembers: ["Brian Johnson", "Angus Young", "Malcolm Young", "Phil Rudd", "Cliff Williams"],
        yearBandWasFormed: 1973
    };

    const bandTen = {
        name: "Rolling Stones",
        genre: ["Rock", "Blues", "R&B"],
        website: "http://rollingstones.com",
        recordCompany: "Columbia Records",
        groupMembers: ["Mick Jagger", "Keith Richards", "Charlie Watts", "Ronnie Wood"],
        yearBandWasFormed: 1962
    };

    const albumOne = {
        title: "Thriller",
        releaseDate: "11/30/1982",
        tracks: ["Wanna Be Startin' Somethin'", "Baby Be Mine", "The Girl Is Mine", "Thriller", "Beat It",
            "Billie Jean", "Human Nature", "P.Y.T. (Pretty Young Thing)", "The Lady in My Life"],
        rating: 5
    };

    const albumTwo = {
        title: "The Dark Side of the Moon",
        releaseDate: "03/01/1973",
        tracks: ["Speak to Me", "Breathe", "On the Run", "Time", "The Great Gig in the Sky",
            "Money", "Us and Them", "Any Colour You Like", "Brain Damage", "Eclipse"],
        rating: 5
    };

    const albumThree = {
        title: "Abbey Road",
        releaseDate: "09/26/1969",
        tracks: ["Come Together", "Something", "Maxwell's Silver Hammer", "Oh! Darling", "Octopus's Garden", "I Want You",
            "Here Comes the Sun", "Because", "You Never Give Me Your Money", "Sun King", "Mean Mr. Mustard", "Polythene Pam",
            "She Came In Through the Bathroom Window", "Golden Slumbers", "Carry That Weight", "The End", "Her Majesty"],
        rating: 4.8
    };

    const albumFour = {
        title: "Rumours",
        releaseDate: "02/04/1977",
        tracks: ["Second Hand News", "Dreams", "Never Going Back Again", "Don't Stop", "Go Your Own Way", "Songbird",
            "The Chain", "You Make Loving Fun", "I Don't Want to Know", "Oh Daddy", "Gold Dust Woman"],
        rating: 4.6
    };

    const albumFive = {
        title: "Purple Rain",
        releaseDate: "06/25/1984",
        tracks: ["Let's Go Crazy", "Take Me With U", "The Beautiful Ones", "Computer Blue",
            "Darling Nikki", "When Doves Cry", "I Would Die 4 U", "Baby I'm a Star", "Purple Rain"],
        rating: 4.6
    };

    const albumSix = {
        title: "Nevermind",
        releaseDate: "09/24/1991",
        tracks: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are", "Breed", "Lithium", "Polly",
            "Territorial Pissings", "Drain You", "Lounge Act", "Stay Away", "On a Plain", "Something in the Way"],
        rating: 4.3
    };

    const albumSeven = {
        title: "Back in Black",
        releaseDate: "07/25/1980",
        tracks: ["Hells Bells", "Shoot to Thrill", "What Do You Do for Money Honey", "Givin the Dog a Bone", "Let Me Put My Love into You",
            "Back in Black", "You Shook Me All Night Long", "Have a Drink on Me", "Shake a Leg", "Rock and Roll Ain't Noise Pollution"],
        rating: 4
    };
    const albumEight = {
        title: "Wish You Were Here",
        releaseDate: "09/12/1975",
        tracks: ["Shine On You Crazy Diamond, Pts. 1-5", "Welcome to the Machine", "Have a Cigar (Ft. Roy Harper)", "Wish You Were Here", "Shine On You Crazy Diamond, Pts. 6-9"],
        rating: 5
    };

    let test = undefined;
    let test1 = undefined;
    let bandId = undefined;
    let bandId1 = undefined;
    try {
        test = await bandData.create(bandOne.name, bandOne.genre, bandOne.website,
            bandOne.recordCompany, bandOne.groupMembers, bandOne.yearBandWasFormed);
        await bandData.create(bandTwo.name, bandTwo.genre, bandTwo.website,
            bandTwo.recordCompany, bandTwo.groupMembers, bandTwo.yearBandWasFormed);
        await bandData.create(bandThree.name, bandThree.genre, bandThree.website,
            bandThree.recordCompany, bandThree.groupMembers, bandThree.yearBandWasFormed);
        await bandData.create(bandFour.name, bandFour.genre, bandFour.website,
            bandFour.recordCompany, bandFour.groupMembers, bandFour.yearBandWasFormed);
        await bandData.create(bandFive.name, bandFive.genre, bandFive.website,
            bandFive.recordCompany, bandFive.groupMembers, bandFive.yearBandWasFormed);

        test1 = await bandData.create(bandSix.name, bandSix.genre, bandSix.website,
            bandSix.recordCompany, bandSix.groupMembers, bandSix.yearBandWasFormed);
        await bandData.create(bandEight.name, bandEight.genre, bandEight.website,
            bandEight.recordCompany, bandEight.groupMembers, bandEight.yearBandWasFormed);
        bandId = test._id.toString();
        bandId1 = test1._id.toString();
    } catch (e) {
        console.log(e);
    }

    try {
        await albumData.create(bandId, albumOne.title, albumOne.releaseDate, albumOne.tracks, albumOne.rating);
        await albumData.create(bandId1, albumTwo.title, albumTwo.releaseDate, albumTwo.tracks, albumTwo.rating);
        await albumData.create(bandId, albumThree.title, albumThree.releaseDate, albumThree.tracks, albumThree.rating);

    } catch (e) {
        console.log(e);
    }

    console.log("Done");
    await closeConnection();
}

main();