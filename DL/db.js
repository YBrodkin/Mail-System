const mongoose = require('mongoose')

async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI)
        .then(r => console.log("### db - CONNECTION ###"))
    }
    catch (err){
        console.log(err);
        // console.log("******************** i am here **********************");
    }
}

module.exports = {connect}
