// domain/.netlify/functions/basic-api

const data = require("../assets/data");

exports.handler = async (event, context) => {
  console.log(event);
  return {
    // to fix cors error, just need to add headers
    headers: {
      "Access-Control-Allow_Origin": "*",
    },
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
