// You can add and export any helper functions you want here - if you aren't using any, then you can just leave this file as is
import {ObjectId} from "mongodb";
import {bands} from "./config/mongoCollections.js";

const exportedMethods = {
    async checkBandId(id) {
        if (!id) {
            throw `No id is provided`;
        }
        if (typeof id !== "string" || id.trim().length === 0) {
            throw `The id provided is not a string or an  empty string`;
        }
        if (!ObjectId.isValid(id)) {
            throw `Invalid Object ID`;
        }
        id = id.trim();
        const bandCollection = await bands();
        const getBand = await bandCollection.findOne({_id: new ObjectId(id)});
        if (getBand === null) {
            throw `No band with that id`;
        }
        return id;
    },
    async checkAlbumId(id) {
        if (!id) {
            throw `No id is provided`;
        }
        if (typeof id !== "string" || id.trim().length === 0) {
            throw `The id provided is not a string or an  empty string`;
        }
        if (!ObjectId.isValid(id)) {
            throw `Invalid Object ID`;
        }
        id = id.trim();
        const bandCollection = await bands();
        const album = await bandCollection.find({"album._id": new ObjectId(id)}).toArray();
        if (album === null) {
            throw `No album with that id`;
        }
        return id;
    },
    async checkBandConditions(name,
                        genre,
                        website,
                        recordCompany,
                        groupMembers,
                        yearBandWasFormed) {
        if (!name) {
            throw `Name not provided`;
        }
        if (!genre) {
            throw "Genre not provided";
        }
        if (!website) {
            throw `Website not provided`;
        }
        if (!recordCompany) {
            throw `RecordCompany not provided`;
        }
        if (!groupMembers) {
            throw `GroupMembers not provided`;
        }
        if (!yearBandWasFormed) {
            throw `YearBandWasFormed not provided`;
        }
        if (typeof name !== "string" || name.trim().length === 0) {
            throw `Name is not string or empty string`;
        }
        if (typeof website !== "string" || website.trim().length === 0) {
            throw `Website is not string or empty string`;
        }
        if (typeof recordCompany !== "string" || recordCompany.trim().length === 0) {
            throw `RecordCompany is not string or empty string`;
        }
        if (!website.includes("http://www.") || !website.endsWith(".com")) {
            throw `Website does not contain http://www. or end in a .com`;
        }
        if (Math.abs(website.lastIndexOf(".com") - (website.indexOf("http://www.") + "http://www.".length)) < 5) {
            throw `At least 5 characters in-between the http://www. and .com`;
        }
        if (!Array.isArray(genre) || genre.length < 1) {
            throw `Genre is not array or  do not have at least one element`;
        }
        if (!Array.isArray(groupMembers) || groupMembers.length < 1) {
            throw `GroupMembers is not array or  do not have at least one element`;
        }
        if (!genre.every(elem => typeof elem === "string" && elem.trim().length > 0) ||
            !groupMembers.every(elem => typeof elem === "string" && elem.trim().length > 0)) {
            throw `At LEAST one element that's a valid string`;
        }
        if (typeof yearBandWasFormed !== "number") {
            throw `YearBandWasFormed is not a number`;
        }
        if (yearBandWasFormed < 1900 || yearBandWasFormed > 2023) {
            throw `Only years 1900-2023 are valid values`;
        }
        name = name.trim();
        website = website.trim();
        recordCompany = recordCompany.trim();
        return {
            name: name,
            genre: genre,
            website: website,
            recordCompany: recordCompany,
            groupMembers: groupMembers,
            yearBandWasFormed: yearBandWasFormed
        };

    },

    async checkAlbumConditions(bandId,
                               title,
                               releaseDate,
                               tracks,
                               rating) {
        if (!bandId) {
            throw `bandId not provided`
        }
        if (!title) {
            throw `title not provided`
        }
        if (!releaseDate) {
            throw `releaseDate not provided`
        }
        if (!tracks) {
            throw `tracks not provided`
        }
        if (!rating) {
            throw `rating not provided`
        }
        if (typeof bandId !== "string" || bandId.trim().length === 0) {
            throw `bandId is not string or empty string`
        }
        if (typeof title !== "string" || title.trim().length === 0) {
            throw `title is not string or empty string`
        }
        if (typeof releaseDate !== "string" || releaseDate.trim().length === 0) {
            throw `releaseDate is not string or empty string`
        }
        if (!ObjectId.isValid(bandId)) {
            throw `Invalid Object ID`;
        }
        bandId = bandId.trim();
        title = title.trim();
        releaseDate = releaseDate.trim();
        const bandCollection = await bands();
        const getBand = await bandCollection.findOne({_id: new ObjectId(bandId)});
        if (getBand === null) {
            throw `No band with that id`;
        }
        if (!Array.isArray(tracks) || tracks.length < 3) {
            throw `tracks is not an array or it does not have at least 3 elements`
        }
        if (!tracks.every(elem => typeof elem === "string" && elem.trim().length > 0)) {
            throw `elements in the array that are not valid strings`
        }
        if (parseInt(releaseDate.split("/")[-1]) < 1900 || parseInt(releaseDate.split("/")[-1]) > 2023) {
            throw `Only years 1900-2023 are valid values`
        }
        if (typeof rating !== "number") {
            throw `rating is not a number`
        }
        if (parseFloat(rating).toFixed(1) < 1 || parseFloat(rating).toFixed(1) > 5) {
            throw `a number from 1 to 5`
        }
        return {
            bandId: bandId,
            title: title,
            releaseDate: releaseDate,
            tracks: tracks,
            rating: rating
        };
    },

    async checkPostBandData(postData) {
        const requiredFields = ["name", "genre", "website", "recordCompany", "groupMembers", "yearBandWasFormed"];
        requiredFields.forEach(element => {
            if (!postData[element] || postData[element] === null) {
                throw `There are no fields in the request body`;
            }
        })
        await this.checkBandConditions(postData.name, postData.genre, postData.website,
            postData.recordCompany, postData.groupMembers, postData.yearBandWasFormed);

        postData.name = postData.name.trim();
        postData.website = postData.website.trim();
        postData.recordCompany = postData.recordCompany.trim();
        return {
            name: postData.name,
            genre: postData.genre,
            website: postData.website,
            recordCompany: postData.recordCompany,
            groupMembers: postData.groupMembers,
            yearBandWasFormed: postData.yearBandWasFormed
        };
    },

    async checkPostAlbumData(bandId, postData) {
        if(!bandId){
            throw `There are no fields in the request body`;
        }
        const requiredFields = ["title", "releaseDate", "tracks", "rating"];
        requiredFields.forEach(element => {
            if (!postData[element] || postData[element] === null) {
                throw `There are no fields in the request body`;
            }
        })
        await this.checkAlbumConditions(bandId, postData.title, postData.releaseDate,
            postData.tracks, postData.rating);

        return {
            bandId: bandId,
            title: postData.title,
            releaseDate: postData.releaseDate,
            tracks: postData.tracks,
            rating: postData.rating
        };
    }
};

export default exportedMethods;