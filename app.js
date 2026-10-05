const express = require("express");

const app = express();
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

app.get("/kilder", (req, res) => {
    res.render("kilder")
})



app.listen(6002,() => {
    console.log("http://localhost:6002")
});

