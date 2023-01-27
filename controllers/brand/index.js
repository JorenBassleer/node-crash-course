const { Router } = require('express');
const Brand = require('../../models/brand');

const router = Router();
// Get all
const getAllBrands = async () => {
  const allBrands = await Brand.find({});
  return allBrands;
};

// Create new brand
router.post('/', (req, res) => {
  // Insert validation here
  const newBrand = Brand.create(req.body);
  newBrand.then((brand) => {
    res.json(brand);
  }).catch((error) => console.log('error', error));
});
// Find one brand
router.get('/:id', (req, res) => {
  const foundBrand = Brand.find({ _id: req.params.id });
  foundBrand.then((brand) => {
    res.json(brand);
  }).catch((error) => console.log('error', error));
});
// Delete one brand
router.delete('/delete/:id', (req, res) => {
  const deletedBrand = Brand.deleteOne({ _id: req.params.id });
  deletedBrand.then((brand) => {
    res.json(brand);
  }).catch((error) => console.log('error', error));
});
router.put('/:id', (req, res) => {
  const updatedBrand = Brand.updateOne({
    _id: req.params.id,
    $set: req.body,
  });
  updatedBrand.then((brand) => {
    res.json(brand);
  });
});

module.exports = router;
