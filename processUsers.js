const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

/**
 * Processes the users from usersBackEnd.json, removing duplicates and adding unique IDs.
 * Writes the unique users to uniqueUsers.json and returns data for CSV generation.
 */
function processUsers() {
  const rawData = fs.readFileSync("data/usersBackEnd.json");
  const users = JSON.parse(rawData);

  const uniqueUsersMap = new Map();
  const userCounts = new Map();

  users.forEach((user) => {
    const userKey = `${user.name}-${user.surname}`;
    if (!uniqueUsersMap.has(userKey)) {
      uniqueUsersMap.set(userKey, { ...user, id: uuidv4() });
      userCounts.set(userKey, 1);
    } else {
      userCounts.set(userKey, userCounts.get(userKey) + 1);
    }
  });

  const uniqueUsers = Array.from(uniqueUsersMap.values());
  fs.writeFileSync(
    "data/uniqueUsers.json",
    JSON.stringify(uniqueUsers, null, 2)
  );

  const csvData = Array.from(userCounts.entries()).map(([key, count]) => {
    const [name, surname] = key.split("-");
    return { name, surname, count };
  });

  return csvData;
}

module.exports = processUsers;
