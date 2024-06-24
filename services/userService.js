const userDao = require('../daos/userDao');
const UserDTO = require('../dtos/userDto');

const createUser = async (userData) => {
  const user = await userDao.createUser(userData);
  return new UserDTO(user);
};

const getUserById = async (id) => {
  const user = await userDao.getUserById(id);
  return new UserDTO(user);
};

const getAllUsers = async () => {
  const users = await userDao.getAllUsers();
  return users.map(user => new UserDTO(user));
};

const updateUser = async (id, updateData) => {
  const user = await userDao.updateUser(id, updateData);
  return new UserDTO(user);
};

const deleteUser = async (id) => {
  const user = await userDao.deleteUser(id);
  return new UserDTO(user);
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};
