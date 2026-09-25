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

app.get("/Energi", (req, res) => {
    res.render("Energi")
})


app.get("/Fremtid", (req, res) => {
    res.render("Fremtid")
})

app.get("/Press", (req, res) => {
    res.render("Press")
})

app.get("/Relasjoner", (req, res) => {
    res.render("Relasjoner")
})

app.get("/Trivsel", (req, res) => {
    res.render("Trivsel")
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

