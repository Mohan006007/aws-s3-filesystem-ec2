const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("🚀 S3 Files System Working!");
});

// Write file to S3 mount
app.get("/write", (req, res) => {
    fs.writeFileSync("/mnt/s3files/hello.txt", "Hello from Node App");
    res.send("File written to S3 Files!");
});

// Read file from S3 mount
app.get("/read", (req, res) => {
    const data = fs.readFileSync("/mnt/s3files/hello.txt", "utf-8");
    res.send(data);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
