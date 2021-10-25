const { Service } = require('../db.js');

//por cada ruta un controler
function getServices(req, res) {
  res.send('hola');
}

async function postServices(req, res, next) {
  try {
    const { title, img, description, price } = req.body;

    const serviceCreated = await Service.create({
      title,
      img,
      description,
      price,
    });

    return res.status(200).send(serviceCreated);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getServices,
  postServices,
};
