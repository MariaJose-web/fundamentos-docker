import express from "express";

const app = express();
const PORT = 3000; 

app.get("/", (req, res) => {
 res.send({mensaje:"Hola desde Docker"});
});

app.listen(PORT, () => {
 console.log(`Servidor iniciado: ${PORT} `);
});