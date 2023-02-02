const Incident = require('../../models/incident');
const applianceController = require('../appliance');

const getAllIncidents = async () => {
  const allIncidents = await Incident.find({});
  return allIncidents;
};
const findIncidentById = async (id) => {
  const foundIncident = await Incident.find({ _id: id });
  if (!foundIncident) throw new Error('No incident with that id');
  return foundIncident;
};
const createIncident = async (incident) => {
  const newIncident = await (await Incident.create(incident)).save();
  return newIncident;
};
const updateIncidentById = async (id, incident) => {
  const updatedIncident = await Incident.findByIdAndUpdate(
    id,
    { $set: incident },
    {
      lean: true,
      new: true,
    },
  );

  return updatedIncident;
};
// TODO: Add soft delete
const deleteIncidentById = async (id) => {
  const deletedIncident = await Incident.deleteOne({ _id: id });
  return deletedIncident;
};

module.exports = {
  getAllIncidents,
  findIncidentById,
  createIncident,
  updateIncidentById,
  deleteIncidentById,
};
