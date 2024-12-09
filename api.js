const express = require("express");
const dbConnect = require("./mongodb");
const { ObjectId } = require("mongodb"); 

const app = express();
app.use(express.json()); 

// Utility function for sending error responses
const handleError = (response, error) => {
  console.error(error); // Log the error for debugging
  response.status(500).send({ error: "An internal server error occurred" });
};

// GET Method - Fetch all records
app.get("/", async (request, response) => {
  try {
    const data = await dbConnect();
    const result = await data.find().toArray();
    response.send(result);
  } catch (error) {
    handleError(response, error);
  }
});

// POST Method - Add a new record
app.post("/", async (request, response) => {
  try {
    const data = await dbConnect();
    const result = await data.insertOne(request.body);
    response.send({ message: "Data inserted successfully", insertedId: result.insertedId });
  } catch (error) {
    handleError(response, error);
  }
});

// PUT Method - Update a record dynamically by ID
app.put("/:id", async (request, response) => {
  try {
    const data = await dbConnect();
    const result = await data.updateOne(
      { _id: new ObjectId(request.params.id) }, 
      { $set: request.body } 
    );
    if (result.matchedCount === 0) {
      response.status(404).send({ error: "Document not found" });
    } else {
      response.send({ message: "Data updated successfully", result });
    }
  } catch (error) {
    handleError(response, error);
  }
});

// DELETE Method - Delete a record by ID
app.delete("/:id", async (request, response) => {
  try {
    const data = await dbConnect();
    const result = await data.deleteOne({ _id: new ObjectId(request.params.id) });
    if (result.deletedCount === 0) {
      response.status(404).send({ error: "Document not found" });
    } else {
      response.send({ message: "Data deleted successfully", result });
    }
  } catch (error) {
    handleError(response, error);
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
