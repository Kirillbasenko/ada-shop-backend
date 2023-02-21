const Router = require("express")
const router = new Router()
const cors = require("cors")
const typeController = require("../controllers/typeController")
const checkRole = require("../middleware/checkRoleMiddleware")

router.post("/", cors(), checkRole("ADMIN"), typeController.create)
router.get("/", cors(), typeController.getAll)

module.exports = router