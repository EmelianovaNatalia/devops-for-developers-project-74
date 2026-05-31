module.exports = {
  username: 'postgres',
  password: 'postgres',
  database: 'test_db',
  host: 'db',
  port: 5432,
  dialect: 'postgres',
  logging: false,
  migrationStorageTableName: 'SequelizeMeta',
  seederStorage: 'sequelize',
  seederStorageTableName: 'SequelizeData'
};
