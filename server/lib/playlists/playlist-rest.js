const fs = require("fs");
const Handlebars = require("handlebars");
const { ensureAuthenticated } = require("../../utils/middleware");

module.exports = (app, spotifyApi) => {
  // get list of playlists
  app.get("/playlists", ensureAuthenticated, function (req, res) {
    console.log(req.session.passport.user.accessToken);
    spotifyApi.setAccessToken(req.session.passport.user.accessToken);

    spotifyApi
      .getUserPlaylists(req.session.passport.user.id, { limit: 50 })
      .then(data => {
        // TODO - don't send all the data.
        res.status(200).send(data);
      });
  });

  app.get("/playlist/:id", ensureAuthenticated, function (req, res) {
    spotifyApi
      .getPlaylist(req.params.id)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(e => {
        res.sendStatus(400);
      });
  });
};
