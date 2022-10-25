module.exports = function (req, resp, next) {
  if (!req.originalUrl.includes('tasks')) return next();
  if (req.session.userId) return next();
  resp.redirect('/session');
};
