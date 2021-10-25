const { Service, Users } = require('../db.js');

//por cada ruta un controler
async function getServices(req, res, next) {
  const { title } = req.query;

  try {
    const dbServices = await Service.findAll({
      //Traigo todo de la db
      include: {
        model: Users,
        through: { attributes: [] },
      },
    });

    if (!title) return res.send(dbServices);
    //Devuelvo todos los servicios
    else {
      if (dbServices.length > 0) {
        if (title) {
          //si me pasan un title busco en la db los que coincidan
          filteredServices = [];
          dbServices.map((service) => {
            if (service.title.toLowerCase().includes(title.toLowerCase()))
              filteredServices.push(service);
          });
          return res.send(filteredServices); //Si coincide mando el servicio con ese title
        } else return dbServices; //Si no, devuelvo todos los servicios
      }
    }
  } catch (err) {
    next(err);
  }
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
