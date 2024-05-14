const express = require("express");
const {
  getUniqueUsers,
  getOrderedUsers,
  createUser,
  modifyUser,
  processUsers,
  orderUsers,
  reportToMichael,
  getUserById,
} = require("../controllers/userController");

const router = express.Router();

// Define routes and map them to controller functions
router.get("/process-users", processUsers);
router.get("/order-users", orderUsers);
router.get("/report-to-michael", reportToMichael);
router.get("/uniqueUsers", getUniqueUsers);
router.get("/orderedUsers", getOrderedUsers);
router.post("/adduser", createUser);
router.put("/updateuser/:id", modifyUser);
router.get("/users/:id", getUserById);

module.exports = router;
