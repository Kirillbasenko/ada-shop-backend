const Router = require("express")
const router = new Router()
const cors = require("cors")
const brandController = require("../controllers/brandController")

router.post("/", cors(), brandController.create)
router.get("/", cors(), brandController.getAll)

module.exports = router