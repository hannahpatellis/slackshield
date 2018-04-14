module.exports = (sequelize, DataTypes) => {
    var Messages = sequelize.define("Messages", {
        message: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        channel: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {charset: 'utf8mb4'})
    return Messages
}