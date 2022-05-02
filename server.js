// Add dependencies
const express = require('express');
const mongoose = require('mongoose');
const uri = 'mongodb+srv://tez28:ITezIMarine2@cluster0.yahef.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const app = express();
const PORT = process.eventNames.PORT || 3001;
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(uri);
require(`dotenv`).config();
// Add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// mongoose connection
mongoose.connect(process.env.MONGODB_URI || uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// logs mongo queries
mongoose.set('debug', true);

//port listen and confirmation
app.listen(PORT, () => console.log(`🌍 Connected on localhost: ${PORT}`));