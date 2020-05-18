import faunadb from "faunadb";
const { checkHeaderForValidToken } = require("./auth.js");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: "fnADsIPeWaACEmk4IM_0wWJlxvAFMOOnTA4fvDEK",
});

exports.handler = (event, context, callback) => {
  return client
    .query(q.Paginate(q.Match(q.Ref("indexes/userData"))))
    .then((response) => {
      const todoRefs = response.data;
      console.log("Todo refs", todoRefs);
      // console.log(`${todoRefs.length} todos found`);
      // create new query out of todo refs. http://bit.ly/2LG3MLg
      const getAllTodoDataQuery = todoRefs.map((ref) => {
        return q.Get(ref);
      });

      // // then query the refs
      return client.query(getAllTodoDataQuery).then((ret) => {
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify(ret),
        });
      });
    })
    .catch((error) => {
      console.log("error", error);
      return callback(null, {
        body: JSON.stringify(error),
      });
    });
};
