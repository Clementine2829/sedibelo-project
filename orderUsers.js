// orderUsers.js

const fs = require("fs");

/**
 * Orders the users alphabetically by name and writes the ordered list to orderedUsers.json.
 */
function orderUsers() {
  const rawData = fs.readFileSync("data/uniqueUsers.json");
  const users = JSON.parse(rawData);

  users.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  fs.writeFileSync("data/orderedUsers.json", JSON.stringify(users, null, 2));
  console.log(
    "orderedUsers.json file has been created with users sorted alphabetically by name."
  );
}

module.exports = orderUsers;
