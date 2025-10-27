import express from 'express';
import { registerUser } from '../controllers/emailController.js';

const router = express.Router();
/**
 * @swagger
 * /api/email/register:
 *   post:
 *     summary: Registra usuario y envía correo
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "miguelpi@gmail.com"
 *               name:
 *                 type: string
 *                 example: "miguel"
 *     responses:
 *       201:
 *         description: Email enviado correctamente
 *       500:
 *         description: Error del servidor al enviar email
 */

router.post("/register", registerUser)

export default router;