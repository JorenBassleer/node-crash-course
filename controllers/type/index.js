const { Router } = require('express');
const Type = require('../../models/type');

const router = Router();
// Get all
router.get('/', (req, res) => {
  const allTypes = Type.find({});

  allTypes.then((types) => {
    res.json(types);
  }).catch((error) => console.log('error', error));
});

// Create new brand
router.post('/', (req, res) => {
  // Insert validation here
  const newType = Type.create(req.body);
  newType.then((type) => {
    res.json(type);
  }).catch((error) => console.log('error', error));
});
// Find one type
router.get('/:id', (req, res) => {
  const foundType = Type.find({ _id: req.params.id });
  foundType.then((type) => {
    res.json(type);
  }).catch((error) => console.log('error', error));
});
// Delete one type
router.delete('/delete/:id', (req, res) => {
  const deletedType = Type.deleteOne({ _id: req.params.id });
  deletedType.then((type) => {
    res.json(type);
  }).catch((error) => console.log('error', error));
});
router.put('/:id', (req, res) => {
  const updatedType = Type.updateOne({
    _id: req.params.id,
    $set: req.body,
  });
  updatedType.then((type) => {
    res.json(type);
  });
});
export default router;
