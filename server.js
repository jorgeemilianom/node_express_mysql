import express from "express";
import cors from "cors";
import Products from "./src/Routes/Products.routes.js";
import Index from "./src/Routes/Index.routes.js";

console.clear();
const app = express();
const port = 3010;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded

// Usa el enrutador de FaltaEnCasa
app.use(Index);
app.use(Products);


app.listen(port, () => {  // Inicia el servidor
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
