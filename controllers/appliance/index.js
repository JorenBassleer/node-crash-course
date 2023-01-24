const { Router } = require('express');
const Appliance = require('../../models/appliance');

const router = Router();

router.get('/', (req, res) => {
  const allAppliances = Appliance.find({});

  allAppliances.then((appliances) => {
    res.json(appliances);
  }).catch((error) => console.log('error', error));
});
// Get all
router.post('/', (req, res) => {
  const newAppliance = Appliance.create(req.body);
  newAppliance.then((appliance) => {
    res.json(appliance);
  }).catch((error) => console.log('error', error));
});
// Find
router.get('/:id', (req, res) => {
  const foundAppliance = Appliance.find({ _id: req.params.id });
  foundAppliance.then((appliance) => {
    res.json(appliance);
  }).catch((error) => console.log('error', error));
});
// Delete
router.delete('/delete/:id', (req, res) => {
  const deletedAppliance = Appliance.deleteOne({ _id: req.params.id });
  deletedAppliance.then(() => {
    res.json(200);
  });
});
// Update
router.put('/:id', (req, res) => {
  // Add validation
  const updatedAppliance = Appliance.updateOne({
    _id: req.params.id,
    $set: req.body,
  });
  updatedAppliance.then((appliance) => {
    res.json(appliance);
  });
});
module.exports = router;
