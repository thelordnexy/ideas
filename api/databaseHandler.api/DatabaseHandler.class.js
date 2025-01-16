import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

export default function DatabaseHandler() {
  const connection = mysql
    .createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    })
    .promise();
  return {
    async getIdea(id) {
      const idea = await connection.query(
        'SELECT * FROM ideas WHERE `id` = ?',
        [id]
      );

      return idea;
    },
    async getIdeas() {
      const ideas = await connection.query('SELECT * FROM ideas');

      return ideas;
    },
  };
}

// try {
// const data = await handleDbConnection().query(`SELECT * FROM ideas`);
// return data;
// } catch (err) {
// throw new Error(`Error querying database: ${err}`);
// }
