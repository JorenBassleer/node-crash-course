const Reservation = require('../../models/reservation');

// Get all
const getAllReservations = async () => {
  const allReservations = await Reservation.find({});
  return allReservations;
};
const findReservationById = async (id) => {
  const foundReservation = await Reservation.find({ _id: id });
  if (!foundReservation) throw new Error('No reservation found with that id');
  return foundReservation;
};
const createReservation = async (reservation) => {
  const createdReservation = await (await Reservation.create(reservation)).save();
  return createdReservation;
};
const updateReservationById = async (id, reservation) => {
  const updatedReservation = await Reservation.findByIdAndUpdate(
    id,
    {
      $set: reservation,
    },
    {
      lean: true,
      new: true,
    },
  );
  return updatedReservation;
};
const deleteReservationById = async (id) => {
  const deletedReservation = await Reservation.deleteOne({ _id: id });
  return deletedReservation;
};

module.exports = {
  getAllReservations,
  findReservationById,
  createReservation,
  updateReservationById,
  deleteReservationById,
};
