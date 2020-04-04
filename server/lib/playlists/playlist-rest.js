const { ensureAuthenticated } = require("../../utils/middleware");

module.exports = (app, spotifyApi) => {
  app.get("/playlists", ensureAuthenticated, function(req, res) {
    console.log(req.session.passport.user.accessToken);
    let result = {
      playlists: []
    };
    spotifyApi.setAccessToken(req.session.passport.user.accessToken);
    spotifyApi
      .getUserPlaylists(req.session.passport.user.id, { limit: 50 })
      .then(data => {
        data.body.items.forEach(item => result.playlists.push(item));

        const template = Handlebars.compile(
          fs.readFileSync("./views/playlists.hbs", "utf-8")
        );
        res.status(200).send(template(result));
      });
  });
};
