const { Service } = require("../db.js");

const filterOrder = function (objOuery) {
  return Object.values(objOuery).length ? metodFilterOrder(objOuery) : ["lala"]; //comprobacion de query
};

function metodFilterOrder(objQuery) {}

module.exports = filterOrder;
