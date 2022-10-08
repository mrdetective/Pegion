const router = require("express").Router();
const multer = require("multer");

// let storage = multer.diskStorage({
//     destination:
// })

require.post("/", (req, res) => {
    // Validate Request
    if (!req.file) {
        return res.json({ error: "All fields are required" });
    }

    // Store File

    // Store into database

    // Response -> link
});

module.exports = router;