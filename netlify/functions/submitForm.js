const fs = require("fs");

const fileContent = fs.readFileSync("./netlify/functions/submitForm.js", "utf-8");
console.log("File Content:", fileContent);
const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
    const { name, email, message} = JSON.parse (event.body);
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:"uajirimicon@gmail.com",
            pass: "utiajirimicon1995"
        },
    });
    const mailOptions = {
        from: "uajirimicon@gmail.com",
        to: "uajirimicon@gmail.com",
        subject: "New Form Submission",
        text: `name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return {
        statusCode: 200,
        body: JSON.stringify({message: "request submitted successfully!"}),
    };
};