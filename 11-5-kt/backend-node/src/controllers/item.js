const Item = require('../models/Item')

exports.getItems = async (req, res) => {
    const items = await Item.find({})

    res.status(200).send(items)
}

exports.createItem = async (req, res) => {
    const newItem = {
        name: "Table",
        quality: 99,
        unused: true,
        color: "blue"
    }

    const createdItem = new Item(newItem)

    const savedItem = await createdItem.save()

    res.status(200).send(`yay ${savedItem._id}`)
}
/**
 * leiab otsitava itemi '_id' j2rgi ja suurendab 'quality' muutjutat yhe v6rra
 */
exports.updateItem = async (req, res) => {

    const { id } = req.params;

    //const item = await Item.findOne({ "_id": id })

    const item = await Item.findOneAndUpdate(
        { "_id": id },
        { $inc: { "quality": 1 } }
    );

    if (!item) res.status(404).send("No item with that id found")

    res.status(200).send(`updated ITEM >> ${item}`)
}

/**
 * leiab otsitava itemi '_id' j2rgi ja kirjutab selle uue JSON sama id-ga json objecktiga yle
 * {
 *  "name": "Table",
 *  "quality": 2,
 *  "unused": true,
 *  "color": "blue"
 *  }
 */
exports.replaceItem = async (req, res) => {

    const { id } = req.params;

    const newItem = req.body
    if (!newItem) res.status(404).send("Invalid JSON")

    const item = await Item.replaceOne(
        { "_id": id },
        {
            "name": newItem.name,
            "quality": newItem.quality,
            "unused": newItem.unused,
            "color": newItem.color
        }
    )
    if (!item) res.status(404).send("Replace unsuccessful")

    res.status(200).send(`replaced ITEM >> ${req.params.id} - ${newItem.name}`)
}

exports.deleteItem = async (req, res) => {
    const { id } = req.params;

    const item = await Item.findOneAndDelete({ _id: id })

    if (!item) res.status(404).send("No item with that id found")

    res.status(200).send(`Successfully deleted the following item: \n ${item}`)
}