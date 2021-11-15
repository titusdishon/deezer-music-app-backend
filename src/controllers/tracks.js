
import DeezerPublicApi from 'deezer-public-api';
let deezer = new DeezerPublicApi();

export const getCharts = async (req, res) => {
    const { limit, index } = req.query;
    if (!limit || !index) {
        res.status(400).send('limit and index are required');
    }
    const charts = await deezer.chart(limit, index);
    res.status(200).send(charts);
}

export const getPlayList = async (req, res) => {
    const { id, limit, index } = req.query;
    if (!limit || !index || !id) {
        res.status(400).send('limit, id and index are required');
    }
    const playList = await deezer.playlist(id, limit, index);
    res.status(200).send(playList);
}

export const searchArtist = async (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.status(400).json({ error: 'Please provide a search query' });
    }
    try {
        const results = await deezer.search.artist(query, 'artist', 5, 1);
        res.status(200).send(results);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
