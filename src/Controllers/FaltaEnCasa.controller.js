import { ProductsRepository } from "../Repository/ProductsRepository.js";

export default class FaltaEnCasaController {
    static async getAll(req, res) {
        try {
            const repository = new ProductsRepository();
            const dbRes = await repository.getAll();
            res.status(200).send({
                message: 'Get all products',
                data: dbRes,
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "Error interno del servidor"
            });
        }
    }

    static async getById(req, res) {
        try {
            const id = req.params.id;
            const repository = new ProductsRepository();
            const dbRes = await repository.getById(id);
            res.status(200).send({
                message: 'Get product',
                data: dbRes,
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "Error interno del servidor"
            });
        }
    }

    static test(req, res) {
        res.status(200).send({
            data: "test",
            message: "test"
        });
    }

    static async addProduct(req, res) {
        try {
            const repository = new ProductsRepository();
            const dbRes = await repository.addProduct(req.body.name);
            res.status(200).send({
                message: 'Add product successfully',
                data: dbRes,
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "Error interno del servidor"
            });
        }
    }

    static async updateProduct(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const repository = new ProductsRepository();
            const dbRes = await repository.updateProduct(name, id);
            res.status(200).send({
                message: 'product update successfully',
                data: dbRes,
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "Error interno del servidor"
            });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            const repository = new ProductsRepository();
            const dbRes = await repository.deleteProduct(id);
            res.status(200).send({
                message: 'product deleted',
                data: dbRes,
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "Error interno del servidor"
            });
        }
    }
}
