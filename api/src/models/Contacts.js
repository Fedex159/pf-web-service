const { DataTypes, UUID, UUIDV1 } = require("sequelize");
const { STRING, ARRAY } = DataTypes;
module.exports = (sequelize) => {
  sequelize.define(
    "contactsOnline",
    {
      userId: { type: STRING, alowNull: false, primaryKey: true },

      socketId: {
        type: STRING,
        alowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};
