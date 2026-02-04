const dotenv = require("dotenv");
dotenv.config();


const paypal = require("paypal-rest-sdk");

console.log("PAYPAL_MODE =", process.env.PAYPAL_MODE);


paypal.configure({
  mode: process.env.PAYPAL_MODE,
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

module.exports = paypal;
