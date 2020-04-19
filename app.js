require("dotenv").config();
var express = require("express"),
  session = require("express-session"),
  passport = require("passport"),
  swig = require("swig");

const axios = require("axios");
const fs = require("fs");
const Handlebars = require("handlebars");

const { ensureAuthenticated } = require("./server/utils/middleware");

var consolidate = require("consolidate");

// var appKey = 'bb200fb215c346448b3c34bbccaac25d';
// var appSecret = '0902db0eb5274d4a8f3ec07d3d00d2c8';

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session. Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing. However, since this example does not
//   have a database of user records, the complete spotify profile is serialized
//   and deserialized.
// so in the future will need to set up a database of users, and store the user in there instead.

var SpotifyWebApi = require("spotify-web-api-node");

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: process.env.APP_KEY,
  clientSecret: process.env.APP_SECRET,
  redirectUri: "http://localhost:8888/callback",
});

var app = express();

// configure Express
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(
  session({ secret: "ABCD123000ZZDEF", resave: true, saveUninitialized: true })
);
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + "/public"));

app.engine("html", consolidate.swig);

app.get("/", function (req, res) {
  res.render("index.html", { user: req.user });
});

require("./server/lib/auth/auth-rest.js")(app);
require("./server/lib/playlists/playlist-rest.js")(app, spotifyApi);

app.get("/account", ensureAuthenticated, function (req, res) {
  console.log("ACCOUNT", req.session);
  //
  res.render("account.html", { user: req.user });
});

app.listen(8888);
