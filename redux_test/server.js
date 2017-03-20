//server.js
'use strict';
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Data = require('./model/data');
var UserData = require('./model/userData');
//and create our instances
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Connect to database
mongoose.connect('mongodb://127.0.0.1:27017/mydb');
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
//multer for image upload
var multer  = require('multer');
var filename;
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/Users/lcom81_two/react_test1/public/images/')
    },
    filename: function (req, file, cb) {
        filename=Date.now()+'.jpg';
        cb(null, filename );

    }
});
var upload = multer({ storage: storage });

   app.post( '/insertData',upload.single('file'),function(req,res){
        //console.log(req.body);
        var data = new Data();
        
        data.firstName = req.body.firstName;
        data.lastName = req.body.lastName;
        data.age = req.body.age;
        data.profile=filename;
        data.save(function (err) {
            if (err)
                res.send(err);
            res.json({message: 'Author Data successfully added!'});
        });
        //res.send("image uploaded");
    });
    app.get('/getData',function (req, res) {
        //looks at our data Schema
        var id = req.query.id;
        var t = null;
        //console.log("id="+id);
        if (id) {
            Data.find({_id: id}, function (err, authordata) {
                if (err)
                    res.send(err);
                res.json(authordata)
            });
        } else {
            Data.find({}, function (err, authordata) {
                if (err)
                    res.send(err);
                res.json(authordata)
            });
        }
    });
    //post new data to the database
    
    app.put('/updateData',upload.single('file'),function (req, res) {
        console.log(req.body);
        if(req.body.file == null ){
            Data.findOneAndUpdate({"_id": req.query.id}, {
            $set: {
                "firstName": req.body.firstName,
                "lastName": req.body.lastName,
                "age": req.body.age,
                "profile": filename
            }
        }, {new: true}, function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send("Author data updated");
            }
        })
        }else{
            Data.findOneAndUpdate({"_id": req.query.id}, {
            $set: {
                "firstName": req.body.firstName,
                "lastName": req.body.lastName,
                "age": req.body.age
            }
        }, {new: true}, function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send("Author data updated");
            }
        })
        }
        

    });
    app.delete('/deleteData',function (req, res) {
        Data.remove({"_id": req.query.id}, function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send("Author data deleted");
            }


        })

    });
    app.post('/userRegister',function(req,res){
        console.log(req.body)
        UserData.find({"EmailId":req.body.umail},function(err,data){
            if(err){
                res.send(err);
                return;
            }
            if(data.length >0){
                res.send("Email Id Exist");
                return;
            }else{
                var udata=new UserData();
                udata.UserName=req.body.uname;
                udata.EmailId=req.body.umail;
                udata.Password=req.body.upass;
                console.log(udata);
                udata.save(function (err) {
                    if (err)
                        res.send(err);
                    res.send('User registered successfully!');
                });
            }
        })
    });
    app.post('/userLogin',function(req,res){
        console.log(req.body)
        UserData.find({"EmailId":req.body.mail,"Password":req.body.pass},function(err,data){
            if(err){
                res.send(err);
                return;
            }
            if(data.length >0){
                res.send({check:true});
                
            }else{
                res.send({check:false});
            }
        })
    })
var port = process.env.API_PORT || 3001;
//starts the server and listens for requests
app.listen(port, function () {
    console.log('api running on port :' + port);
});
