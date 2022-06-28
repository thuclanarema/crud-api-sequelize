module.exports = {
  host: "localhost",
  user: "postgres",
  password: "123456$",
  db: "sample_db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
