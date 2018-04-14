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
        },
        deleted: DataTypes.BOOLEAN,
        edited: DataTypes.BOOLEAN,
        original: DataTypes.STRING,
        threadTime: DataTypes.STRING,
        threadParent: DataTypes.STRING
    }, {charset: 'utf8mb4'})
    return Messages
}