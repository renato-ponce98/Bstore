
# 馃洅Bstore

![alt text](https://i.ibb.co/wr1PDrF/Preview.jpg)

Bienvenido a tu nueva tienda on-line favorita. Bstore llego para cumplir con todas tus expectativas como consumidor; brindandote gran variedad de productos, a buenos precios. Contamos con snacks 馃崝, licores馃嵕, bebidas 馃 y muchas otras cosas m谩s disponibles para t铆.

馃捇[Link del Portal](https://bstore-web.web.app/)

## Autor 鉁掞笍


* **Renato Ponce** - [renato-ponce98](https://github.com/renato-ponce98)
  
#### 1. BSTORE-SERVER
* Desarrollado con NodeJs y Express.
* Desplegado en Heroku
* APIs del componente:

      1.1 Listado de Categorias
          
          - Endpoint: https://bstore-server.herokuapp.com/api/categories
          - Tipo de Petici贸n: GET
          - Funci贸n: Obtener listado de las categor铆as alamcenadas en base de datos

      1.2 Paginado de Productos
        
          - Endpoint: https://bstore-server.herokuapp.com/api/productos/pagingfiltering?page=0&limit=5&category=&name
          - Tipo de Petici贸n: GET
          - Ejemplo Petici贸n:
              PARAMS
                page=0
                limit=5
                category=""
                name=""
              
          - Funci贸n: Obtener paginado de productos de forma general o filtrado por:
              a. category (Categoria) 
              b. name  (Nombre del Producto)
       
[馃殌Postman](https://www.getpostman.com/collections/efda4728af38dfa88277)

[馃摎Documenti贸n APIS](https://documenter.getpostman.com/view/12537703/TzRRDocq)
                        
                        
#### 2. BSTORE-WEB
* Desarrollado con HTML5, CSS3 y VANILLA JS.
* Uso de JQuery para el consumo de servicios.
* Portal completamente responsivo.
* Desplegado en Firebase.
* Caracter铆sticas del portal:
      
    1. Filtro de b煤squeda por Categor铆a y Nombre de producto
    2. Paginaci贸n de productos de 12 elementos

---
鈱笍 con 鉂わ笍 por [Renato Ponce](https://github.com/renato-ponce98) 馃槉