const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stock.controller"); 

const upload = require("../middleware/upload");

const routes = (app) => {
router.post("/upload", upload.single("file"), stockController.uploadCSV);
router.get("/all", stockController.getAllStocks);
router.post("/between",stockController.getStocksBetweenRange);
router.get("/names", stockController.getStockNames);
app.use("/api/stocks", router);
};

module.exports = routes;