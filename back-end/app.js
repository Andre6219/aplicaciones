const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración CORS básica
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-Auth-Token, Origin, X-Requested-With"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.get("/",(req,res) =>{
    res.status(200).send({
        message: "Bienvenidos a mi Servidor NodeJS"
    });
});
 
const articulosRoutes = require('./server/routes/articulos.routes');
app.use('/api/articulos', articulosRoutes);

module.exports=app;