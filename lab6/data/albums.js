// This data file should export all functions using the ES6 standard as shown in the lecture code

import {bands} from "../config/mongoCollections.js";
import validation from "../helpers.js";
import {ObjectId} from "mongodb";

let exportedMethods = {
    async create(
        bandId,
        title,
        releaseDate,
        tracks,
        rating
    ) {
        let albumData = await validation.checkAlbumConditions(
            bandId,
            title,
            releaseDate,
            tracks,
            rating)
        const bandCollection = await bands();
        let bandData = await bandCollection.findOne({_id: new ObjectId(bandId)});
        const album = {
            _id: new ObjectId(),
            title: albumData.title,
            releaseDate: albumData.releaseDate,
            tracks: albumData.tracks,
            rating: albumData.rating
        };
        let overallRating = bandData.album.reduce((acc, curr) => acc + curr.rating, rating) / (bandData.album.length + 1);
        let updateInfo = await bandCollection.updateOne(
            {_id: new ObjectId(bandId)},
            {$push: {album}, $set: {overallRating: overallRating.toFixed(1)}}
        );
        if (updateInfo.matchedCount === 0) {
            throw `Error: Update failed`;
        }
        return await bandCollection.findOne({_id: new ObjectId(bandId)});
    },

    async getAll(bandId) {
        bandId = await validation.checkBandId(bandId);
        const bandCollection = await bands();
        const getBand = await bandCollection.findOne({_id: new ObjectId(bandId)});
        if (getBand === null) {
            throw `No band with that id`;
        }
        return getBand.album;
    },

    async get(albumId) {
        albumId = await validation.checkAlbumId(albumId);
        const bandsCollection = await bands();
        let band = await bandsCollection.findOne({"album._id": new ObjectId(albumId)});
        if (band === null) {
            throw `No album with that id`;
        }
        band._id = band._id.toString();
        return band.album.filter(album => album._id.toString() === albumId);
    },

    async remove(albumId) {
        albumId = await validation.checkAlbumId(albumId);
        const bandCollection = await bands();
        let updateInfo = await bandCollection.findOneAndUpdate(
            {"album._id": new ObjectId(albumId)},
            {$pull: {album: {_id: new ObjectId(albumId)}}},
            {returnDocument: "after"}
        );
        if(updateInfo.lastErrorObject.n === 0){
            throw `Could not delete band with id of ${albumId}`;
        }
        const deleteAlbum = updateInfo.value.album.find(elem => elem._id === new ObjectId(albumId));
        const albums = updateInfo.value.album.filter(album => album.rating !== null);
        let overallRating = albums.reduce((acc, curr) => acc + curr.rating, 0) / (albums.length);
        await bandCollection.updateOne({_id: new ObjectId(updateInfo.value._id)}, {$set: {overallRating: overallRating.toFixed(1)}});
        return {albumId: albumId, deleted: deleteAlbum === undefined};
    }
};

export default exportedMethods;
