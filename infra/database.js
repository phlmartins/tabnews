import { Client } from "pg";

async function query(queryObjetc) {
  const client = new Client({
    host: process.env.POSTGRESS_HOST,
    port: process.env.POSTGRESS_PORT,
    user: process.env.POSTGRESS_USER,
    database: process.env.POSTGRESS_DB,
    password: process.env.POSTGRES_PA,
  });
  await client.connect();
  const result = await client.query(queryObjetc);
  await client.end();
  return result;
}
export default {
  query: query,
};
