const fs = require("fs");
const csv = require("fast-csv");
const { Op } = require("sequelize")
const Sequelize = require("sequelize");

const db = require("../models");
const Stock = db.stocks;

const uploadCSV = async (req, res) => {
    try{
        if(req.file == undefined) {
            return res.status(400).send("please upload a CSV file");
        }
        let stocks = [];
        let path = __basedir + "/resources/uploads/" + req.file.filename;
        console.log(req.file.filename);
        fs.createReadStream(path)
            .pipe(csv.parse({ headers: true }))
            .on("error", (error) => {
                console.log("Only CSV format is supported")
                res.status(403).send({
                    //Forbidden request
                    message: "Please upload valid stocks data in CSV format",
                    error: error.message,
                })
            })
            .on("data", (row) => {
                if(row.SERIES == "EQ"){
                    console.log(row.SERIES)
                    stocks.push(row);
                }  
            })
            .on("end", () => {
                Stock.bulkCreate(stocks)
                .then(() => {
                    res.status(200).send({
                    message:
                        "Uploaded the stocks successfully: " + req.file.originalname,
                    });
                })
                .catch((error) => {
                    res.status(500).send({
                    message: "Fail to import data into database!",
                    error: error.message,
                    });
                });
            });



    } catch(error) {
        console.log(error);
        res.status(500).send({
            message: "Upload failed: " + req.file.originalname
        });
    }
}

const getAllStocks = (req, res) => {
    Stock.findAll()
        .then((stock) => {
            res.send(stock);
        }) 
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred getting stocks"
            });
        });
}

const getStocksBetweenRange = (req, res) => {
    try{
        console.log(req.body)
        const startDate = req.body.startDate;
        const endDate = req.body.endDate;
        const stockName = req.body.stockName;
        console.log(startDate)
        Stock.findAll({
            where: {
                TIMESTAMP: {
                    [Op.between] : [startDate, endDate]
                },
                SYMBOL: stockName
            },
            order: [
                ['TIMESTAMP', 'ASC']
            ],
        })
        .then((stock) => {
            res.send(stock);
        }) 
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred getting stocks"
            });
        });
    } catch(error) {
        console.log(error);
        res.status(500).send({
            message: "Query failed: " + req.startDate
        });
    }
    
} 

module.exports = {
    uploadCSV,
    getAllStocks,
    getStocksBetweenRange
};