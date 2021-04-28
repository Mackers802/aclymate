const rawData = require("./rawData.js");

const formatCsv = (arr) => {
  const formattedData = [];
  const headers = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const items = arr[i];
    let object = {};
    for (let j = 0; j < items.length; j++) {
      object[headers[j]] = items[j];
    }
    formattedData.push(object);
  }
  return formattedData;
};
console.log(formatCsv(rawData));
