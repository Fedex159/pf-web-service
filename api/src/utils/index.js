const { Qualification, conn } = require("../db.js");

const addRating = async (dbServices, id) => {
  let rating = [];
  if (id) {
  } else {
    rating = await Qualification.findAll({
      attributes: [
        "serviceId",
        [conn.fn("AVG", conn.col("score")), "prom_score"],
      ],
      group: ["serviceId"],
    });

    return dbServices.map((s) => {
      let q = rating.find((r) => {
        return r.dataValues.serviceId == s.dataValues.id;
      });

      q = q ? Number(q.dataValues.prom_score) : null;

      s.dataValues.rating = q;
      return s;
    });
  }
};

module.exports = {
  addRating,
};
