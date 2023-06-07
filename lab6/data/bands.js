// This data file should export all functions using the ES6 standard as shown in the lecture code
import {bands} from "../config/mongoCollections.js";
import validation from "../helpers.js";
import {ObjectId} from "mongodb";

let exportedMethods = {
    async create(
        name,
        genre,
        website,
        recordCompany,
        groupMembers,
        yearBandWasFormed
    ) {
        let bandData = await validation.checkBandConditions(
            name,
            genre,
            website,
            recordCompany,
            groupMembers,
            yearBandWasFormed
        );
        const brandCollection = await bands();
        let band = {
            name: bandData.name,
            genre: bandData.genre,
            website: bandData.website,
            recordCompany: bandData.recordCompany,
            groupMembers: bandData.groupMembers,
            yearBandWasFormed: bandData.yearBandWasFormed,
            album: [],
            overallRating: 0
        };
        const insertInfo = await brandCollection.insertOne(band);
        if (!insertInfo.acknowledged || !insertInfo.insertedId) {
            throw `Could not add band`;
        }
        band._id = insertInfo.insertedId.toString();
        band = Object.assign({_id: band._id}, band);
        return band;
    },

    async getAll(projection) {
        const bandCollection = await bands();
        let bandList = undefined;
        if (!projection) {
            bandList = await bandCollection.find({}).toArray();
        } else {
            bandList = await bandCollection.find({}).project(projection).toArray();
        }

        if (!bandList) throw `Could not get all bands`;
        bandList = bandList.map(element => {
            element._id = element._id.toString();
            return element;
        });
        return bandList;
    },

    async get(id) {
        id = await validation.checkBandId(id);
        const bandCollection = await bands();
        const getBand = await bandCollection.findOne({_id: new ObjectId(id)});
        if (getBand === null) {
            throw `No band with that id`;
        }
        getBand._id = getBand._id.toString();
        return getBand;
    },

    async remove(id) {
        id = await validation.checkBandId(id);
        const bandCollection = await bands();
        const removeBand = await bandCollection.deleteOne({_id: new ObjectId(id)});
        if (removeBand.deletedCount === 0) {
            throw `Could not delete band with id of ${id}`;
        }
        return {bandId: id, deleted: removeBand.deletedCount !== 0};
    },

    async update(
        id,
        name,
        genre,
        website,
        recordCompany,
        groupMembers,
        yearBandWasFormed
    ) {
        id = await validation.checkBandId(id);
        let bandData = await validation.checkBandConditions(
            name,
            genre,
            website,
            recordCompany,
            groupMembers,
            yearBandWasFormed
        );
        const bandCollection = await bands();
        const originalData = await bandCollection.findOne({_id: new ObjectId(id)});
        // const album = originalData.album;
        // const overRating = originalData.overRating;
        // let bandUpdate = {
        //     name: bandData.name,
        //     genre: bandData.genre,
        //     website: bandData.website,
        //     recordCompany: bandData.recordCompany,
        //     groupMembers: bandData.groupMembers,
        //     yearBandWasFormed: bandData.yearBandWasFormed,
        //     album: album,
        //     overRating: overRating
        // };
        const bandUpdate = {
            ...originalData, ...bandData,
            album: originalData.album, overallRating: originalData.overallRating
        };
        let updateInfo = await bandCollection.replaceOne(
            {_id: new ObjectId(id)},
            bandUpdate,
            {returnDocument: "after"}
        );

        if (updateInfo.matchedCount === 0) {
            throw `Error: Update failed`;
        }
        return await bandCollection.findOne({_id: new ObjectId(id)});
    }
};

export default exportedMethods;


