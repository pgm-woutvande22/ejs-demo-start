import { person } from "../data/data.js";

export const home = (req, res) => {
  res.render("pages/home", {
    title: "Dino are cool",
    content: "Dino dino dino dino dino",
  });
};

export const about = (req, res) => {
  res.render("pages/default", {
    title: "About us",
    content: "Dino dino dino dino dino",
    team: ["T-rex", "Velcro", "Dingus", "<strong>Dinkel</strong>"],
  });
};

export const contact = (req, res) => {
  res.render("pages/contact", person);
};

export const privacy = (req, res) => {
  res.render("pages/default", {
    title: "Privacy",
    content: "Dino dino dino dino dino",
    team: false,
  });
};
