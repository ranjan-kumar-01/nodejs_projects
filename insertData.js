const dbConnect = require("./mongodb");
myObj ={ name: "Vivobook 15", brand: "Asus", price: 49999, category: "laptop" }

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertOne(myObj);

  if (result.acknowledged) {
    console.log("Data inserted !!");
  }
};
insert();
