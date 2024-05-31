import { Sequelize } from "sequelize";
import pg from 'pg';

const host = 'postgre-proxy.proxy-c9c82gi4m7lm.us-east-1.rds.amazonaws.com';
const user = 'postgres';
const password = 'password';
const database = 'postgres';

const sequelize = new Sequelize(database, user, password, {
    host: host,
    port: 5432,
    dialect: 'postgres', // Cambia 'mysql' a 'postgres'
    dialectModule: pg,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
});

export default sequelize;