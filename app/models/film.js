module.exports = (sequelize, Sequelize) => {
    const Film = sequelize.define("Film", {
        id: { 
            type: Sequelize.INTEGER, 
            primaryKey: true,
            allowNull: false
        },
        title: { 
            type: Sequelize.STRING(100), 
            allowNull: false 
        },
        year: { 
            type: Sequelize.INTEGER, 
            allowNull: false, 
            validate: { 
                min: 1900, 
                max: 2100 
            } 
        },
        director: { 
            type: Sequelize.STRING(100), 
            allowNull: false 
        },
        length: { 
            type: Sequelize.STRING(100), 
            allowNull: false 
        },
        rating: { 
            type: Sequelize.INTEGER, 
            allowNull: false, 
            validate: { 
                min: 0, 
                max: 10 
            } 
        },
    });
  
    return Film;
  };