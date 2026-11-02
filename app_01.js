const express = require("express");
const path = require("path");

const app = express();
const userRouter = require("./routers/userRouters");

const connection= require(`./database_01/connection`)

// Middleware para recibir JSON
app.use(express.json());

// Configuración de EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Ruta principal
app.get("/", (req, res) => {
    res.render("index", {
        title: "Mi página web",
        showMessage: true,
        message: "¡Bienvenido a mi página web!",
        items: ["1", "2", "3", "4"]
    });
});

// Rutas de usuarios
app.use("/user", userRouter);

// Iniciar servidor
app.listen(3000, () => {
    console.log("Aplicación con Express ejecutándose en el puerto 3000");
});
