'use strict';
var path = require('path'),
    mongoose = require('mongoose'),
    express = require('express'),
    _ = require('lodash'),
    fs = require('fs'),
    path = require('path'),
    bodyParser = require('body-parser'),
    multipart = require('connect-multiparty'),
    multipartyMiddleware = multipart();

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/blog');

var blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    }
});

var Blog = mongoose.model('Blog', blogSchema),
    app = express();
//configs


app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('connect-livereload')());
// View
app.get('/', function(req, res) {
    res.sendFile('public/index.html', {
        root: __dirname
    });
});
/* 
//Mongoose Methods
var blog = new Blog({author: req.body.author});
jshint -W098 
    blog.save()
    Blog.find()
    Blog.findOne()
    Blog.findOneAndUpdate() 
    Blog.findOneAndRemove()
//Express Methods
    res.sendStatus(400);
    res.status(201).send(blog);
    res.json()
    res.jsonp()
    res.location()
//express route Data
    req.body
    req.params
    req.query

// Create
app.post('/blogs', function(req, res) {})
// Retrieve
app.get('/blogs', function(req, res) {});
//Read
app.get('/blogs/:id', function(req, res) {});
// Update
app.put('/blogs/:id', function(req, res) {});
// Delete
app.delete('/blogs/:id', function(req, res) {});
*/
app.listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});