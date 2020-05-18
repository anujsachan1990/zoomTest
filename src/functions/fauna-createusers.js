import faunadb from "faunadb";

const q = faunadb.query;
const client = new faunadb.Client({
  secret: "fnADsIPeWaACEmk4IM_0wWJlxvAFMOOnTA4fvDEK",
});

exports.handler = (event, context, callback) => {
  const data = {
    id: "1234562",
    email: "anuj.sachan52@gmail.com",
    auth0Id: "123452",
    areaOfInterest: "gaming12",
  };

  return client
    .query(q.Create(q.Ref("classes/users"), { data }))
    .then((response) => {
      console.log("success", response);
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response),
      });
    })
    .catch((error) => {
      console.log("error", error);
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error),
      });
    });
};
