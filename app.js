const express = require("express");
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const liveReloadServer = livereload.createServer();
liveReloadServer.watch('public'); // Watch frontend directory


const app = express();
app.use(connectLivereload());
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));// for input
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/energi", (req, res) => {
    res.render("Energi")
})


app.get("/fremtid", (req, res) => {
    res.render("Fremtid")
})

app.get("/press", (req, res) => {
    res.render("Press")
})

app.get("/relasjoner", (req, res) => {
    res.render("Relasjoner")
})

app.get("/trivsel", (req, res) => {
    res.render("Trivsel")
})


app.get("/kontakt", (req, res) => {
    res.render("kontakt")
})

app.get("/sporsmal", (req, res) => {
    res.render("sporsmal")
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

