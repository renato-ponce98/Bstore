const env = {
  database: "bsale_test",
  username: "bsale_test",
  password: "bsale_test",
  host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = env;
