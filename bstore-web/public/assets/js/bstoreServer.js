// Cabecera de url Bstore - Server
const URL = "https://bstore-server.herokuapp.com/";

// Imagen por default en caso no exista una
const DEFAULT_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

// Metodo para capitalizar palabras
const capitalize = ([first, ...rest], locale = navigator.language) =>
  first.toLocaleUpperCase(locale) + rest.join("");

// Variables de paginado
let _page = 0;
let _total = 0;
const _limit = 12;

// Iniciar | Parar Loader
const loader = (flag) => {
  if (flag) {
    $("#loader").addClass("loader");
  } else {
    $("#loader").removeClass("loader");
  }
};

// Metodo para obtener categorias
const findAllCategories = () => {
  fetch(`${URL}api/categories`)
    .then((res) => {
      if (res.ok) {
        // Si respuesta es correcta
        console.log("Petición exitosa.");
        res.json().then((data) => {
          // Seteo mis datos de respuesta a mi variable
          let categorias = data.categories;

          // Lleno mi Select de categorias con cada una
          categorias.forEach((element) => {
            $("#categoria").append(
              `<option value = "${element.id}"> ${capitalize(
                element.name
              )} </option>`
            );
          });
        });
      } else {
        console.log("No fue exitosa la petición.");
      }
    })
    .catch((err) => console.log(err));
};

// Metodo para obtener paginado
const pagingProducts = async (page, limit, category, name) => {
  loader(true);
  await fetch(
    `${URL}api/productos/pagingfiltering?page=${page}&limit=${limit}&category=${category}&name=${name}`
  )
    .then((res) => {
      if (res.ok) {
        // Si la petición fue exitosa
        console.log("Petición exitosa.");

        // Limpio mi Sección
        $("#products-list").html("");

        res.json().then((data) => {
          // Seteo datos de respuesta a mis variables
          let productos = data.data.products;

          // Lamo a metodo paginado encargado de setear mis datos
          paginado(
            data.data.currentPageNumber,
            data.data.totalPages,
            data.data.totalItems
          );

          // Creo una tarjeta por cada producto obtenido
          productos.forEach((element) => {
            let discount = "";

            //Validador descuento
            if (element.discount) {
              discount = `<h4 class='discount'>-${element.discount}%</h4>`;
            }
            $("#products-list").append(
              `    
          <div class="product">
          <div class="product-header">
            <img src="${element.url_image || DEFAULT_IMG}" alt="">
            <ul class="icons">
              <span><i class="bx bx-heart"></i></span>
              <a href="#"> <span><i class="bx bx-shopping-bag"></i></span>
              </a>
              <span><i class="bx bx-search"></i></span>
            </ul>
          </div>
          <div class="product-footer">
            <a href="#">
              <h3>${element.name}</h3>
            </a>
            <div class="rating">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bx-star"></i>
            </div>
            ${discount}
            <h4 class="price">$${element.price}</h4>
          </div>
        </div>
              `
            );
          });
        });
      } else {
        console.log("No fue exitosa la petición.");
      }
    })
    .catch((err) => console.log(err));
  loader(false);
};

// Metodo seteo datos de paginado
const paginado = (page, totalPages, totalItems) => {
  _page = page - 1;
  _total = totalPages;
  $("#pagina").text(_page + 1);
  $("#total").text(_total);
  $("#totalItems").text(
    totalItems != 0
      ? `El resultado de su busqueda es de ${totalItems} articulos`
      : `Lo sentimos, no hemos podido encontrar ningun producto referente a su busqueda. 😥`
  );

  //Cambiar estilo de botones siguiente | anterior
  if (page >= totalPages) {
    $("#siguiente").removeClass("span");
    $("#siguiente").addClass("disabled");
  } else {
    $("#siguiente").removeClass("disabled");
    $("#siguiente").addClass("span");
  }

  if (page <= 1) {
    $("#anterior").removeClass("span");
    $("#anterior").addClass("disabled");
  } else {
    $("#anterior").removeClass("disabled");
    $("#anterior").addClass("span");
  }
};

// Busqueda por categoria
$("#categoria").change(function () {
  pagingProducts(0, _limit, $("#categoria").val(), $("#nombre").val() || "");
});

// Busqueda por Nombre
$("#nombre").on("keypress", function (e) {
  if (e.which != 13) {
    return;
  }
  pagingProducts(0, _limit, $("#categoria").val(), $("#nombre").val() || "");
});

// Boton atras paginado
$("#anterior").click(function () {
  if (_page <= 0) {
    return;
  }
  pagingProducts(
    _page - 1,
    _limit,
    $("#categoria").val(),
    $("#nombre").val() || ""
  );
});

// Boton adelante paginado
$("#siguiente").click(function () {
  if (_page + 1 >= _total) {
    return;
  }
  pagingProducts(
    _page + 1,
    _limit,
    $("#categoria").val(),
    $("#nombre").val() || ""
  );
});

// Ejecución de metodos al inicio
findAllCategories();
pagingProducts(_page, _limit, "", "");
