const Sequelize = require('sequelize');

const sequelize = new Sequelize('workoutlogproject', 'postgres', 'okinawa96', {
    host: 'localhost', 
    dialect: 'postgres' 
});
        
sequelize.authenticate().then(
    function() { 
        console.log('Connected to workoutlogproject postgres database');
    },
    function(err){ 
        console.log(err);
    }
);

module.exports = sequelize;