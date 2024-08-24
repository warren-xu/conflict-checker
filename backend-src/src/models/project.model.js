module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("project", {
        name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
    });

    return Project;
};