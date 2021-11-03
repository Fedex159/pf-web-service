const {
  Service,
  Users,
  Qualification,
  Category,
  Group,
  Province,
} = require('../db.js');
const { addRating } = require('../utils/index');
const { Op } = require('sequelize');

//------------------------------------------------------------------------------------------------------price

async function orderByPrice(objQuery, res, next) {
  const { order, province, group, category, startRange, endRange } = objQuery;
  let priceFilter;
  var array = category.split(',');

  if (
    order === 'ASC' &&
    !province &&
    !group &&
    !category &&
    !startRange &&
    !endRange
  ) {
    console.log('llego bien');
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      limit: 30,
      order: [['price', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    !province &&
    !group &&
    !category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      limit: 30,
      order: [['price', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    !province &&
    !group &&
    category &&
    !startRange &&
    !endRange
  ) {
    console.log('llegue bien');
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Category,
          attributes: ['name'],
          where: {
            name: array,
          },
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      limit: 30,
      order: [['price', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    !province &&
    !group &&
    category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Category,
          attributes: ['name'],
          where: {
            name: array,
          },
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      limit: 30,
      order: [['price', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    !province &&
    group &&
    category &&
    !startRange &&
    !endRange
  ) {
    console.log('llegue');
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Category,
          attributes: ['name'],
          where: {
            id: array,
          },
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['price', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    !province &&
    group &&
    category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Category,
          attributes: ['name'],
          where: {
            id: array,
          },
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['price', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    !province &&
    !group &&
    !category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      where: {
        price: {
          [Op.between]: [startRange, endRange],
        },
      },
      include: [
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      limit: 30,
      order: [['price', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    !province &&
    !group &&
    !category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      where: {
        price: {
          [Op.between]: [startRange, endRange],
        },
      },
      include: [
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      limit: 30,
      order: [['price', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    !province &&
    group &&
    !category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      where: {
        price: {
          [Op.between]: [startRange, endRange],
        },
      },
      include: [
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['price', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    !province &&
    group &&
    !category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      where: {
        price: {
          [Op.between]: [startRange, endRange],
        },
      },
      include: [
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['price', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    !province &&
    !group &&
    category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      where: {
        price: {
          [Op.between]: [startRange, endRange],
        },
      },
      include: [
        {
          model: Category,
          attributes: ['name'],
          where: {
            name: array,
          },
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      limit: 30,
      order: [['price', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    !province &&
    !group &&
    category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      where: {
        price: {
          [Op.between]: [startRange, endRange],
        },
      },
      include: [
        {
          model: Category,
          attributes: ['name'],
          where: {
            name: array,
          },
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      limit: 30,
      order: [['price', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    province &&
    !group &&
    !category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Province,
          where: {
            id: province,
          },
        },
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      order: [['price', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    province &&
    !group &&
    !category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Province,
          where: {
            id: province,
          },
        },
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      limit: 30,
      order: [['price', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    province &&
    group &&
    !category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Province,
          where: {
            id: province,
          },
        },
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['price', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    province &&
    group &&
    !category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Province,
          where: {
            id: province,
          },
        },
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['price', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    province &&
    group &&
    category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Province,
          where: {
            id: province,
          },
        },
        {
          model: Category,
          attributes: ['name'],
          where: {
            id: array,
          },
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['price', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    province &&
    group &&
    category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Province,
          where: {
            id: province,
          },
        },
        {
          model: Category,
          attributes: ['name'],
          where: {
            id: array,
          },
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['price', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    province &&
    group &&
    category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      where: {
        price: {
          [Op.between]: [startRange, endRange],
        },
      },
      include: [
        {
          model: Province,
          where: {
            id: province,
          },
        },
        {
          model: Category,
          attributes: ['name'],
          where: {
            id: array,
          },
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['price', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    province &&
    group &&
    category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      where: {
        price: {
          [Op.between]: [startRange, endRange],
        },
      },
      include: [
        {
          model: Province,
          where: {
            id: province,
          },
        },
        {
          model: Category,
          attributes: ['name'],
          where: {
            id: array,
          },
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['price', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    province &&
    group &&
    !category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      where: {
        price: {
          [Op.between]: [startRange, endRange],
        },
      },
      include: [
        {
          model: Province,
          where: {
            id: province,
          },
        },
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['price', 'ASC']],
    });
  }

  if (
    order === 'DESC' &&
    province &&
    group &&
    !category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      where: {
        price: {
          [Op.between]: [startRange, endRange],
        },
      },
      include: [
        {
          model: Province,
        },
        {
          model: Category,
          attributes: ['name'],
          where: {
            id: array,
          },
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['price', 'DESC']],
    });
  }

  return res.status(200).send(priceFilter);
}
//-------------------------------------------------------------------------------------------date create
async function orderByCreatedDate(objQuery, res, next) {
  const { order, province, group, category, startRange, endRange } = objQuery;
  console.log(9999, objQuery);
  let priceFilter;
  var array = category.split(",")
  if (
    order === 'ASC' &&
    !province &&
    !group &&
    !category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      order: [['createdAt', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    !province &&
    !group &&
    !category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      limit: 30,
      order: [['price', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    !province &&
    !group &&
    category &&
    !startRange &&
    !endRange
  ) {
    console.log('llegue');
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Category,
          attributes: ['name'],
          where: {
            name: array,
          },
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      limit: 30,
      order: [['createdAt', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    !province &&
    !group &&
    category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Category,
          attributes: ['name'],
          where: {
            name: array,
          },
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      limit: 30,
      order: [['createdAt', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    !province &&
    group &&
    category &&
    !startRange &&
    !endRange
  ) {
    console.log('llegue');
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Category,
          attributes: ['name'],
          where: {
            id: array,
          },
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['createdAt', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    !province &&
    group &&
    category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Category,
          attributes: ['name'],

          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['createdAt', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    !province &&
    !group &&
    category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      where: {
        price: {
          [Op.between]: [startRange, endRange],
        },
      },
      include: [
        {
          model: Category,
          attributes: ['name'],
          where: {
            name: array,
          },
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      limit: 30,
      order: [['createdAt', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    !province &&
    !group &&
    category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      where: {
        price: {
          [Op.between]: [startRange, endRange],
        },
      },
      include: [
        {
          model: Category,
          attributes: ['name'],
          where: {
            name: array,
          },
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      limit: 30,
      order: [['createdAt', 'DESC']],
    });
  }
  if (
    order === 'ASC' &&
    !province &&
    !group &&
    !category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      where: {
        price: {
          [Op.between]: [startRange, endRange],
        },
      },
      include: [
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      limit: 30,
      order: [['createdAt', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    !province &&
    !group &&
    !category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      where: {
        price: {
          [Op.between]: [startRange, endRange],
        },
      },
      include: [
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      limit: 30,
      order: [['createdAt', 'DESC']],
    });
  }
  res.status(200).send(priceFilter);
}
//--------------------------------------------------------------------------------------------------title
async function orderTitle(objQuery, res, next) {
  const { name } = objQuery;
  dbServices = await Service.findAll({
    //Traigo todo de la db
    attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],

    // include: { all: true },
    include: [
      {
        model: Category,
        attributes: ['name'],
        include: {
          model: Group,
          attributes: ['name'],
        },
      },
    ],
  });

  dbServices = await addRating(dbServices);
  if (dbServices.length > 0) {
    if (name) {
      //si me pasan un title busco en la db los que coincidan
      const filteredServices = [];
      dbServices.map((service) => {
        if (service.title.toLowerCase().includes(name.toLowerCase()))
          filteredServices.push(service);
      });
      return res.send(filteredServices); //Si coincide mando el servicio con ese title
    } else return dbServices; //Si no, devuelvo todos los servicios
  }
}
//-------------------------------------------------------------------------------------------orderByScore
async function orderByQualifications(objQuery, res, next) {
  const { order, province, group, category, startRange, endRange } = objQuery;
  let priceFilter;
  if (
    order === 'ASC' &&
    !province &&
    !group &&
    !category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = Qualification.findAll({
      attributes: ['score'],
      include: [
        {
          model: Province,
          where: {
            id: province,
          },
        },
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      order: [['createdAt', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    province &&
    !group &&
    !category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Province,
          where: {
            id: province,
          },
        },
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      limit: 30,
      order: [['createdAt', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    province &&
    group &&
    !category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Province,
          where: {
            id: province,
          },
        },
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['createdAt', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    province &&
    group &&
    !category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Province,
          where: {
            id: province,
          },
        },
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['createdAt', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    province &&
    group &&
    category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Province,
          where: {
            id: province,
          },
        },
        {
          model: Category,
          attributes: ['name'],
          where: {
            id: category,
          },
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['createdAt', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    province &&
    group &&
    category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Province,
          where: {
            id: province,
          },
        },
        {
          model: Category,
          attributes: ['name'],
          where: {
            id: category,
          },
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['createdAt', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    province &&
    group &&
    category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      where: {
        price: {
          [Op.between]: [startRange, endRange],
        },
      },
      include: [
        {
          model: Province,
          where: {
            id: province,
          },
        },
        {
          model: Category,
          attributes: ['name'],
          where: {
            id: category,
          },
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['createdAt', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    province &&
    group &&
    category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      where: {
        price: {
          [Op.between]: [startRange, endRange],
        },
      },
      include: [
        {
          model: Province,
          where: {
            id: province,
          },
        },
        {
          model: Category,
          attributes: ['name'],
          where: {
            id: category,
          },
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['createdAt', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    province &&
    group &&
    !category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      where: {
        price: {
          [Op.between]: [startRange, endRange],
        },
      },
      include: [
        {
          model: Province,
          where: {
            id: province,
          },
        },
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['createdAt', 'ASC']],
    });
  }

  if (
    order === 'DESC' &&
    province &&
    group &&
    !category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      where: {
        price: {
          [Op.between]: [startRange, endRange],
        },
      },
      include: [
        {
          model: Province,
        },
        {
          model: Category,
          attributes: ['name'],
          where: {
            id: category,
          },
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['createdAt', 'DESC']],
    });
  }

  return res.status(200).send(priceFilter);
}
//-------------------------------------------------------------------------------------------------date update
async function orderByUpdateDate(objQuery, res, next) {
  const { order } = objQuery;
  let dateFilter;

  if (order === 'ASC') {
    dateFilter = await Service.findAll({
      include: [
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      order: [['updatedAt', 'ASC']],
    });
  } else {
    dateFilter = await Service.findAll({
      include: [
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
          },
        },
      ],
      limit: 30,
      order: [['updatedAt', 'DESC']],
    });
  }
  res.status(200).send(dateFilter);
}

//--------------------------------------------------------------------------------------------------title

//-------------------------------------------------------------------------------------------orderByScore
async function orderByQualifications(objQuery, res, next) {
  const { order, province, group, category, startRange, endRange } = objQuery;
  let priceFilter;
  if (
    order === 'ASC' &&
    !province &&
    !group &&
    !category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = Qualification.findAll({
      attributes: ['score'],
      include: [
        {
          model: Service,
          attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
          include: [
            {
              model: Category,
              attributes: ['name'],
              include: {
                model: Group,
                attributes: ['name'],
              },
            },
          ],
        },
      ],
      limit: 30,
      order: [['score', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    !province &&
    !group &&
    !category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = Qualification.findAll({
      attributes: ['score'],
      include: [
        {
          model: Service,
          attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
          include: [
            {
              model: Category,
              attributes: ['name'],
              include: {
                model: Group,
                attributes: ['name'],
              },
            },
          ],
        },
      ],
      limit: 30,
      order: [['score', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    !province &&
    group &&
    !category &&
    !startRange &&
    !endRange
  ) {
    console.log('llegue');
    priceFilter = Qualification.findAll({
      attributes: ['score'],
      include: [
        {
          model: Service,
          attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
          include: [
            {
              model: Category,
              attributes: ['name'],
              include: {
                model: Group,
                attributes: ['name'],
                where: {
                  id: group,
                },
              },
            },
          ],
        },
      ],
      limit: 30,
      order: [['score', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    !province &&
    group &&
    !category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Service.findAll({
      attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
      include: [
        {
          model: Category,
          attributes: ['name'],
          include: {
            model: Group,
            attributes: ['name'],
            where: {
              id: group,
            },
          },
        },
      ],
      limit: 30,
      order: [['score', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    !province &&
    group &&
    category &&
    !startRange &&
    !endRange
  ) {
    console.log('llegue');
    priceFilter = await Qualification.findAll({
      attributes: ['score'],
      include: [
        {
          model: Service,
          attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
          include: [
            {
              model: Category,
              attributes: ['name'],
              where: {
                id: category,
              },
              include: {
                model: Group,
                attributes: ['name'],
                where: {
                  id: group,
                },
              },
            },
          ],
        },
      ],
      limit: 30,
      order: [['score', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    !province &&
    group &&
    category &&
    !startRange &&
    !endRange
  ) {
    priceFilter = await Qualification.findAll({
      attributes: ['score'],
      include: [
        {
          model: Service,
          attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
          include: [
            {
              model: Category,
              attributes: ['name'],
              where: {
                id: category,
              },
              include: {
                model: Group,
                attributes: ['name'],
                where: {
                  id: group,
                },
              },
            },
          ],
        },
      ],
      limit: 30,
      order: [['score', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    !province &&
    !group &&
    !category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Qualification.findAll({
      attributes: ['score'],
      include: [
        {
          model: Service,
          attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
          where: {
            price: {
              [Op.between]: [startRange, endRange],
            },
          },
          include: [
            {
              model: Category,
              attributes: ['name'],
              include: {
                model: Group,
                attributes: ['name'],
              },
            },
          ],
        },
      ],
      limit: 30,
      order: [['score', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    !province &&
    !group &&
    !category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Qualification.findAll({
      attributes: ['score'],
      include: [
        {
          model: Service,
          attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
          where: {
            price: {
              [Op.between]: [startRange, endRange],
            },
          },
          include: [
            {
              model: Category,
              attributes: ['name'],
              include: {
                model: Group,
                attributes: ['name'],
              },
            },
          ],
        },
      ],
      limit: 30,
      order: [['score', 'DESC']],
    });
  }

  if (
    order === 'ASC' &&
    !province &&
    group &&
    !category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Qualification.findAll({
      attributes: ['score'],
      include: [
        {
          model: Service,
          attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
          where: {
            price: {
              [Op.between]: [startRange, endRange],
            },
          },
          include: [
            {
              model: Category,
              attributes: ['name'],
              include: {
                model: Group,
                attributes: ['name'],
                where: {
                  id: group,
                },
              },
            },
          ],
        },
      ],
      limit: 30,
      order: [['score', 'ASC']],
    });
  }
  if (
    order === 'DESC' &&
    !province &&
    group &&
    !category &&
    startRange &&
    endRange
  ) {
    priceFilter = await Qualification.findAll({
      attributes: ['score'],
      include: [
        {
          model: Service,
          attributes: ['id', 'title', 'img', 'description', 'price', 'userId'],
          where: {
            price: {
              [Op.between]: [startRange, endRange],
            },
          },
          include: [
            {
              model: Category,
              attributes: ['name'],
              include: {
                model: Group,
                attributes: ['name'],
                where: {
                  id: group,
                },
              },
            },
          ],
        },
      ],
      limit: 30,
      order: [['score', 'DESC']],
    });
  }

  res.status(200).send(priceFilter);
}
//-------------------------------------------------------------------------------------------------------order by province
function orderByProvince(objQuery, res, next) {}
//-------------------------------------------------------------------------------------------------------order by city
function orderByCity(objQuery, res, next) {}
//-------------------------------------------------------------------------------------------------------
//function orderProvince(objQuery, res, next) {}
//-------------------------------------------------------------------------------------------------------
//function orderProvince(objQuery, res, next) {}
//-------------------------------------------------------------------------------------------------------

module.exports = {
  orderByQualifications,
  orderByCreatedDate,
  orderByUpdateDate,
  orderByPrice,
  orderTitle,
  orderByProvince,
  orderByCity,
};
