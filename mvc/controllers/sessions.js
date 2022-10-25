const User = require('../models').User;

module.exports = {
  new: function (req, resp) {
    resp.render('sessions/new');
  },
  create: function (req, resp) {
    User.login(req.body.email, req.body.password)
      .then(user => {
        if (user) {
          req.session.userId = user.id;
        }
        resp.redirect('/');
      })
      .catch(err => {
        console.log(err);
        resp.json(err);
      });
  },
  destroy: function (req, resp) {
    req.session.destroy(() => {
      resp.redirect('/session');
    });
  },
};
