const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const express = require("express")
const router = express.Router()

router.get('/', async (req, res) => {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter "q" is required' });
    }
  
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track,artist,album&limit=10`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`     }
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        console.error(data);
        return res.status(500).json({ error: 'Error searching Spotify' });
      }
  
      res.json(data);
    } catch (error) {
      console.error('Error searching Spotify:', error);
      res.status(500).json({ error: 'Error searching Spotify' });
    }
  });


module.exports = router
