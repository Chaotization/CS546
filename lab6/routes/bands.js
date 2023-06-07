// Import the express router as shown in the lecture code
// Note: please do not forget to export the router!
import Router from "express"
const router = Router();
import validation from "../helpers.js";
import {bandData} from "../data/index.js"

router
    .route('/')
    .get(async (req, res) => {
        //code here for GET
        try {
            let bandList = await bandData.getAll({_id: 1, name: 1});
            res.json(bandList);
        } catch (e) {
            res.status(500).json({error: e});
        }
    })
    .post(async (req, res) => {
        //code here for POST
        let band = req.body;
        try {
            band = await validation.checkPostBandData(band);
        } catch (e) {
            res.status(400).json({error: e});
        }
        try {
            const result = await bandData.create(
                band.name,
                band.genre,
                band.website,
                band.recordCompany,
                band.groupMembers,
                band.yearBandWasFormed);
            res.status(200).json(result);
        } catch (e) {
            return res.status(404).json({error: e});
        }
    });

router
    .route('/:id')
    .get(async (req, res) => {
        //code here for GET
        let id = undefined;
        let band = undefined;
        try{
            id = await validation.checkBandId(req.params.id.toString());
        }catch(e){
            return res.status(400).json({error: e});
        }
        try{
             band = await bandData.get(id);
            res.status(200).json(band);
        }catch (e){
            return res.status(404).json({error: e});
        }

    })
    .delete(async (req, res) => {
        //code here for DELET
        let id = undefined;
        let deletePost = undefined;
        try{
            id = await validation.checkBandId(req.params.id.toString());
        }catch(e){
            return res.status(400).json({error: e});
        }
        try{
            deletePost = await bandData.remove(id);
            res.status(200).json(deletePost);
        }catch (e){
            return res.status(404).json({ error: e });
        }
    })
    .put(async (req, res) => {
        //code here for PUT
        let id = undefined;
        let updatedData = req.body;
        if (!updatedData || Object.keys(updatedData).length === 0) {
            return res.status(400).json({error: 'There are no fields in the request body'});}
        try{
            id = await validation.checkBandId(req.params.id.toString())
            updatedData = await validation.checkPostBandData(updatedData)
        }catch(e){
            return res.status(400).json({error: e});
        }
        try{
            let band = await bandData.get(id)
        }catch (e){
            return res.status(404).json({error: e});
        }
        try{
            const result = await bandData.update(
                id,
                updatedData.name,
                updatedData.genre,
                updatedData.website,
                updatedData.recordCompany,
                updatedData.groupMembers,
                updatedData.yearBandWasFormed
            );
            res.status(200).json(result);
        }catch (e){
            return res.status(400).json({error: e});
        }
    });

export default router;