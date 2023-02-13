// const mongoose = require('mongoose');

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/userDetails")
// .then(()=>{
//     console.log("Connected to MongoDB");
// })
// .catch((err)=>{
//     console.log(err);
//     console.log("Connection Failed");
// })

// const userDetails = new mongoose.Schema ({
//     username: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// })

// const collection = new mongoose.model("collection1", userDetails);

// module.exports = collection;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    
});

const User = mongoose.model('User', userSchema);
