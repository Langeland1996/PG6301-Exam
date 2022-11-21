import express from "express";
import * as path from "path";
import { MenuApi } from "./menuApi.js";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const mongoClient = new MongoClient(process.env.MONGODB_URL);

mongoClient.connect().then(async () => {
  console.log("Connected to mongodb");
  const databases = await mongoClient.db().admin().listDatabases();
  // Calls upon function in moviesApi.js
  app.use("/api/menu", MenuApi(mongoClient.db("pg6301")));
});


app.use(express.static("../client/dist/"));

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
});
