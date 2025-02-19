import { dinosaurs } from "../data/data.js";
import { navItems } from "../data/data.js";

export const index = (req, res) => {
  res.render("pages/index", {
    title: "Dinosaurs",
    dinosaurs,
    navItems,
  });
};

export const detail = (req, res) => {
  const token = req.params['slug'];
  res.render("pages/detail", {
    dinosaurs,
    token,
    navItems
  });
};
