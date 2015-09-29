# expressMongoStartPoint

Created by ![Green Pioneer](http://greenpioneersolutions.com/img/icons/apple-icon-180x180.png)

## Info
Currently this is just meant as a example to work with starting from the ground up. We have layed out most of the design with you need to fill in the core logic to hook up to the frontend. Please take a look around and enjoy the code courtesy of [Green Pioneer](http://www.greenpioneersolutions.com)

##Commands

Install:
```sh
$ npm install
```

Reporting:
```sh
$ gulp plato
```

Starting Up:
```sh
$ gulp
```
or
```sh
$ node app.js  or npm start
```


##Snippets 
Snippets of some of the core parts of this examples 

How to connect to Mongodb
``` javascript
mongoose.connect('mongodb://localhost/blog');
```

Mongoose Schema:
``` javascript
var blogSchema = mongoose.Schema({
    example: {
        type: String,
        required: true,
        trim: true
    }
});
var Blog = mongoose.model('Blog', blogSchema)
```
Routes
```javascript
app.get('/', function(req, res) {
    res.sendFile('public/index.html', {
        root: __dirname
    });
});
app.post('/blogs', function(req, res) {
})
app.get('/blogs', function(req, res) {
})
app.get('/blogs/:id', function(req, res) {
})
app.put('/blogs/:id', function(req, res) {
})
app.delete('/blogs/:id', function(req, res) {
})
```

Using Mongoose
```javascript
//Mongoose Methods
var blog = new Blog({author: req.body.author});
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

```



#### This is [on GitHub](https://github.com/GreenPioneer/expressMongo)
#### Find us [on GitHub](https://github.com/GreenPioneer)
#### Find us [on Twitter](https://twitter.com/greenpioneerdev)
#### Find us [on Facebook](https://www.facebook.com/Green-Pioneer-Solutions-1023752974341910)
#### Find us [on The Web](http://greenpioneersolutions.com/)