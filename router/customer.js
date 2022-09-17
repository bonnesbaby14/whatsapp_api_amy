const router = require("express").Router();
const controller = require("../controller/controller");

router.post("/connect", controller.connect);
router.get("/", controller.index);



module.exports = router;
