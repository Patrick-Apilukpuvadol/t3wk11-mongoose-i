const mongoose = require('mongoose');


/**
 * Connect or create & connect to a database.
 * @date 10/31/2023 - 8:20:07 PM
 * @author BigfootDS
 *
 * @async 
 * @returns
 */
async function databaseConnect(){
    try {
        // DB Connection can take some time, eg. if DB is in the cloud
        await mongoose.connect('mongodb+srv://magicsheepi983:<Thamonwan144579>@cluster0.drtfpaq.mongodb.net/?retryWrites=true&w=majority');
        console.log("Database connected successfully");
    } catch (error) {
        console.warn(`databaseConnect failed to connect to DB:\n${JSON.stringify(error)}`);
    }
}

module.exports = {
    databaseConnect
}