const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    // find all tags
    // be sure to include its associated Product data
    const tagData = await Tag.findAll({
      include: [{model: Product}]
    });
    if (!tagData) {
      res.status(404).send("No Tags");
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find a single tag by its `id`
    // be sure to include its associated Product data
    const tagID = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    if (!tagID) {
      res.status(404).send("No Tags With Inputted ID");
      return;
    }
    res.status(200).json(tagID);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    // create a new tag
    const addTagData = await Tag.create(req.body);

    if (!addTagData) {
      res.status(404).send("Incorrect Data Inputted");
      return;
    }
    res.status(200).json(addTagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
  // update a tag's name by its `id` value
  const updateTag = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  if (!updateTag) {
    res.status(404).send("Incorrect ID Inputted");
    return;
  }
  res.status(200).json(updateTag);
  
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
  // delete on tag by its `id` value
  const deletedTag = await Tag.destroy({
    where: {
      id: req.params.id
    },
  });
  if (!deletedTag) {
    res.status(404).send("No Tag With Inputted ID");
    return;
  }
  res.status(200).json(deletedTag)
  } catch (err) {  
    res.status(400).json(err)
  }
});

module.exports = router;
