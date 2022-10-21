const User = require('../models').User;

module.exports = {
  new: function (req, resp) {
    resp.render('registrations/new');
  },
  create: function (req, resp) {
    const data = {
      email: req.body.email,
      password: req.body.password,
    };

    User.create(data)
      .then(result => {
        resp.json(result);
      })
      .catch(err => {
        resp.json(err);
      });
  },
};
