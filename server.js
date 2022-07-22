const express = require('express');
const app = express(); 

app.use(express.json());


//Import Routes
const articleRoute = require('./routes/articles');
const categoriesRoute = require('./routes/categories');
const commentsRoute = require('./routes/comments');
const usersRoute = require('./routes/users');

app.use('/articles', articleRoute); 
app.use('/categories', categoriesRoute);
app.use('/comments', commentsRoute);
app.use('/users', usersRoute);

app.get('/', (req, res) => {
    res.send('We are on home');
});

module.exports = app;

app.listen(4000);

