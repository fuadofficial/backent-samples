const express = require('express');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

const upload = multer({ storage });

router.get("/", (req, res) => {
    res.json({
        message: "This is profile page",
    });
});

router.post("/upload", upload.single('upload_file'), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    res.json({
        message: "photo is uploaded",
    });
});

module.exports = router