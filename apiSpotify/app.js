require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const querystring = require("querystring");
const fetch = require("node-fetch");
const { use } = require("react");
const albums = require("./routes/Albums");
const tracks = require("./routes/Tracks");
const routest = require("./routes/routetest")

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URL;
const frontEnd_URL = process.env.REDIRECT_FRONTEND;
const corsOptions = {
  origin: '*',
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
};

app.use(cors(corsOptions));


const generateRandomString = function (length) {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

app.get("/login", async (req, res) => {
  let state = generateRandomString(16);
  const scope = "user-read-private user-read-email";
  console.log("Client ID:", client_id);
  console.log("Client Secret:", client_secret);
  console.log("Redirect URI:", redirect_uri);
  // Redirect tới Spotify authorize
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

app.get("/callback", async (req, res) => {
  const code = req.query.code || null;

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(client_id + ":" + client_secret).toString("base64"),
      },
      body: querystring.stringify({
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const access_token = data.access_token;
      const refresh_token = data.refresh_token;
      return res.redirect(
        `${frontEnd_URL}/auths/auth-success?` +
          querystring.stringify({ access_token, refresh_token })
      );
    } else {
      return res.redirect(
        frontEnd_URL +
          "/auth-fail?" +
          querystring.stringify({ error: "token_error" })
      );
    }
  } catch (error) {
    return res.redirect(
      frontEnd_URL +
        "/auth-fail?" +
        querystring.stringify({ error: "server_error" })
    );
  }
});

app.get("/refresh_token", async (req, res) => {
  const refresh_token = req.query.refresh_token;
  if (!refresh_token) {
    return res.status(400).json({ error: "Missing refresh_token" });
  }

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(client_id + ":" + client_secret).toString("base64"),
      },
      body: querystring.stringify({
        grant_type: "refresh_token",
        refresh_token: refresh_token,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      res.json({
        access_token: data.access_token,
        expires_in: data.expires_in,
      });
    } else {
      res.status(500).json({ error: "Could not refresh token" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});


app.use("/spotify/albums",albums)
app.use("/spotify/tracks",tracks)
app.use("/spotify/search",routest)

app.listen(3000, "0.0.0.0", () => {
  console.log(`Server is running`);
});