const express = require("express");
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const liveReloadServer = livereload.createServer();
liveReloadServer.watch('public'); // Watch frontend directory


const app = express();
app.use(connectLivereload());
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/depresjon", (req, res) => {
    res.render("depresjon")
})


app.get("/rusmiddelavhengihet", (req, res) => {
    res.render("rusmiddelavhengihet")
})

app.get("/angst", (req, res) => {
    res.render("angst")
})

app.get("/familieutfordringer", (req, res) => {
    res.render("familieutfordringer")
})

app.get("/skolemiljø", (req, res) => {
    res.render("skolemiljø")
})



// Refresh browser after Nodemon restarts the server
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.listen(4000,() => {
    console.log("http://localhost:4000")
});

