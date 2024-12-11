// import mongoose from "mongoose";
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");

const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

const ProductModel = mongoose.model("products", ProductSchema);

const saveData = async () => {
  let data = new ProductModel({
    name: "Galaxy Z2",
    brand: "Samsung",
    price: 22999,
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};
// saveData();

const updateData = async () => {
  let data = await ProductModel.updateOne({ name: "Samsung QLED TV" }, { $set: { price: 90999 } });
  console.log(data);
};
// updateData();

const deleteData = async () => {
  let data = await ProductModel.deleteOne({ name: "Galaxy Z2" });
  console.log(data);
};
// deleteData();

const findData = async () => {
  let data = await ProductModel.find({ name: "Vivobook 15" });
  console.log(data);
};
findData();
