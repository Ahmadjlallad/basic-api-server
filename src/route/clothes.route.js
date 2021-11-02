const express = require("express");
const clothesRoute = express.Router();
const { clothes } = require("../models/index");

clothesRoute.get("/", async (req, res, next) => {
  try {
    const allClothes = await clothes.findAll();
    res.json(allClothes);
  } catch (err) {
    next(new Error("something went wrong" + err));
  }
});

clothesRoute.post("/", async (req, res, next) => {
  try {
    const newClothes = await clothes.create(req.body);
    res.send(201).json(newClothes);
  } catch (err) {
    next(new Error("something went wrong" + err));
  }
});
clothesRoute
  .route("/:id")
  .get(async (req, res, next) => {
    console.log(req.params.id);
    try {
      const singlePiceOfClothes = await clothes.findAll({
        where: { id: req.params.id },
      });
      res.json(singlePiceOfClothes);
    } catch (err) {
      next(new Error("something went wrong" + err));
    }
  })
  .delete(async (req, res, next) => {
    try {
      const deletedClothes = await clothes.destroy({
        where: { id: req.params.id },
      });
      res.status(204).json(deletedClothes);
    } catch (err) {
      next(new Error("something went wrong" + err));
    }
  })
  .put(async (req, res, next) => {
    try {
      const updatedClothes = await clothes.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(201).json(updatedClothes);
    } catch (err) {
      next(new Error("something went wrong" + err));
    }
  });
module.exports = clothesRoute;
