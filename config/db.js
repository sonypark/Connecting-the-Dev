const mongoose = require('mongoose');
const db = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('MongoDB Connected..')

    } catch (e) {
        console.error(e.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;