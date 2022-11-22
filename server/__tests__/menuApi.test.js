import request from "supertest";
import express from "express";
import { MongoClient } from "mongodb";
import { MenuApi } from "../menuApi.js";
import dotenv from "../dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(bodyParser.json());


const mongoClient = new MongoClient(process.env.MONGODB_URL);

beforeAll(async () => {
    await mongoClient.connect();
    const database = mongoClient.db("test_database");
    await database.collection("cateringMenu").deleteMany({});
    app.use("/api/menu", MenuApi(database));
});

afterAll(() => {
    mongoClient.close();
});

describe("menu api", () => {

    it("adds a new meal", async () => {
        const Dish = "Risotto";
        const Ingredients = "Rice, Broth, Butter, Cheese, Veggies";
        const Allergies = "Lactose";
        const Vegan = "No";
        const Vegetarian = "Yes";


        await request(app)
            .post("/api/menu")
            .send({ Dish, Ingredients, Allergies, Vegan, Vegetarian })
            .expect(200);

        const listResponse = await request(app).get("/api/menu").expect(200);

        expect(listResponse.body.map(({ Dish }) => Dish )).toContain(Dish);
        expect(listResponse.body.map(({ Ingredients }) => Ingredients )).toContain(Ingredients);
        expect(listResponse.body.map(({ Allergies }) => Allergies )).toContain(Allergies);
        expect(listResponse.body.map(({ Vegan }) => Vegan )).toContain(Vegan);
        expect(listResponse.body.map(({ Vegetarian }) => Vegetarian )).toContain(Vegetarian);
    });

    it("Check if database contains a dish", async () => {
        const Dish = "Risotto";

        const listResponse = await request(app).get("/api/menu").expect(200);
        expect(listResponse.body.map(({ Dish }) => Dish )).toContain(Dish);
    })
});