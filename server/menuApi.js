import { Router } from "express";

export function MenuApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const movies = await mongoDatabase.collection("cateringMenu").find().toArray();
    res.json(movies);
  });

  router.get("/vegan", async (req, res) => {
    const movies = await mongoDatabase
        .collection("cateringMenu")
        .find({"Vegan": "Yes"})
        .toArray();
    res.json(movies);
  });

  router.get("/vegetarian", async (req, res) => {
    const movies = await mongoDatabase
        .collection("cateringMenu")
        .find({"Vegetarian": "Yes"})
        .toArray();
    res.json(movies);
  });


  router.post("/", (req, res) => {
    const { Dish, Ingredients, Allergies, Vegan, Vegetarian } = req.body;
    const result = mongoDatabase.collection("cateringMenu").insertOne({ Dish, Ingredients, Allergies, Vegan, Vegetarian });
    res.sendStatus(200);
  });

  return router;
}
