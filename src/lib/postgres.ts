import { Client } from "pg";

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "devops",
  database: "forecast",
});

export default client;
