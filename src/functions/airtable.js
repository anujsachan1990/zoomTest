import axios from "axios";

// sample API URL
// http://anuj-zoom.netlify.com/.netlify/functions/hello

exports.handler = (event, context, callback) => {
  axios
    .get("https://api.airtable.com/v0/appzhdjp7tk4G73Bh/Table%201", {
      headers: {
        "Cache-Control": "public, s-maxage=240",
        Authorization: "Bearer keypXdhotixFUmd7K",
      },
    })
    .then((res) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res.data),
      });
    })
    .catch((err) => {
      callback(err);
    });
};
