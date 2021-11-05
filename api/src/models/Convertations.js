const { DataTypes, UUID, UUIDV1 } = require("sequelize");
const { STRING, ARRAY } = DataTypes;
module.exports = (sequelize) => {
  sequelize.define(
    "convertations",
    {
      userId: { type: STRING, alowNull: false },

      sender: {
        type: STRING,
        alowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};
