import { person, navItems } from "../data/data.js";

export const home = (req, res) => {
  res.render("pages/home", {
    title: "Dino are cool",
    content: "Dino dino dino dino dino",
    navItems,
  });
};

export const about = (req, res) => {
  res.render("pages/default", {
    title: "About us",
    content: "Dino dino dino dino dino",
    team: ["T-rex", "Velcro", "Dingus", "<strong>Dinkel</strong>"],
    navItems,
  });
};

export const contact = (req, res) => {
  res.render("pages/contact", {
    title: "contact us",
    message: "contact us at sigma",
    person,
    navItems,
  });
};

export const privacy = (req, res) => {
  res.render("pages/default", {
    title: "Privacy",
    content: "Dino dino dino dino dino",
    team: false,
    navItems,
  });
};
