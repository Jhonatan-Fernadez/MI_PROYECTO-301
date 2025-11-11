// controllers/productControllers.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Crear producto
export const createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const product = await prisma.product.create({
      data: { name, description, price },
    });

    res.status(201).json(product);
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los productos
export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: error.message });
  }
};

