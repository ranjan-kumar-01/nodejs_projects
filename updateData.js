const dbConnect = require("./mongodb");
const updateData = async () => {
  let data = await dbConnect();

  oldRecord = { name: "MacBook Air M2" };
  newRecord = { price: 199999 };
  let result = await data.updateOne(oldRecord, { $set: newRecord });
  console.log(result);

  if(result.acknowledged){
    console.log("Record Updated !!");
  }
};
updateData();
