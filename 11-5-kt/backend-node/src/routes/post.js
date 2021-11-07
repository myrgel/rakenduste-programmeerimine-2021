const router = require("express").Router()
const postController = require("../controllers/post")

router.get("/", postController.getPosts)
router.post("/create", postController.createPost)
router.put("/update/:id", postController.updatePost)
router.put("/replace/:id", postController.replacePost)
router.delete("/delete/:id", postController.deletePost)

module.exports = router

