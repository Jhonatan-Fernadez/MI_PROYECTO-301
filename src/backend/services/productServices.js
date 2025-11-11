const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createProduct = (data) => {
  return prisma.product.create({ data });
};

const getProducts = () => {
  return prisma.product.findMany();
};

const deleteProduct = async (id) => {
  return prisma.product.delete({
    where: { id: Number(id) }, // Asegúrate de que el ID sea número
  });
};

module.exports = {
  createProduct,
  getProducts,
};
