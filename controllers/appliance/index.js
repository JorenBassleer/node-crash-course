const Appliance = require('../../models/appliance');

const getAllAppliances = async () => {
  const allAppliances = await Appliance.find({});
  return allAppliances;
};
const findApplianceById = async (id) => {
  const foundAppliance = await Appliance.find({ _id: id });
  if (!foundAppliance) throw new Error('No appliance with that id');
  return foundAppliance;
};
const createAppliance = async (appliance) => {
  const newAppliance = await (await Appliance.create(appliance)).save();
  return newAppliance;
};
const updateAppliance = async (id, appliance) => {
  const updatedAppliance = await Appliance.updateOne({
    _id: id,
    $set: appliance,
  }).save();
  return updatedAppliance;
};
// TODO: Add soft delete
const deleteApplianceById = async (id) => {
  const deletedAppliance = await Appliance.deleteOne({ _id: id });
  return deletedAppliance;
};

module.exports = {
  getAllAppliances,
  findApplianceById,
  createAppliance,
  deleteApplianceById,
  updateAppliance,
};
