import express from 'express';
import { createProduct, getProducts, deleteProduct } from '../controllers/productControllers.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtiene la lista de productos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de productos obtenida correctamente
 *       500:
 *         description: Error del servidor
 */
router.get('/', getProducts);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Crea un nuevo producto
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Laptop Gamer"
 *               description:
 *                 type: string
 *                 example: "Laptop con RTX 4060 y 16GB RAM"
 *               price:
 *                 type: number
 *                 example: 4500
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *       500:
 *         description: Error del servidor al crear producto
 */
router.post('/', createProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Elimina un producto por su ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto a eliminar
 *     responses:
 *       200:
 *         description: Producto eliminado correctamente
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error del servidor al eliminar producto
 */
router.delete('/:id', deleteProduct);

export default router;
