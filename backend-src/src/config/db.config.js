module.exports = {  // first five parameters are for mysql connection
    HOST: "localhost",
    USER: "root",
    PASSWORD: "8~>Uu$`S5*n9",
    DB: "testdb",
    dialect: "mysql",
    pool: {     // used for sequelize connection pool configuration
        max: 5,     // max number of connections in pool
        min: 0,     // min number of connections
        acquire: 30000,  // maximum time in milliseconds that pool will try to connect before throwing an error
        idle: 10000     // max time in milliseconds that connection can be idle before being released
    }
};