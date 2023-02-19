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
module.exports = new Sequelize("postgres://bzmxxzeebpsrmo:3df6032fbf5629f2fc383d2c8a44b6f776a84c2ced994c1302503db0ce666721@ec2-3-248-121-12.eu-west-1.compute.amazonaws.com:5432/d9mscsh1v2fom2")