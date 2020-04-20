const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'tests.db'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
   console.error('Unable to connect to the database:', err);
  });

const { Model } = Sequelize;
class Tests extends Model { }
Tests.init(
  {
    sno: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  },
  {
    sequelize,
    modelName: 'tests',
    timestamps: false,
    freezeTableName: true
  }
);

sequelize.sync();

module.exports = Tests;
