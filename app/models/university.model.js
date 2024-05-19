module.exports = (sequelize, dataType) => {
    const University = sequelize.define("university", {
      id: {
        type: dataType.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: dataType.STRING,
        allowNull: false,
      }
    });
  
    return University;
  };