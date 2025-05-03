const express = require("express");
const route = express.Router();
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

route.get("/", async (req, res) => {
  try {
    if (!req.query.ids) {
      return res.status(400).json({ error: "Missing ids parameter" });
    }
    let idsArray = Array.isArray(req.query.ids)
      ? req.query.ids
      : req.query.ids.split(",");

    const idString = idsArray.join(",");

    const response = await fetch(
      `https://api.spotify.com/v1/albums?ids=${encodeURIComponent(idString)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Spotify API returned an error");
    }

    const data = await response.json();
    res.json(data.albums);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Có lỗi xảy ra" });
  }
});

route.get("/album", async (req, res) => {
  const id = req.query.id;
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/albums/${encodeURIComponent(id)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

route.get("/newRelease", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/browse/new-releases?limit=10`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      console.error(data);
      return res
        .status(500)
        .json({ error: "Error fetching albums from Spotify" });
    }
    const albums = data.albums.items.map((item) => ({
      id: item.id,
      name: item.name,
      artists: item.artists.map((artist) => artist.name).join(", "),
      image: item.images[0]?.url,
    }));

    res.json({ albums });
  } catch (error) {
    console.error("Error fetching albums:", error);
    res.status(500).json({ error: "Error fetching albums from Spotify" });
  }
});

module.exports = route;
