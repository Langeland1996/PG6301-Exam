import { Router } from "express";

export function MoviesApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const movies = await mongoDatabase.collection("movies").find().toArray();
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
