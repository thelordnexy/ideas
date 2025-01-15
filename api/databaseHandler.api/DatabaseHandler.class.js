import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

export default function DatabaseHandler {
  function handleDbConnection() {
    return mysql
      .createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      })
      .promise();
  }
  return async function handleDbQueries() {
    try {
      const data = await this.handleDbConnection().query(`SELECT * FROM ideas`);
      return data;
    } catch (err) {

    }
  }
}

// const testDb = new DatabaseHandler();
