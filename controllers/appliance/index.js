const Appliance = require('../../models/appliance');
const { Router } = require('express');
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

module.exports = router;
