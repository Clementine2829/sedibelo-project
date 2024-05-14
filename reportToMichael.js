const fs = require("fs");

/**
 * Reports the number of users in the ENGINEERING department reporting to Michael Phalane.
 * @returns {number} - The count of users reporting to Michael Phalane.
 * @throws {Error} - If Michael Phalane is not found in the ENGINEERING department.
 */
function reportToMichael() {
  const rawData = fs.readFileSync("./data/uniqueUsers.json");
  const users = JSON.parse(rawData);

  const michaelPhalane = users.find(
    (user) =>
      user.name === "MICHAEL" &&
      user.surname === "PHALANE" &&
      user.department === "ENGINEERING"
  );
  if (!michaelPhalane)
    throw new Error("Michael Phalane not found in the ENGINEERING department.");

  const reportingUsers = users.filter(
    (user) =>
      user.department === "ENGINEERING" &&
      (user.designation === "MECHANIC" ||
        user.designation === "MECHANIC ASSISTANT") &&
      user.id !== michaelPhalane.id
  );

  return reportingUsers.length;
}

module.exports = reportToMichael;
