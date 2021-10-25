const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'users',
    {
      id: {
        // type: DataTypes.UUID,
        // defaultValue: DataTypes.UUIDV4,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      // userImg: {
      //   type: DataTypes.STRING,
      // },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      location: {
        // type: DataTypes.ARRAY(DataTypes.STRING),
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
