require("dotenv").config();

// module.exports = {
//     url: "mysql://root:bcd127@localhost:3306/everypets",
//     config: {
//         dialect: "mysql",
//         define: {
//             timestamp: true,
//             underscored: true
//         }
//     }
// }

module.exports = {
  url: process.env.DATABASE_URL || "mysql://root:13128359@everypets.crktwog5xyhr.us-east-1.rds.amazonaws.com:3306/everypets",
  config: {
    dialect: "mysql",
    define: {
      timestamp: true,
      underscored: true,
    }
  }
}


// {
//     "type": "mssql",
//     "host": "192.168.100.8",
//     "port": 49273,
//     "options": {
//        "encrypt": false,
//        "enableArithAbort": false
//     },
//     "username": "matheus.willian",
//     "password": "@mw1q2w3e4r@",
//     "database": "Estagio",
//     "entities": [
//        "src/app/models/*.ts"
//     ],
//     "migrations": [
//        "./src/database/migrations/*.ts"
//     ],
//     "cli": {
//        "migrationsDir": "./src/database/migrations"
//      }
//  }