async function orderByPrice(order, dbServices) {
  order && order === "ASC"
    ? (dbServices = dbServices.sort(function (a, b) {
        if (a.price > b.price) {
          return -1;
        }
        if (b.price > a.price) {
          return 1;
        }
        return 0;
      }))
    : (dbServices = dbServices.sort(function (a, b) {
        if (b.price > a.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      }));
  return dbServices;
}

async function orderByScore(order, dbServices) {
  console.log("ORDER?", order);
  console.log("SERVICIOS?", dbServices);
  order && order === "ASC"
    ? (dbServices = dbServices.sort(function (a, b) {
        if (a.score > b.score) {
          return -1;
        }
        if (b.score > a.score) {
          return 1;
        }
        return 0;
      }))
    : (dbServices = dbServices.sort(function (a, b) {
        if (b.score > a.score) {
          return -1;
        }
        if (a.score > b.score) {
          return 1;
        }
        return 0;
      }));
  return dbServices;
}

module.exports = {
  orderByPrice,
  orderByScore,
};
