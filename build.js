const fs = require("fs");

const fileContent = fs.readFileSync("./netlify/functions/submitForm.js", "utf-8");
console.log("File Content:", fileContent);
