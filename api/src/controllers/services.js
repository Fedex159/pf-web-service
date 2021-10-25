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

    if (userFound) {
      //creo el servicio y asocio el servicio creado al user que lo creó
      const serviceCreated = await Service.create({
        title,
        img,
        description,
        price,
        userId: userFound.id,
      });

      return res.status(200).send(serviceCreated);
    }

    return res.status(200).send({ message: 'User Not Found' });
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getServices,
  postServices,
};
