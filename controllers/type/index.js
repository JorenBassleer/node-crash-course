const Type = require('../../models/type');

// Get all
const getAllTypes = async () => {
  const allTypes = await Type.find({});
  return allTypes;
};
const findTypeById = async (id) => {
  const foundType = await Type.find({ _id: id });
  if (!foundType) throw new Error('No type found with that id');
  return foundType;
};
const createType = async (type) => {
  const createdType = await (await Type.create(type)).save();
  return createdType;
};
const updateTypeById = async (id, type) => {
  const updatedType = await Type.findByIdAndUpdate(
    id,
    {
      $set: type,
    },
    {
      lean: true,
      new: true,
    },
  );
  return updatedType;
};
const deleteTypeById = async (id) => {
  const deletedType = await Type.deleteOne({ _id: id });
  return deletedType;
};

module.exports = {
  getAllTypes,
  findTypeById,
  createType,
  updateTypeById,
  deleteTypeById,
};
