const express = require("express");
const foodRoute = express.Router();
const { food } = require("../models/index");
// const food = undefined;
foodRoute.get("/", async (req, res, next) => {
  try {
    const allFoods = await food.findAll();
    res.json(allFoods);
  } catch (err) {
    next(new Error("something went wrong" + err));
  }
});

foodRoute.post("/", async (req, res, next) => {
  try {
    const newFood = await food.create(req.body);
    res.send(201).json(newFood);
  } catch (err) {
    next(new Error("something went wrong" + err));
  }
});
foodRoute
  .route("/:id")
  .get(async (req, res, next) => {
    console.log(req.params.id);
    try {
      const singlePiceOfFood = await food.findAll({
        where: { id: req.params.id },
      });
      res.json(singlePiceOfFood);
    } catch (err) {
      next(new Error("something went wrong" + err));
    }
  })
  .delete(async (req, res, next) => {
    try {
      const deletedFood = await food.destroy({ where: { id: req.params.id } });
      res.status(204).json(deletedFood);
    } catch (err) {
      next(new Error("something went wrong" + err));
    }
  })
  .put(async (req, res, next) => {
    try {
      const updatedFood = await food.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(201).json(updatedFood);
    } catch (err) {
      next(new Error("something went wrong" + err));
    }
  });
module.exports = foodRoute;
