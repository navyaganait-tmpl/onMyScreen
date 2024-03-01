require("dotenv/config")
 
const {
  DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, DB_URI,DB_SSL} = process.env;
 
const development = {
  dialect: "postgres",
  timezone: "+5:30",
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  port: Number(DB_PORT),
  ssl: DB_SSL,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
//   db_uri:DB_URI,
  // logging: LOGGING,
  // db_uri: DB_URI 
};
 
module.exports = {development}
 