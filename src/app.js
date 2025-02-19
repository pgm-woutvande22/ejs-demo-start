// import statements
import express from "express";
import path from "path";
import expressLayouts from "express-ejs-layouts";
import { home, about, contact, privacy } from "./controllers/PageController.js";
import {index, detail } from "./controllers/DinoController.js";

// create an instance of express
const app = express();

//use express layouyts
app.use(expressLayouts);
//set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.set("layout", "layouts/main");

// serve static files from the public folder
// they can be accessed from the root of the site (e.g. /assets/images/dino_07.png) 🦕
app.use(express.static("public"));

// GET route to serve the index.html file
app.get("/", home);
app.get("/about", about);
app.get("/contact", contact);
app.get("/privacy", privacy);
app.get("/dinosaurs", index);
app.get("/dinosaurs/:slug", detail);

app.get("*", (req, res) => {
  res.status(404).render("errors/404", {
    layout: "layouts/error"
  })
})

// start the server, listen on port defined in .env file
app.listen(process.env.PORT, () => {
  // callback function that is called when the server starts
  console.log(`Application is listening to port ${process.env.PORT}.`);
});