const Router = require("express")
const cors = require("cors")
const router = new Router()
const brandRouter = require("./brandRouter")
const deviceRouter = require("./deviceRouter")
const typeRouter = require("./typeRouter")
const userRouter = require("./userRouter")
const reviewRouter = require("./reviewRouter")

router.use("/user", cors(), userRouter)
router.use("/type", cors(), typeRouter)
router.use("/brand", cors(), brandRouter)
router.use("/device", cors(), deviceRouter)
router.use("/review", cors(), reviewRouter)

module.exports = router