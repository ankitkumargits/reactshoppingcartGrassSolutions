const mongoose = require('mongoose');

const connectToMongo = ()=> {
    const dbUrl = 'mongodb://127.0.0.1:27017/ReactProjectAPI';
    mongoose.connect(dbUrl, ()=>{
        console.log("Your database connection is established");
    });
}

module.exports = connectToMongo;