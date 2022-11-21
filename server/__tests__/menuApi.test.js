import request from "supertest";
import express from "express";

const app = express();

describe("menu api", () => {
    it("lists exiting movies", () => {
        request(app).get("/api/menu").expect(200);
    })
});