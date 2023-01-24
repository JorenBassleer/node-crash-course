import { Router } from 'express';

import { find, create } from '../../models/brand';

const router = Router();

router.get('/', (req, res) => {
  const allBrands = find({});

  allBrands.then((brands) => {
    res.json(brands);
  }).catch((error) => console.log('error', error));
});

// Create new brand
router.post('/', (req, res) => {
  // Insert validation here
  const newBrand = create(req.body);
  newBrand.then((brand) => {
    res.json(brand);
  }).catch((error) => console.log('error', error));
});

export default router;
