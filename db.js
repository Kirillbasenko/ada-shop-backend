const {Sequelize} = require("sequelize")

/*module.exports = new Sequelize(
   process.env.DB_NAME,
   process.env.DB_USER,
   process.env.DB_PASSWORD,
   {
      dialect: "postgres",
      host: process.env.DB_HOST,
      port: process.env.DB_PORT
   }
)*/

//module.exports = new Sequelize("postgres://postgres:elizaveta@localhost:5432/online-store")
module.exports = new Sequelize("postgres://tkmjtqtm:egdFSuE-xdapQfZSW2F-7NxfloAE7NuR@mouse.db.elephantsql.com/tkmjtqtm")