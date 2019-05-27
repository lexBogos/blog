// eslint-disable-next-line node/no-unpublished-require
const express = require('express');
// eslint-disable-next-line node/no-unpublished-require
const bodyParser = require('body-parser');
const app = express();

const Post = require('./models/post');

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    Post.find({}).then(posts => {
        res.render('index', {
            posts: posts
        });
    })
});
// res.render('index', {arr: arr}));

app.get('/create', (req, res) => res.render('create'));
app.post('/create', (req, res) => {
    const {title, body} = req.body;

    Post.create({
        title: title,
        body: body
    }).then(global.console.log(Post.id))
    res.redirect('/')
    global.console.log(req.body);
});

module.exports = app;