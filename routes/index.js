const Router = require("express")

const router = new Router()
const brandRouter = require("./brandRouter")
const deviceRouter = require("./deviceRouter")
const typeRouter = require("./typeRouter")
const userRouter = require("./userRouter")
const reviewRouter = require("./reviewRouter")

router.use("/user",  userRouter)
router.use("/type",  typeRouter)
router.use("/brand",  brandRouter)
router.use("/device",  deviceRouter)
router.use("/review",  reviewRouter)

module.exports = router