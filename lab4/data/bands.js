// TODO: Export and implement the following functions in ES6 format
import {bands} from '../config/mongoCollections.js'
import {ObjectId} from "mongodb";
const checkId = (id) =>{
    if(!id){
        throw `No id is provided`;
    }
    if(typeof id !== "string" || id.trim().length === 0){
        throw `The id provided is not a string or an  empty string`;
    }
    if(!ObjectId.isValid(id)){
        throw `Invalid Object ID`;
    }
}
export const create = async (
  name,
  genre,
  website,
  recordCompany,
  groupMembers,
  yearBandWasFormed
) => {
    if(!name){
        throw `Name not provided`;
    }
    if(!genre){
        throw "Genre not provided";
    }
    if(!website){
        throw `Website not provided`;
    }
    if(!recordCompany){
        throw `RecordCompany not provided`;
    }
    if(!groupMembers){
        throw `GroupMembers not provided`;
    }
    if(!yearBandWasFormed){
        throw `YearBandWasFormed not provided`;
    }
    if(typeof name !== "string" || name.trim().length === 0){
        throw `Name is not string or empty string`;
    }
    if(typeof website !== "string" || website.trim().length === 0){
        throw `Website is not string or empty string`;
    }
    if(typeof recordCompany !== "string" || recordCompany.trim().length === 0){
        throw `RecordCompany is not string or empty string`;
    }
    if(!website.includes("http://www.") || !website.endsWith(".com")){
        throw `Website does not contain http://www. or end in a .com`;
    }
    if(Math.abs(website.lastIndexOf(".com") - (website.indexOf("http://www.") + "http://www.".length)) < 5){
        throw `At least 5 characters in-between the http://www. and .com`;
    }
    if(!Array.isArray(genre) || genre.length < 1){
        throw `Genre is not array or  do not have at least one element`;
    }
    if(!Array.isArray(groupMembers) || groupMembers.length < 1){
        throw `GroupMembers is not array or  do not have at least one element`;
    }
    if(genre.every(elem=> typeof elem !== "string" || elem.trim().length === 0) ||
        groupMembers.every(elem=> typeof elem !== "string" ||  elem.trim().length === 0)){

        throw `At LEAST one element that's a valid string`;
    }
    if(typeof yearBandWasFormed !== "number"){
        throw `YearBandWasFormed is not a number`;
    }
    if(yearBandWasFormed < 1900 || yearBandWasFormed > 2023){
        throw `Only years 1900-2023 are valid values`;
    }
    const brandCollection = await bands();
    let band = {
        name: name,
        genre: genre,
        website: website,
        recordCompany: recordCompany,
        groupMembers: groupMembers,
        yearBandWasFormed: yearBandWasFormed
    };
    const insertInfo = await brandCollection.insertOne(band);
    if(!insertInfo.acknowledged || !insertInfo.insertedId){
        throw `Could not add band`;
    }
    band._id = insertInfo.insertedId.toString();
    band = Object.assign({ _id: band._id }, band);
    return band;
};

export const getAll = async () => {
    const bandCollection = await bands();
    let bandList = await bandCollection.find({}).toArray();

    if(!bandList) throw `Could not get all bands`;
    bandList = bandList.map(element=>{
        element._id = element._id.toString();
        return element;
    });
    return bandList;
};

export const get = async (id) => {
    checkId(id);
    id = id.trim();
    const bandCollection = await bands();
    const getBand = await bandCollection.findOne({_id: new ObjectId(id)});
    if(getBand === null) {
        throw `No band with that id`;
    }
    getBand._id = getBand._id.toString();
    return getBand;
};

export const remove = async (id) => {
    checkId(id);
    id = id.trim();
    const bandCollection = await bands();
    const removeBand = await bandCollection.findOneAndDelete({_id: new ObjectId(id)});
    if(removeBand.lastErrorObject.n === 0) {
        throw `Could not delete band with id of ${id}`;
    }
    return `The ${removeBand.value.name} has been successfully deleted!`;
};

export const rename = async (id, newName) => {
    checkId(id);
    id = id.trim();
    if(!newName){
        throw `No newName is provided`;
    }
    if(typeof newName !== "string"){
        throw `The newName provided is not a string`;
    }
    if(newName.trim().length === 0){
        throw `newName cannot be an empty string or string with just spaces`;
    }
    const updatedName = {
        name: newName
    };
    const bandCollection = await bands();
    const getBand = await bandCollection.findOne({_id: new ObjectId(id)});
    if(getBand === null) {
        throw `No band with that id`;
    }
    if(getBand.name === newName){
        throw `The newName is the same as the current value stored in the database`
    }
    const updatedInfo = await bandCollection.findOneAndUpdate(
        {_id: new ObjectId(id)},
        {$set: updatedName},
        {returnDocument: 'after'}
    );
    if(updatedInfo.lastErrorObject.n === 0){
        throw 'could not update dog successfully';
    }
    updatedInfo.value._id = updatedInfo.value._id.toString();
    return updatedInfo.value;
};
