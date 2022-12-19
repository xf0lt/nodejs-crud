const {Sequelize, DataTypes} = require('sequelize')

const User = Sequelize.define("User", {
   title: {
     type: DataTypes.STRING,
     allowNull: false
   },
   author: {
     type: DataTypes.STRING,
     allowNull: false
   },
   release_date: {
     type: DataTypes.DATEONLY,
   },
   subject: {
     type: DataTypes.INTEGER,
   }
});

User.autheticate().then(() => {
   console.log('terkoneksi');
}).catch((err) => {
   console.err('gak konek', err);
});

module.exports = User








// const sequelize = new Sequelize('mysql::memory:');
// const sequelize = new Sequelize('mysql://127.0.0.1:1000/nodebase');

// module.exports = (sequelize) => {
//    const User = sequelize.define("User", {
//          username: {
//             type: DataTypes.STRING,
//             unique: true,
//             lowercase: true
//          },
//          email: {
//            type: DataTypes.STRING
//          },
//          password: {
//             type: DataTypes.STRING
//          }
//        });
    

// module.exports = User
// module.exports = db('User', sequelize)






















// const User = db.define( "User",
//    {
//       username: {type: sequelize.STRING},
//       email: {type: sequelize.STRING},
//       password: {type: sequelize.STRING},
//    },
//    {
//       freezeTableName: true
//    }
// );


// const User = db.sequelize.define("User", {
//    username: {
//       type: sequelize.STRING
//    },
//    email: {
//       type: sequelize.STRING
//    },
//    password: {
//       type: sequelize.STRING
//    }
// })
// module.exports = User
