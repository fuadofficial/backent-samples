const express = require('express');
const upload = require('../middlewares/fileUpload');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "public/images/upload_files-1724631066139-772970639.jpg"
    });
});

router.post("/upload", upload.single('upload_files'), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    res.json({
        message: "Photo and text are uploaded",
    });
});

module.exports = router;
