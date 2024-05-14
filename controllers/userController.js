const {
  readData,
  writeData,
  addUser,
  updateUser,
} = require("../models/userModel");
const { parse } = require("json2csv");
const fs = require("fs");

/**
 * Controller function to get unique users.
 * Reads and returns the content of uniqueUsers.json.
 */
const getUniqueUsers = (req, res) => {
  try {
    const users = readData("data/uniqueUsers.json");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to read uniqueUsers.json" });
  }
};

/**
 * Controller function to get ordered users.
 * Reads and returns the content of orderedUsers.json.
 */
const getOrderedUsers = (req, res) => {
  try {
    const users = readData("data/orderedUsers.json");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to read orderedUsers.json" });
  }
};

/**
 * Controller function to get a single user by ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getUserById = (req, res) => {
  try {
    const userId = req.params.id;
    const users = readData("data/uniqueUsers.json");
    const user = users.find((user) => user.id === userId);

    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Controller function to create a new user.
 * Adds a new user to uniqueUsers.json and returns the new user.
 */
const createUser = (req, res) => {
  try {
    const { name, surname, designation, department } = req.body;

    // Check if required fields are provided
    if (!name || !surname || !designation || !department) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newUser = addUser(req.body);
    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to add user" });
  }
};

/**
 * Controller function to update an existing user.
 * Updates the user data in uniqueUsers.json and returns the updated user.
 */
const modifyUser = (req, res) => {
  try {
    const { name, surname, designation, department } = req.body;

    // Check if required fields are provided
    if (!name && !surname && !designation && !department) {
      return res.status(400).json({ error: "No fields to update" });
    }

    const updatedUser = updateUser(req.params.id, req.body);
    if (!updatedUser) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json({ message: "User updated successfully", user: updatedUser });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Controller function to process users and create a CSV file.
 */
const processUsers = (req, res) => {
  try {
    const processUsers = require("../processUsers");
    const generateCSV = require("../generateCSV");

    const csvData = processUsers();
    generateCSV(csvData, "data/uniqueUsers.csv");
    res.json({ message: "Users processed and CSV file created.", csvData });
  } catch (error) {
    res.status(500).json({ error: "Failed to process users" });
  }
};

/**
 * Controller function to order users.
 * Orders the users alphabetically by name and writes the ordered list to orderedUsers.json.
 */
const orderUsers = (req, res) => {
  try {
    const orderUsers = require("../orderUsers");
    orderUsers();
    res.json({ message: "Users ordered and orderedUsers.json file created." });
  } catch (error) {
    res.status(500).json({ error: "Failed to order users" });
  }
};

/**
 * Controller function to report users reporting to Michael Phalane.
 * Returns the number of users in the ENGINEERING department reporting to Michael Phalane.
 */
const reportToMichael = (req, res) => {
  try {
    const reportToMichael = require("../reportToMichael");
    const count = reportToMichael();
    res.json({ message: "Report generated.", count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUniqueUsers,
  getOrderedUsers,
  createUser,
  modifyUser,
  processUsers,
  orderUsers,
  reportToMichael,
  getUserById,
};
