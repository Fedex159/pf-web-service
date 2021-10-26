const { services } = require('../utils/services');

function getCategories(req, res, next) {
  try {
    res.status(200).send(services);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getCategories,
};
