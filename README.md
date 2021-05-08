
# 🛒Bstore

![alt text](https://i.ibb.co/wr1PDrF/Preview.jpg)

Bienvenido a tu nueva tienda on-line favorita. Bstore llego para cumplir con todas tus expectativas como consumidor; brindandote gran variedad de productos, a buenos precios. Contamos con snacks 🍔, licores🍾, bebidas 🧃 y muchas otras cosas más disponibles para tí.

💻[Link del Portal](https://bstore-web.web.app/)

## Autor ✒️


* **Renato Ponce** - [renato-ponce98](https://github.com/renato-ponce98)
  
#### 1. BSTORE-SERVER
* Desarrollado con NodeJs y Express.
* Desplegado en Heroku
* APIs del componente:

      1.1 Listado de Categorias
          
          - Endpoint: https://bstore-server.herokuapp.com/api/categories
          - Tipo de Petición: GET
          - Función: Obtener listado de las categorías alamcenadas en base de datos

      1.2 Paginado de Productos
        
          - Endpoint: https://bstore-server.herokuapp.com/api/productos/pagingfiltering?page=0&limit=5&category=&name
          - Tipo de Petición: GET
          - Ejemplo Petición:
              PARAMS
                page=0
                limit=5
                category=""
                name=""
              
          - Función: Obtener paginado de productos de forma general o filtrado por:
              a. category (Categoria) 
              b. name  (Nombre del Producto)
       
[🚀Postman](https://www.getpostman.com/collections/efda4728af38dfa88277)

[📚Documentión APIS](https://documenter.getpostman.com/view/12537703/TzRRDocq)
                        
                        
#### 2. BSTORE-WEB
* Desarrollado con HTML5, CSS3 y VANILLA JS.
* Uso de JQuery para el consumo de servicios.
* Portal completamente responsivo.
* Desplegado en Firebase.
* Características del portal:
      
    1. Filtro de búsqueda por Categoría y Nombre de producto
    2. Paginación de productos de 12 elementos

---
⌨️ con ❤️ por [Renato Ponce](https://github.com/renato-ponce98) 😊