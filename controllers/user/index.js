const User = require('../../models/user');

// Get all
const getAllUsers = async () => {
  const allUsers = await User.find({});
  return allUsers;
};
const findUserById = async (id) => {
  const foundUser = await User.find({ _id: id });
  if (!foundUser) throw new Error('No user found with that id');
  return foundUser;
};
const createUser = async (user) => {
  const createdUser = await (await User.create(user)).save();
  return createdUser;
};
const updateUserById = async (id, user) => {
  const updatedUser = await User.findByIdAndUpdate(
    id,
    {
      $set: user,
    },
    {
      lean: true,
      new: true,
    },
  );
  return updatedUser;
};
const deleteUserById = async (id) => {
  const deletedUser = await User.deleteOne({ _id: id });
  return deletedUser;
};

module.exports = {
  getAllUsers,
  findUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
