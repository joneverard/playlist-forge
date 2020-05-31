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
        res.status(200).send(result);
      });
  });

  app.get("/playlist/:id", ensureAuthenticated, function (req, res) {
    spotifyApi
      .getPlaylist(req.params.id)
      .then(({ body }) => {
        const result = {
          ..._.pick(body, ["id"]),
          tracks: {
            items: _.map(body.tracks.items, ({ track }) => {
              if (!_.has(track, "track")) return;
              return {
                ..._.pick(track, ["artists", "name", "duration_ms"]),
                images: _.get(track, "album.images"),
                id: track.id,
              };
            }),
            total: _.get(body, "tracks.total"),
          },
        };

        res.status(200).send(result);
      })
      .catch(e => {
        res.sendStatus(400);
      });
  });
};
