import swaggerJsdoc from "swagger-jsdoc";
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
        title: "API REST - MI_PROYECTO-301", 
        version: "1.0.0",
        description:"Documetos de API REST con espress , Prisma PostgreSQL",
        contac:{
            email:"1625652@senati.pe"
        }
    },
    servers: [
        {
            url: "http://localhost:3000",
            description:"servidor de desarollador"
        }
    ],
  },
  apis: ["./routes/*.js"],
};
export const swaggerSpec = swaggerJsdoc(swaggerOptions);
