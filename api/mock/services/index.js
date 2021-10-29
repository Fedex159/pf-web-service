const { Service } = require("../../src/db");
const { lessons } = require("./lessons");
const { repair } = require("./repairs");
const { transport } = require("./transport");

const bulk = [...lessons, ...repair, ...transport];

function loadServices() {
  return Service.bulkCreate(bulk);
}

module.exports = {
  loadServices,
};
