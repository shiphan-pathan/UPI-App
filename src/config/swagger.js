import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "UPI API",
      version: "1.0.0",
      description: "API documentation for UPI backend",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./src/routes/**/*.js"], 
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;