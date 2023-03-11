const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  try {
  // find all categories
  // be sure to include its associated Products
  const categoryData = await Category.findAll({
    include: [{model: Product}]
  });
  if (!categoryData) {
    res.status(404).send("No Categorys");
    return;
  }
  res.status(200).json(categoryData);
} catch (err) {
  res.status(400).json(err);
}
});

router.get('/:id', async (req, res) => {
  try {
  // find one category by its `id` value
  // be sure to include its associated Products
  const categoryID = await Category.findByPk(req.params.id, {
    include: [{model: Product}]
  });
  if (!categoryID) {
    res.status(404).send("No Category With Inputted ID");
    return;
  }
  res.status(200).json(categoryID);
} catch (err) {
  res.status(400).json(err);
}
});

router.post('/', async (req, res) => {
  try {
  // create a new category
  const addCategoryData = await Category.create(req.body);

  if (!addCategoryData) {
    res.status(404).send("Incorrect Data Inputted");
    return;
  }
  res.status(200).json(addCategoryData);
} catch (err) {
  res.status(400).json(err);
}
});

router.put('/:id', async (req, res) => {
  try {
  // update a category by its `id` value
  const updateCategory = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  if (!updateCategory) {
    res.status(404).send("Incorrect ID Inputted");
    return;
  }
  res.status(200).json(updateCategory);
  
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
  // delete a category by its `id` value
  const deletedCategory = await Category.destroy({
    where: {
      id: req.params.id
    },
  });
  if (!deletedCategory) {
    res.status(404).send("No Category With Inputted ID");
    return;
  }
  res.status(200).json(deletedCategory)
  } catch (err) {  
    res.status(400).json(err)
  }
});

module.exports = router;
