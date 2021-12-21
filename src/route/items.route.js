const express = require("express");
const itemsRoute = express.Router();
const { items } = require("../models/index");

itemsRoute.get("/", async (req, res, next) => {
  try {
    const allitems = await items.findAll();
    res.json(allitems);
  } catch (err) {
    next(new Error("something went wrong" + err));
  }
});

itemsRoute.post("/", async (req, res, next) => {
  try {
    const newitems = await items.create(req.body);
    res.send(201).json(newitems);
  } catch (err) {
    next(new Error("something went wrong" + err));
  }
});
itemsRoute
  .route("/:id")
  .get(async (req, res, next) => {
    console.log(req.params.id);
    try {
      const singlePiceOfitems = await items.findAll({
        where: { id: req.params.id },
      });
      res.json(singlePiceOfitems);
    } catch (err) {
      next(new Error("something went wrong" + err));
    }
  })
  .delete(async (req, res, next) => {
    try {
      const deleteditems = await items.destroy({
        where: { id: req.params.id },
      });
      res.status(204).json(deleteditems);
    } catch (err) {
      next(new Error("something went wrong" + err));
    }
  })
  .put(async (req, res, next) => {
    try {
      const updateditems = await items.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(201).json(updateditems);
    } catch (err) {
      next(new Error("something went wrong" + err));
    }
  });
module.exports = itemsRoute;
