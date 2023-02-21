const Router = require("express")
const router = new Router()
const cors = require("cors")
const ReviewsInfo = require("../controllers/reviewController")

router.get("/:id", cors(), ReviewsInfo.getAll)
router.post("/:id", cors(), ReviewsInfo.create)

module.exports = router