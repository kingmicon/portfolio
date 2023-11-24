const fs = require("fs");

fs.writeFileSync("./netlify/functions/submitForm.js", "Hello, Netlify Functions!")

const fileContent = fs.readFileSync("./netlify/functions/submitForm.js", "utf-8");
console.log("File Content:", fileContent);
