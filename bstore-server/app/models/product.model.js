module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define(
    "product",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      url_image: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.FLOAT,
      },
      discount: {
        type: Sequelize.INTEGER,
      },
      category: {
        type: Sequelize.INTEGER,
      },
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );

  return Product;
};
