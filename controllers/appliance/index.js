const Appliance = require('../../models/appliance');

const getAllAppliances = async () => {
  const allAppliances = await Appliance.find({});
  return allAppliances;
};
const findAppliance = async (id) => {
  const foundAppliance = await Appliance.find({ _id: id });
  if (!foundAppliance) throw new Error('No appliance with that id');
  return foundAppliance;
};
const createAppliance = async (appliance) => {
  const newAppliance = await Appliance.create(appliance);
  return newAppliance;
};
const updateAppliance = async (id, appliance) => {
  const updatedAppliance = await Appliance.updateOne({
    _id: id,
    $set: appliance,
  });
  return updatedAppliance;
};
const deleteAppliance = async (id) => {
  const deletedAppliance = await Appliance.delete({ _id: id });
  return deletedAppliance;
};
module.exports = {
  getAllAppliances,
  findAppliance,
  createAppliance,
  deleteAppliance,
  updateAppliance,
};
