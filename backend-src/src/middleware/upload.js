
const multer = require("multer");

const csvFilter = (req, file, cb) => {                                    // function to only accept csv type files, can expand further 
    if(file.mimetype.includes("csv")) {
        cb(null, true);
    } else {
        cb("Please upload only CSV files.", false);
    }
};

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/resources/static/assets/uploads/");
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, `${Date.now()}-Warren-${file.originalname}`);            // Create copies of each upload for backups
    },
});

var uploadFile = multer({ storage: storage, fileFilter: csvFilter});      // using multer to read the multipart form data of a csv file
module.exports = uploadFile;
