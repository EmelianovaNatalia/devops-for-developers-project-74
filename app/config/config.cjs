require('dotenv').config();

const isCI = process.env.CI === 'true' || process.env.NODE_ENV === 'ci';

if (isCI || process.env.USE_SQLITE === 'true') {
  module.exports = {
    test: {
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false
    },
    development: {
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false
    }
  };
} else {
  module.exports = {
    development: {
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'postgres',
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || 5432,
      dialect: 'postgres',
      logging: false
    },
    test: {
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'test_db',
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || 5432,
      dialect: 'postgres',
      logging: false
    },
    production: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'postgres',
      logging: false
    }
  };
}
