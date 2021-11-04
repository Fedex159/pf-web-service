const { DataTypes, UUID } = require("sequelize");
const {STRING}=DataTypes;
module.exports = (sequelize) => {
  sequelize.define(
    "message",
    {
      id:{type:UUID},

      text: {
        type: DataTypes.STRING,
        alowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
