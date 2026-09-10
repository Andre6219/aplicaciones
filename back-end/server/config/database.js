//require es para importar librerias o archivos 
require('dotenv').config(); //para cargar las variables de entorno desde .env
const { Sequelize } = require('sequelize');
 
console.log('--- PRUEBA DE VARIABLES ---');
console.log('Usuario:', process.env.DB_USER);
console.log('Password:', process.env.DB_PASSWORD);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
String(process.env.DB_PASSWORD || ''),
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
  }
);
 
module.exports = sequelize;
