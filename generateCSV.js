const fs = require("fs");
const { parse } = require("json2csv");

/**
 * Generates a CSV file from the given data and saves it to the specified output file.
 * @param {Array} data - The data to be written to the CSV.
 * @param {string} outputFile - The path to the output CSV file.
 */
function generateCSV(data, outputFile) {
  const fields = ["name", "surname", "count"];
  const opts = { fields };

  try {
    const csv = parse(data, opts);
    fs.writeFileSync(outputFile, csv);
    console.log(`${outputFile} has been created successfully.`);
  } catch (err) {
    console.error(err);
  }
}

module.exports = generateCSV;
