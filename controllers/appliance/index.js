const Appliance = require('../../models/appliance');
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    const allAppliances = Appliance.find({});

    allAppliances.then((appliances) => {
        res.json(appliances);
    }).catch((error) => console.log(error));
});

router.post('/', (req, res) => {
    const NewAppliance = Appliance.create(req.body)
    NewAppliance.then((appliance) => {
        res.json(appliance);
    })
});

module.exports = router;
