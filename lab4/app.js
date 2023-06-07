import {create,getAll,get,remove,rename} from "./data/bands.js";
import {dbConnection, closeConnection} from "./config/mongoConnection.js";
import {ObjectId} from "mongodb";
const db = await dbConnection();
await db.dropDatabase();

let newObjId = new ObjectId();
let x = newObjId.toString()
let pinkFloyd = undefined;
let theBeatles = undefined;
let linkinPark = undefined;
let imagineDragon = undefined;
let coldPlay = undefined;

async function main() {
    //1. Create a band of your choice.
    try {
        pinkFloyd = await create("Pink Floyd", ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
                                 "http://www.pinkfloyd.com", "EMI", ["Roger Waters",
                                        "David Gilmour", "Nick Mason", "Richard Wright", "Sid Barrett" ], 1965);
        // 2. Log the newly created band. (Just that band, not all bands)
        console.log(pinkFloyd);
    } catch(e) {
        console.log(e);
    }
    // 3. Create another band of your choice.
    try {
        theBeatles = await create("The Beatles", ["Rock", "Pop", "Psychedelia"],
                                        "http://www.thebeatles.com", "Parlophone",
                                    ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"], 1960);
        console.log(theBeatles)
    } catch(e) {
        console.log(e);
    }
    // // // 5. Create the 3rd band of your choice.
    try {
        linkinPark = await create("Linkin Park", ["Alternative Rock", "Pop Rock", "Alternative Metal"],
                                        "http://www.linkinpark.com", "Warner", ["Chester Bennington",
                                                "Rob Bourdon", "Brad Delson", "Mike Shinoda", "Dave Farrell", "Joe Hahn"], 1996);
        console.log(linkinPark);
    } catch(e) {
        console.log(e);
    }
    try {
        // 6. Log the newly created 3rd band. (Just that band, not all bands)
        const getThird = await get(linkinPark._id.toString());
        console.log(getThird);
    }catch(e){
        console.log(e);
    }
    // // // 4. Query all bands, and log them all
    try{
        const all = await getAll();
        console.log(all);
    }catch (e){
        console.log(e);
    }

    // // 7. Rename the first band
    try{
        const renameFirst = await rename(pinkFloyd._id.toString(), "Queen");
        console.log(renameFirst)
    }catch (e){
        console.log(e);
    }
        // 8. Log the first band with the updated name.
    try {

        const getRenamed = await get(pinkFloyd._id.toString());
        console.log(getRenamed);
    }catch(e){
        console.log(e);
    }
    try {
        // 6. Log the newly created 3rd band. (Just that band, not all bands)
        const getRenamed = await get(linkinPark._id.toString());
        console.log(getRenamed);
    }catch(e){
        console.log(e);
    }
    // // // 9. Remove the second band you created.
    try{
        const removeSec = await remove(theBeatles._id.toString());
        console.log(removeSec);
    }catch (e){
        console.log(e);
    }

    // 10. Query all bands, and log them all
    try{
        const all = await getAll();
        console.log(all);
    }catch (e){
        console.log(e);
    }
    // // 11. Try to create a band with bad input parameters to make sure it throws errors.
    try{
        imagineDragon = await create("Imagine Dragon", ["Electropop", "Indie Pop", "Pop Rock"],
                                "http://www.imaginedragonsmusic.com","Interscope Records",["Dan Reynolds",
                                        "Wayne Sermon","Ben McKee", "Daniel Platzman"], 1899);
    } catch (e){
        console.log(e);
    }
    //
    try{
        imagineDragon = await create("Imagine Dragon", ["Electropop", "Indie Pop", "Pop Rock"],
                                "http://www.imic.com","Interscope Records",["Dan Reynolds",
                                        "Wayne Sermon","Ben McKee", "Daniel Platzman"], 2003);
    } catch (e){
        console.log(e);
    }
    try{
        imagineDragon = await create("Imagine Dragon", ["       "],
            "http://www.imaginedragonsmusic.com","Interscope Records",["Dan Reynolds",
                "Wayne Sermon","Ben McKee", "Daniel Platzman"], 2003);
    } catch (e){
        console.log(e);
    }
    //
    try{
        imagineDragon = await create("Imagine Dragon", ["Electropop", "Indie Pop", "Pop Rock"],
            "http://www.imaginedragonsmusic.com","Interscope Records",["    "], 2003);
    } catch (e){
        console.log(e);
    }

    try{
        imagineDragon = await create(123, ["Electropop", "Indie Pop", "Pop Rock"],
            "http://www.imaginedragonsmusic.com","Interscope Records",["Dan Reynolds",
                "Wayne Sermon","Ben McKee", "Daniel Platzman"], 2003);
    } catch (e){
        console.log(e);
    }
    //
    try{
        imagineDragon = await create("     ", ["Electropop", "Indie Pop", "Pop Rock"],
            "http://www.imaginedragonsmusic.com","Interscope Records",["    "], 2003);
    } catch (e){
        console.log(e);
    }
    //
    try{
        imagineDragon = await create("Imagine Dragon", ["Electropop", "Indie Pop", "Pop Rock"],
            "http://www.imaginedragonsmusic.com",123,["Dan Reynolds",
                "Wayne Sermon","Ben McKee", "Daniel Platzman"], 2003);
    } catch (e){
        console.log(e);
    }

    //
    // // 12. Try to remove a band that does not exist to make sure it throws errors.
    try {
        const removeBand = await remove("6046b7abf116ee30cd3b01z1");
    }catch (e){
        console.log(e);
    }
    try {
        const removeBand = await remove(x);
    }catch (e) {
        console.log(e)
    }

    try {
        const removeBand = await remove("     1    ");
    }catch (e){
        console.log(e);
    }

    try {
        const removeBand = await remove(123124);
    }catch (e){
        console.log(e);
    }

    // // 13. Try to rename a band that does not exist to make sure it throws errors.
    try{
        const renameBand = await rename("6046b7abf116ee30cd3b01z1", "OneRepublic")
    }catch (e){
        console.log(e);
    }
    // 14. Try to rename a band passing in invalid data for the newName parameter to make sure it throws errors.
    try{
        const renameBand = await rename(linkinPark._id.toString(), "   ")
    }catch (e){
        console.log(e);
    }
    // // 15. Try getting a band by ID that does not exist to make sure it throws errors.
    try{
        const getBand = await get("6046b7abf116ee30cd3b01z1");
    }catch (e){
        console.log(e);
    }
    try {
        const getBand = await get(newObjId.toString());
    }catch (e){
        console.log(e);
    }

    try{
        const getBand = await get("           ");
    }catch (e){
        console.log(e);
    }

    try{
        const getBand = await get(123124);
    }catch (e){
        console.log(e);
    }
    try {
        const getFirst = await get(x);
        console.log(getFirst)
    }catch(e){
        console.log(e);
    }

    await closeConnection();
    console.log('Done!');
}

main();


