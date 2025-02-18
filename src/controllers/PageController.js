export const home = (req, res) => {
  res.render("home", {
    title: "Dino are cool",
    content: "Dino dino dino dino dino",
  });
};

export const about = (req, res) => {
  res.render("default", {
    title: "Abolut us",
    content: "Dino dino dino dino dino",
  });
};

export const contact = (req, res) => {
    res.render("default", {
      title: "Contact us",
      content: "Dino dino dino dino dino",
    });
};

export const privacy = (req, res) => {
    res.render("default", {
      title: "Privacy",
      content: "Dino dino dino dino dino",
    });
};
