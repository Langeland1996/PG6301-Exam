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


  router.post("/new", (req, res) => {
    mongoDatabase.collection("movies").insert({
      title: "one"
    });
    res.sendStatus(500);
  });

  return router;
}
