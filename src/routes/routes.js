import express from "express";
import { searchArtist, getCharts,getPlayList } from "../controllers/tracks.js";
const router = express.Router();

router.route('/search-artist').get( searchArtist );
router.route('/charts').get(getCharts);
router.route('/playlist').get(getPlayList);


export default router;