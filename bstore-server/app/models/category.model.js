module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define(
    "category",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );

  return Category;
};
