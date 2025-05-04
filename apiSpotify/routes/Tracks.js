const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const express = require("express")
const route = express.Router()
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
      `https://api.spotify.com/v1/tracks?ids=${encodeURIComponent(idString)}`,
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
    res.json(data.tracks); // Trả về đúng mảng tracks
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Có lỗi xảy ra" });
  }
});

route.get("/Track", async (req, res) => {
  try {
    const id = req.query.id;

    if (!id) {
      return res.status(400).json({ error: "Missing ids paramater" });
    }

    const response = await fetch(
      `https://api.spotify.com/v1/tracks/${encodeURIComponent(id)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`, // Thêm Authorization header
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Có lỗi xảy ra" });
  }
});


module.exports = route