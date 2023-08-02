import express from "express";
import FaltaEnCasaController from "../Controllers/FaltaEnCasa.controller.js";

// Crea el enrutador de Express
const router = express.Router();

// Define las rutas utilizando el enrutador
router.get("/Products", FaltaEnCasaController.getAll);
router.get("/Products/:id", FaltaEnCasaController.getById);

router.post("/Products", FaltaEnCasaController.addProduct);


// Exporta el enrutador
export default router;




  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", tutorials.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // // Delete all Tutorials
  // router.delete("/", tutorials.deleteAll);

  // app.use('/api/tutorials', router);