const dbConnect = require("./mongodb");
const deleteData = async () => {
  let data = await dbConnect();
  let dataDeleting = { name: "Vivobook 15"};
  let result = await data.deleteOne(dataDeleting);
//   let result = await data.deleteMany(dataDeleting);
  console.log(result);
  if (result.acknowledged) {
    console.log("Record Deleted Successfully !!");
  }
};

deleteData();
