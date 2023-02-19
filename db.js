const {Sequelize} = require("sequelize")

module.exports = new Sequelize(
   process.env.DB_NAME1,
   process.env.DB_USER1,
   process.env.DB_PASSWORD1,
   {
      dialect: "postgres",
      host: process.env.DB_HOST1,
      port: process.env.DB_PORT1
   }
)

//module.exports = new Sequelize("postgres://postgres:elizaveta@localhost:5432/online-store")
//module.exports = new Sequelize("postgresql://um1qblxwqvtge1xe5zsn:CgpdlVqhmIu7TxQd7GfuEF7fNnEYnL@blyapaiwadysajsgsqes-postgresql.services.clever-cloud.com:5432/blyapaiwadysajsgsqes")