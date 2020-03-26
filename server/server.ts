const express = require('express');
const jsonServer = require('json-server');
const chokidar = require('chokidar');
const cors = require('cors');

const fileName = process.argv[2] || "./data.ts";
const port = process.argv[3] || 3500;
let router = undefined;
const app = express();
const createServer = () => {
    delete require.cache[require.resolve(fileName)];
    setTimeout(() => {
        router = jsonServer.router(fileName.endsWith(".ts") ? require(fileName).default() : fileName)
    }, 100);
};

app.use(cors());
app.use(jsonServer.bodyParser);
app.use("/api", (req, resp, next) => router(req, resp, next));

chokidar.watch(fileName).on("change", () => {
   console.log("Reloading web service data...");
   createServer();
   console.log("Reloading web service data complete.");
});

app.listen(port, () => {
   console.log(`Web server is running port ${port}`);
});

createServer();