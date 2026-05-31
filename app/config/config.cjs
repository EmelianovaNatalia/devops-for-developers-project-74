module.exports = {
  development: {
    dialect: 'sqlite',
    storage: '.sqlite',
    logging: false
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false
  },
  production: {
    dialect: 'sqlite',
    storage: '.sqlite',
    logging: false
  }
};