const multer = require("multer");
const fs = require("fs");


const csvFilter = (req, file, cb) => {
  let path = __basedir + "/resources/uploads/" + file.originalname;
  if(fs.existsSync(path)) {
      cb("Stocks are uploaded for this date", false);
  }
  else if (!file.mimetype.includes("csv")) {
    cb("Please upload only csv file.", false);
  }
  else {
    cb(null, true);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

const uploadFile = multer({ storage: storage, fileFilter: csvFilter});
module.exports = uploadFile;
