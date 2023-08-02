import DB from "../DB/MySQL.js";

export class ProductsRepository {
    async getAll() {
        try {
            const [result] = await DB.query("SELECT * FROM Products");
            return result;
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            throw error; // Re-lanzar el error para que el controlador lo maneje
        }
    }

    async getById(id) {
        try {
            const [result] = await DB.query("SELECT * FROM Products WHERE id = ?", [id]);
            return result[0];
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            throw error; // Re-lanzar el error para que el controlador lo maneje
        }
    }

    async addProduct(name) {
        try {
            const [result] = await DB.query("INSERT INTO Products (name) VALUES (?)", [name]);
            return result;
        } catch (error) {
            throw error; 
        }
    }

    async updateProduct(name, id) {
        try {
            const [result] = await DB.query("UPDATE Products SET name = ? WHERE id = ?", [name, id]);
            return result;
        } catch (error) {
            throw error; 
        }
    }

    async deleteProduct(id) {
        try {
            const [result] = await DB.query("DELETE FROM Products WHERE id = ?", [id]);
            return result;
        } catch (error) {
            throw error; 
        }
    }
}
