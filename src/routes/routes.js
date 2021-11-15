import express from "express";
import { searchArtist,getTracksBelogingToArtist,getCharts,getPlayList } from "../controllers/tracks.js";
const router = express.Router();

router.route('/search-artist').get( searchArtist );
router.route('/charts').get(getCharts);
router.route('/playlist').get(getPlayList);
router.route('/artist/tracks').get(getTracksBelogingToArtist);


export default router;