const Brand = require('../../models/brand');
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    const allBrands = Brand.find({});

    allBrands.then((brands) => {
        res.json(brands);
    }).catch((error) => console.log('error', error));
});

// Create new brand
router.post('/', (req, res) => {
    // Insert validation here
    const newBrand = Brand.create(req.body);
    newBrand.then((brand) => {
        res.json(brand);
    }).catch((error) => console.log('error', error));
});

module.exports = router;
