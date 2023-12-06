const { Sequelize } = require('sequelize');

require('dotenv').config()

const sequelize = new Sequelize('instagram', 'root', '123456', {
    host: process.env.APP_DB_HOST,
    dialect: 'mysql'
});

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connection