const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('accounts', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

//test connect
const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connection

