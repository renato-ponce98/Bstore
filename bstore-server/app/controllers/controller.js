const db = require("../config/db.config.js");
const Product = db.Product;
const Category = db.Category;
const { Op } = require("sequelize");

exports.findAllCategories = (req, res) => {
  Category.findAll({
    attributes: ["id", "name"],
  })
    .then((results) => {
      res.status(200).json({
        message: "Successfull request",
        totalItems: results.length,
        categories: results,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "There was an error",
        error: error,
      });
    });
};

exports.pagingfilteringproducts = (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let name = req.query.name;
    let category = req.query.category;

    const offset = page ? page * limit : 0;

    console.log("offset = " + offset);

    if (isNaN(page) || isNaN(limit)) {
      res.status(400).send({
        message: "Porfavor, ingrese datos requeridos",
      });
      return;
    }

    Product.findAndCountAll({
      attributes: ["id", "name", "url_image", "price", "discount", "category"],
      where: {
        name: { [Op.substring]: name || "" },
        category: { [Op.substring]: category || "" },
      },
      limit: limit || 0,
      offset: offset,
    }).then((data) => {
      const totalPages = Math.ceil(data.count / limit);
      const response = {
        message: "",
        data: {
          totalItems: data.count,
          totalPages: totalPages,
          limit: limit,
          currentPageNumber: page + 1,
          currentPageSize: data.rows.length,
          products: data.rows,
        },
      };
      data.count === 0
        ? (response.message = "No se encontraron datos")
        : (response.message = "Busqueda exitosa");

      res.send(response);
    });
  } catch (error) {
    res.status(500).send({
      message: "Error -> Can NOT complete a paging request!",
      error: error.message,
    });
  }
};
