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

app.get("/deprisjon", (req, res) => {
    res.render("deprisjon")
})


//<<<<<<< HEAD
//=======
// Refresh browser after Nodemon restarts the server
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

//>>>>>>> 4272b590783d61624f034c6c37a0bd9efb63dd4e
app.listen(4000,() => {
    console.log("http://localhost:4000")
});

