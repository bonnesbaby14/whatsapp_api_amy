const router = require("express").Router();
const controller = require("../controller/controller");

router.post("/connect", controller.connect);



module.exports = router;
