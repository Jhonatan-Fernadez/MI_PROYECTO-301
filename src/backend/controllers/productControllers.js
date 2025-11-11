// controllers/productControllers.js
import { PrismaClient } from "@prisma/client";
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
    console.error("Error al crear producto:", error);
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los productos
export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ error: error.message });
  }
};

// Eliminar producto por ID
export const deleteProduct = async (req, res) => {
  const { id } = req.params; // Obtenemos el ID desde la URL
  try {
    await prisma.product.delete({
      where: { id: Number(id) }, // Asegúrate que sea número
    });
    res.status(200).json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    if (error.code === "P2025") {
      // Prisma lanza P2025 si no encuentra el producto
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    console.error("Error al eliminar producto:", error);
    res.status(500).json({ error: error.message });
  }
};
