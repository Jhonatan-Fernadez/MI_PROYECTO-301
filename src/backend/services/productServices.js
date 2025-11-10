const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createProduct = (data) => {
  return prisma.product.create({ data });
};

const getProducts = () => {
  return prisma.product.findMany();
};

module.exports = {
  createProduct,
  getProducts,
};
