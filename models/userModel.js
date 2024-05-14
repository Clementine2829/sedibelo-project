const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

/**
 * Reads JSON data from a file and parses it.
 * @param {string} filePath - The path to the file.
 * @returns {Array} - The parsed data.
 */
const readData = (filePath) => {
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
};

/**
 * Writes data to a JSON file.
 * @param {string} filePath - The path to the file.
 * @param {Array} data - The data to write.
 */
const writeData = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

/**
 * Adds a new user to the uniqueUsers.json file.
 * @param {Object} user - The user data to add.
 * @returns {Object} - The newly added user with a unique ID.
 */
const addUser = (user) => {
  const users = readData("data/uniqueUsers.json");
  const newUser = { ...user, id: uuidv4() };
  users.push(newUser);
  writeData("data/uniqueUsers.json", users);
  return newUser;
};

/**
 * Updates an existing user in the uniqueUsers.json file.
 * @param {string} id - The ID of the user to update.
 * @param {Object} updatedUser - The updated user data.
 * @returns {Object} - The updated user data.
 * @throws {Error} - If the user is not found.
 */
const updateUser = (id, updatedUser) => {
  const users = readData("data/uniqueUsers.json");
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) throw new Error("User not found");
  users[index] = { ...users[index], ...updatedUser };
  writeData("data/uniqueUsers.json", users);
  return users[index];
};

module.exports = {
  readData,
  writeData,
  addUser,
  updateUser,
};
