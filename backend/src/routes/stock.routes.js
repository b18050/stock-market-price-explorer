const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stock.controller"); 

const upload = require("../middleware/upload");

const routes = (app) => {
router.post("/upload", upload.single("file"), stockController.uploadCSV);
    
app.use("/api/stocks", router);
};

module.exports = routes;