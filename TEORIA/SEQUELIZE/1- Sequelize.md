<img  src='../logo.png' height='70px'>

# Lección 1: Sequelize Inicio

* INSTALAR DEPENDENCIAS
* CONFIGURAR BASE DE DATOS
* DEFINIR MODELOS
* CREAR Y CONSULTAR
* Modelado de datos
* Asociaciones
* Consulta de modelos: buscadores
* Asociaciones

https://sequelize.org/ 

## INSTALAR DEPENDENCIAS

npm install sequelize sqlite3

## CONFIGURAR BASE DE DATOS

```javascript
import Sequelize from "sequelize"

// instancio una nueva BD
                           // nombre BD,usuario,contraseña
const db = new Sequelize("postdatabase","root","",{
    host : "localhost",
    dialect : "mysql",
    port:3308
})

export default db 
```

## DEFINIR MODELOS

```javascript
// importamos la conexion a la bd
import db from "../database/db.js";

// importamos sequelize

import { DataTypes } from "sequelize";

const User = db.define("users",{
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
})

export default UserModel
```

## CREAR Y CONSULTAR

```javascript
const jane = await User.create({
  username: 'janedoe',
  birthday: new Date(1980, 6, 20),
});

const users = await User.findAll();
```

## Modelado de datos

Defina sus modelos con facilidad y haga uso opcional de la sincronización automática de bases de datos.

```javascript
const ListaDeseo = sequelize.define("Wishlist", {
  title: DataTypes.STRING,
});
const Deseo = sequelize.define("Wish", {
  title: DataTypes.STRING,
  quantity: DataTypes.NUMBER,
});

// Automatically create all tables
await sequelize.sync();
```
## Asociaciones

Defina asociaciones entre modelos y deje que Sequelize se encargue del trabajo pesado.

Wish.belongsTo(Wishlist);
ListaDeseo.hasMany(Wish);

const listadeseo = await ListaDeseo.findOne();
const deseos = await ListaDeseo.getWishes();
const deseo = await ListaDeseo.createWish({ 
  title: 'Toys', quantity: 3,
});

await wishlist.removeWish(wish);

## Consulta de modelos: buscadores

Consulta de modelos: buscadores
Los métodos de búsqueda son los que generan SELECTconsultas.

De forma predeterminada, los resultados de todos los métodos de búsqueda son instancias de la clase modelo (en lugar de ser simplemente objetos de JavaScript). Esto significa que después de que la base de datos devuelva los resultados, Sequelize envuelve automáticamente todo en los objetos de instancia adecuados. En algunos casos, cuando hay demasiados resultados, este envoltorio puede ser ineficaz. Para deshabilitar este ajuste y recibir una respuesta simple, pase { raw: true }como una opción al método de búsqueda.

## findAll

El findAllmétodo ya se conoce del tutorial anterior. Genera una SELECTconsulta estándar que recuperará todas las entradas de la tabla (a menos que esté restringido por algo como una wherecláusula, por ejemplo).

## findByPk

El findByPkmétodo obtiene solo una entrada de la tabla, utilizando la clave principal proporcionada.

```javascript
const project = await Project.findByPk(123);
if (project === null) {
  console.log('Not found!');
} else {
  console.log(project instanceof Project); // true
  // Its primary key is 123
}
```

## findOne

El findOnemétodo obtiene la primera entrada que encuentra (que cumple con las opciones de consulta opcionales, si se proporcionan).

```javascript
const project = await Project.findOne({ where: { title: 'My Title' } });
if (project === null) {
  console.log('Not found!');
} else {
  console.log(project instanceof Project); // true
  console.log(project.title); // 'My Title'
}
```

## findOrCreate

El método findOrCreatecreará una entrada en la tabla a menos que pueda encontrar una que cumpla con las opciones de consulta. En ambos casos, devolverá una instancia (ya sea la instancia encontrada o la instancia creada) y un valor booleano que indica si esa instancia se creó o ya existía.

La whereopción se considera para encontrar la entrada, y la defaultsopción se usa para definir qué se debe crear en caso de que no se encuentre nada. Si defaultsno contienen valores para cada columna, Sequelize tomará los valores proporcionados where(si están presentes).

Supongamos que tenemos una base de datos vacía con un Usermodelo que tiene a usernamey a job.

```javascript
const [user, created] = await User.findOrCreate({
  where: { username: 'sdepold' },
  defaults: {
    job: 'Technical Lead JavaScript'
  }
});
console.log(user.username); // 'sdepold'
console.log(user.job); // This may or may not be 'Technical Lead JavaScript'
console.log(created); // The boolean indicating whether this instance was just created
if (created) {
  console.log(user.job); // This will certainly be 'Technical Lead JavaScript'
}
```

## findAndCountAll

El findAndCountAllmétodo es un método de conveniencia que combina findAlly count. Esto es útil cuando se trata de consultas relacionadas con la paginación en las que desea recuperar datos con un limity offset, pero también necesita saber el número total de registros que coinciden con la consulta.

Cuando groupno se proporciona, el findAndCountAllmétodo devuelve un objeto con dos propiedades:

count- un número entero - el número total de registros que coinciden con la consulta
rows- una matriz de objetos - los registros obtenidos
Cuando groupse proporciona, el findAndCountAllmétodo devuelve un objeto con dos propiedades:


count- una matriz de objetos - contiene el recuento en cada grupo y los atributos proyectados
rows- una matriz de objetos - los registros obtenidos

```javascript
const { count, rows } = await Project.findAndCountAll({
  where: {
    title: {
      [Op.like]: 'foo%'
    }
  },
  offset: 10,
  limit: 2
});
console.log(count);
console.log(rows);
```

## Asociaciones

https://sequelize.org/docs/v6/core-concepts/assocs/

Sequelize admite las asociaciones estándar: One-To-One , One-To-Many y Many-To-Many .

Para ello, Sequelize proporciona cuatro tipos de asociaciones que deben combinarse para crearlas:

la HasOneasociación
la BelongsToasociación
la HasManyasociación
la BelongsToManyasociación
La guía comenzará explicando cómo definir estos cuatro tipos de asociaciones, y luego continuará explicando cómo combinarlos para definir los tres tipos de asociaciones estándar ( uno a uno , uno a muchos y muchos a muchos). ).

Definición de las 
Los cuatro tipos de asociación se definen de manera muy similar. Digamos que tenemos dos modelos, Ay B. Decirle a Sequelize que desea una asociación entre los dos solo necesita una llamada de función:

const A = sequelize.define('A', /* ... */);
const B = sequelize.define('B', /* ... */);

A.hasOne(B); // A HasOne B
A.belongsTo(B); // A BelongsTo B
A.hasMany(B); // A HasMany B
A.belongsToMany(B, { through: 'C' }); // A BelongsToMany B through the junction table C

Todos aceptan un objeto de opciones como segundo parámetro (opcional para los tres primeros, obligatorio por belongsToManycontener al menos la throughpropiedad):

A.hasOne(B, { /* options */ });
A.belongsTo(B, { /* options */ });
A.hasMany(B, { /* options */ });
A.belongsToMany(B, { through: 'C', /* options */ });

El orden en que se define la asociación es relevante. En otras palabras, el orden importa, para los cuatro casos. En todos los ejemplos anteriores, se Adenomina modelo de origen y modelo de destino . Esta terminología es importante.B

La A.hasOne(B)asociación significa que existe una relación uno a uno entre Ay B, con la clave externa definida en el modelo de destino ( B).

La A.belongsTo(B)asociación significa que existe una relación uno a uno entre Ay B, con la clave externa definida en el modelo fuente ( A).

La A.hasMany(B)asociación significa que existe una relación de uno a muchos entre Ay B, con la clave externa definida en el modelo de destino ( B).

Estas tres llamadas harán que Sequelize agregue automáticamente claves foráneas a los modelos apropiados (a menos que ya estén presentes).

La A.belongsToMany(B, { through: 'C' })asociación significa que existe una relación Many-To-Many entre Ay B, utilizando table Ccomo tabla de unión , que tendrá las claves foráneas ( aIdy bId, por ejemplo). Sequelize creará automáticamente este modelo C(a menos que ya exista) y definirá las claves externas apropiadas en él.

Nota: En los ejemplos anteriores para , se pasó belongsToManyuna cadena ( ) a la opción de paso. 'C'En este caso, Sequelize genera automáticamente un modelo con este nombre. Sin embargo, también puede pasar un modelo directamente, si ya lo ha definido.

Estas son las ideas principales involucradas en cada tipo de asociación. Sin embargo, estas relaciones a menudo se usan en pares, para permitir un mejor uso con Sequelize. Esto se verá más adelante.

