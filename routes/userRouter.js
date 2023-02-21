const Router = require("express")
const router = new Router()
const cors = require("cors")
const UserController = require("../controllers/userController")
const authMiddlewate = require("../middleware/authMiddleware")

router.post("/registration", cors(), UserController.registration)
router.post("/login", cors(), UserController.login)
router.get("/auth", cors(), authMiddlewate, UserController.check)

module.exports = router