const { Service, Users } = require('../db.js');

//por cada ruta un controler
function getServices(req, res) {
  res.send('hola');
}

async function postServices(req, res, next) {
  try {
    //userName eventualmente debería ser enviada por cookie
    const { title, img, description, price, userName } = req.body;

    //busco el user que lo creó para asociárselo
    const userFound = await Users.findOne({
      where: {
        username: userName,
      },
    });

    //creo el servicio
    const serviceCreated = await Service.create({
      title,
      img,
      description,
      price,
      userId: userFound.id,
    });

    //asocio el servicio creado al user que lo creó
    return res.status(200).send(serviceCreated);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getServices,
  postServices,
};
