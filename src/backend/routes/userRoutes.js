import express from 'express';
import { userController } from '../controllers/userController.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         email:
 *           type: string
 *           example: jhonatanfer@gmail.com
 *         name:
 *           type: string
 *           example: jhonatan
 */
/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: Obtener las rutas de los usuarios
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: ok
 */
/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: Crear nuevo usuario
 *    tags: [Users]
 *    requestBody:
 *      requered: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: luism@gmail.com
 *              name:
 *                type: string
 *                example: luis
 *    responses:
 *      201:
 *        description: usuario creado correctamente
 *        content:
 *          application/json:
 *            schama: '#/components/schama/User'
 *      400:
 *        description: Datos invalidos
 *      500:
 *        description: Error del servidor
 */
//Rutas par llamar al usuario
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
//Metodo para eliminar DELETE
//Metodo para actualizar PUT
//Metodo para modificar PPATCH

export default router;
