const Brand = require('../../models/brand');

const getAllBrands = async () => {
  const allBrands = await Brand.find({});
  return allBrands;
};
const findBrandById = async (id) => {
  const foundBrand = await Brand.find({ _id: id });
  if (!foundBrand) throw new Error('No brand with that id');
  return foundBrand;
};
const createBrand = async (brand) => {
  const newBrand = await (await Brand.create(brand)).save();
  return newBrand;
};
const updateBrand = async (id, brand) => {
  const updatedBrand = await Brand.updateOne(
    { _id: id },
    { $set: brand },
  );
  return updatedBrand;
};
const deleteBrandById = async (id) => {
  const deletedBrand = await Brand.deleteOne({ _id: id });
  return deletedBrand;
};

module.exports = {
  getAllBrands,
  findBrandById,
  createBrand,
  updateBrand,
  deleteBrandById,
};
