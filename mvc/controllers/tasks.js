const Task = require('../models').Task;
const User = require('../models').User;

module.exports = {
  index: function (req, resp) {
    Task.findAll().then(tasks => {
      resp.render('tasks/index', { tasks: req.user.tasks });
    });
  },
  show: function (req, resp) {
    Task.findByPk(req.params.id, {
      include: [{ model: User, as: 'user' }, 'categories'],
    }).then(task => {
      resp.render('tasks/show', { task });
    });
  },
  edit: function (req, resp) {
    Task.findByPk(req.params.id).then(task => {
      resp.render('tasks/edit', { task });
    });
  },
  create: function (req, resp) {
    Task.create({ description: req.body.description, userId: req.user.id })
      .then(result => {
        // resp.json(result);
        resp.redirect('/tasks');
      })
      .catch(err => {
        console.log(err);
        resp.json(err);
      });
  },
  update: function (req, resp) {
    Task.update(
      { description: req.body.description },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(response => {
      resp.redirect('/tasks/' + req.params.id);
    });
  },
  new: function (req, resp) {
    resp.render('tasks/new');
  },
  destroy: function (req, resp) {
    Task.destroy({ where: { id: req.params.id } }).then(deletedEls => {
      resp.redirect('/tasks');
    });
  },
};
