const dbConnect = require("./mongodb");

// method:1
const main = async () => {
  const collection = await dbConnect();
  data = await collection.find().toArray();
  console.log("Data : ", data);
};
main();

// method:2
dbConnect().then((response) => {
  response
    .find()
    .toArray()
    .then((data) => {
      console.log("Data : ", data);
    });
});
console.log(dbConnect());
