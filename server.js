
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const mongoose = require('mongoose');

const postRouter = require('./routes/posts');

const mongoEndpoint = "mongodb+srv://ashleyok1024:chygwm19911024@db3.4q1j0.mongodb.net/db3?retryWrites=true&w=majority";

// const mongoEndpoint = "mongodb+srv://zhaowen1124970702@gmail.com:banana1234@project3.3q72t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoEndpoint, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

app.use(express.static(path.join(__dirname, 'build')));

app.use(cors({
    origin: '*',
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const userRouter =  require('./controller/user.controller');
app.use('/api/login', userRouter);




app.use('/api/people', postRouter);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(process.env.PORT || 8000, () => {
  console.log('Starting server');
});


