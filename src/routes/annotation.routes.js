const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const ctrl = require("../controllers/annotation.controller");

router.use(auth);

router.post("/", ctrl.create);
router.get("/", ctrl.getAll);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.remove);

module.exports = router;
