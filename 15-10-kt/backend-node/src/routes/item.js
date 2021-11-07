const router = require("express").Router()
const itemController = require("../controllers/item")

router.get("/", itemController.getItems)
router.post("/create", itemController.createItem)
router.put("/update/:id", itemController.updateItem)
router.put("/replace/:id", itemController.replaceItem)
router.delete("/delete/:id", itemController.deleteItem)

module.exports = router