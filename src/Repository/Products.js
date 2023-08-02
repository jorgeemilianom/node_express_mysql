import DB from "../DB/MySQL.js";

export class ProductsRepository {
    async getAll() {
        try {
            const [result] = await DB.query("SELECT * FROM Products");
            return result[0];
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            throw error; // Re-lanzar el error para que el controlador lo maneje
        }
    }

    async getById(id) {
        try {
            const [result] = await DB.query(`SELECT * FROM Products WHERE id = ${id}`);
            return result[0];
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            throw error; // Re-lanzar el error para que el controlador lo maneje
        }
    }
}
