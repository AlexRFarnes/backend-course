const Category = require('../models').Category;

module.exports = {
  index: function (req, resp) {
    Category.findAll().then(categories => {
      resp.render('categories/index', { categories });
    });
  },
  show: function (req, resp) {
    Category.findByPk(req.params.id).then(category => {
      resp.render('categories/show', { category });
    });
  },
  new: function (req, resp) {
    resp.render('categories/new');
  },
  create: function (req, resp) {
    Category.create({
      title: req.body.title,
      color: req.body.color,
    })
      .then(result => {
        // resp.json(result);
        resp.redirect('/categories');
      })
      .catch(err => {
        console.log(err);
        resp.json(err);
      });
  },
  edit: function (req, resp) {
    Category.findByPk(req.params.id).then(category => {
      resp.render('categories/edit', { category });
    });
  },
  update: function (req, resp) {
    Category.update(
      { title: req.body.title, color: req.body.color },
      { where: { id: req.params.id } }
    ).then(response => {
      resp.redirect('/categories/' + req.params.id);
    });
  },
  destroy: function (req, resp) {
    Category.destroy({ where: { id: req.params.id } }).then(
      countDestroyedEls => {
        resp.redirect('/categories');
      }
    );
  },
};
