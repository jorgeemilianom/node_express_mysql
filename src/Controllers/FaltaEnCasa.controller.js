import { ProductsRepository } from "../Repository/Products.js";
import Helper from "../Services/Helper.js";


export default class FaltaEnCasaController {

    static getAll(req, res) {
        try {
            const Repository = new ProductsRepository();
            Repository.getAll()
                .then(dbRes => {
                    res.status(200).send({
                        message: 'Get all products',
                        data: dbRes,
                    }); // Enviar solo los datos de la tabla
                })
                .catch(err => {
                    // Manejo de errores aquí si es necesario
                    console.error(err);
                    res.status(500).send({
                        message: "Error interno del servidor"
                    });
                });
        } catch (error) {
            console.log(error);
        }

    }

    static getById(req, res) {
        const id = req.params.id;
        const Repository = new ProductsRepository();
        Repository.getById(id)
            .then(dbRes => {
                res.status(200).send({
                    message: 'Get product',
                    data: dbRes,
                }); // Enviar solo los datos de la tabla
            })
            .catch(err => {
                // Manejo de errores aquí si es necesario
                console.error(err);
                res.status(500).send({
                    message: "Error interno del servidor"
                });
            });
    }

    static test(req, res) {
        res.status(200).send({
            data: "test",
            message: "test"
        });
    }

    static addProduct(req, res) {
        try {
            const Repository = new ProductsRepository();
            Repository.addProduct(req.body.name)
                .then(dbRes => {
                    res.status(200).send({
                        message: 'Add product successfully',
                        data: dbRes,
                    });
                })
                .catch(err => {
                    console.error(err);
                    res.status(500).send({
                        message: "Error interno del servidor"
                    });
                });
        } catch (error) {
            // Manejo de errores aquí si es necesario
            console.error(err);
            res.status(500).send({
                message: "Error interno del servidor"
            });
        }
    }
}
