import express from "express";
import * as url from "url";
import hbs from "hbs";
import env from "dotenv/config";

const app = express();
const port = process.env.PORT;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

//PROYECTO CON HANDLEBARS (ALTERNATIVA A REACT, VUE, ANGULAR que usa MVC)
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//MIDDLEWARE - Servir contenido estático
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Giancarlo Aguilar",
    titulo: "Curso de NodeJS",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Giancarlo Aguilar",
    titulo: "Curso de NodeJS",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Giancarlo Aguilar",
    titulo: "Curso de NodeJS",
  });
});

// app.get("/index", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/notfoundpage.html");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
