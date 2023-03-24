// domain/.netlify/functions/basic-api

const data = require("../assets/data");

exports.handler = async (event, context) => {
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
