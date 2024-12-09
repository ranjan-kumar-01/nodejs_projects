const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
// function to connect database
async function dbConnect() {
  await client.connect();
  const db = client.db("e-comm");
  return db.collection("products");
}

module.exports = dbConnect;
