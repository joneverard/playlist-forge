const fs = require("fs");
const Handlebars = require("handlebars");
const { ensureAuthenticated } = require("../../utils/middleware");

const _ = require("lodash");

module.exports = (app, spotifyApi) => {
  // get list of playlists
  app.get("/playlists", ensureAuthenticated, function (req, res) {
    console.log(req.session.passport.user.accessToken);
    spotifyApi.setAccessToken(req.session.passport.user.accessToken);
    spotifyApi
      .getUserPlaylists(req.session.passport.user.id, { limit: 50 })
      .then(({ body }) => {
        const result = {
          ..._.pick(body, ["total", "offset"]),
          playlists: _.map(body.items, item =>
            _.pick(item, ["id", "name", "tracks", "description", "images"])
          ),
        };
        console.log(result);
        res.status(200).send(result);
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
