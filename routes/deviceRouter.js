const Router = require("express")
const router = new Router()
const cors = require("cors")
const deviceController = require("../controllers/deviceController")

router.post("/", cors(), deviceController.create)
router.get("/", cors(), deviceController.getAll)
router.get("/:id", cors(), deviceController.getOne)

module.exports = router