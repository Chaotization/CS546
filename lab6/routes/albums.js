// Import the express router as shown in the lecture code
// Note: please do not forget to export the router!
import Router from "express"
import {bandData, albumData} from "../data/index.js";
import validation from "../helpers.js";

const router = Router();


router
    .route('/:bandId')
    .get(async (req, res) => {
        //code here for GET
        let id = req.params.bandId.toString();
        try {
            id =  await validation.checkBandId(id)
        } catch (e) {
            return res.status(400).json({error: e});
        }
        try {
            let band = await bandData.get(id);
            res.status(200).json(band.album);
        } catch (e) {
            return res.status(404).json({error: e});
        }
    })
    .post(async (req, res) => {
        //code here for POST
        let bandId = req.params.bandId;
        let album = req.body;
        try {
            album = await validation.checkPostAlbumData(bandId, album);
        } catch (e) {
            res.status(400).json({error: e});
        }
        try {
            const result = await albumData.create(
                album.bandId,
                album.title,
                album.releaseDate,
                album.tracks,
                album.rating);
            res.status(200).json(result);
        } catch (e) {
            return res.status(404).json({error: e});
        }
     });

router
    .route('/album/:albumId')
    .get(async (req, res) => {
        //code here for GET
        let albumId = req.params.albumId.toString();
        try {
            albumId =  await validation.checkAlbumId(albumId)
        } catch (e) {
            return res.status(400).json({error: e});
        }
        try {
            let album = await albumData.get(albumId);
            res.status(200).json(album);
        } catch (e) {
            return res.status(404).json({error: e});
        }
    })
    .delete(async (req, res) => {
        //code here for DELETE
        let albumId = req.params.albumId.toString();
        try {
            albumId =  await validation.checkAlbumId(albumId)
        } catch (e) {
            return res.status(400).json({error: e});
        }
        try {
            let album = await albumData.remove(albumId);
            res.status(200).json(album);
        } catch (e) {
            return res.status(404).json({error: e});
        }
    });

export default router