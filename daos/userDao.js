const User = require('../models/userModel');

const createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

const getUserById = async (id) => {
  return User.findById(id);
};

const getAllUsers = async () => {
  return User.find({ isDeleted: false });
};

const updateUser = async (id, updateData) => {
  return User.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteUser = async (id) => {
  return User.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};