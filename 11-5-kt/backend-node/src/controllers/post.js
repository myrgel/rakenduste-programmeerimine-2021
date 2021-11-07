const Post = require('../models/Post')

exports.getPosts = async (req, res) => {
  const posts = await Post.find({})

    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(posts)
}

exports.createPost = async (req, res) => {
    const newPost = {
        name: req.body.name,
        quality: req.body.quality,
        unused: req.body.unused,
        color: req.body.color
    }

    const createdPost = new Post(newPost)

    const savedPost = await createdPost.save()

    res.status(200).send(`yay ${savedPost._id} -- ${savedPost.name}`)
}
/**
 * leiab otsitava posti '_id' j2rgi ja suurendab 'quality' muutjutat yhe v6rra
 */
exports.updatePost = async (req, res) => {

    const { id } = req.params;

    //const post = await Post.findOne({ "_id": id })

    const post = await Post.findOneAndUpdate(
        { "_id": id },
        { $inc: { "quality": 1 } }
    );

    if (!post) res.status(404).send("No post with that id found")

    res.status(200).send(`updated ITEM >> ${post}`)
}

/**
 * leiab otsitava posti '_id' j2rgi ja kirjutab selle uue JSON sama id-ga json objecktiga yle
 * {
 *  "name": "Table",
 *  "quality": 2,
 *  "unused": true,
 *  "color": "blue"
 *  }
 */
exports.replacePost = async (req, res) => {

    const { id } = req.params;

    const newPost = req.body
    if (!newPost) res.status(404).send("Invalid JSON")

    const post = await Post.replaceOne(
        { "_id": id },
        {
            "name": newPost.name,
            "quality": newPost.quality,
            "unused": newPost.unused,
            "color": newPost.color
        }
    )
    if (!post) res.status(404).send("Replace unsuccessful")

    res.status(200).send(`replaced ITEM >> ${req.params.id} - ${newPost.name}`)
}

exports.deletePost = async (req, res) => {
    const { id } = req.params;

    const post = await Post.findOneAndDelete({ _id: id })

    if (!post) res.status(404).send("No post with that id found")

    res.status(200).send(`Successfully deleted the following post: \n ${post}`)
}