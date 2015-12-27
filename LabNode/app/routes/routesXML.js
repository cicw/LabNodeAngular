var path = require('path');
var fs = require("fs");

module.exports = function(app) {

    /*
    */
    app.get('/xml/listUsers', function (req, res) {
        var users = path.join(__dirname, '../../data/users.json');
        fs.readFile( users, 'utf8', function (err, data) {
            console.log('listUsers');
            res.end( data );
         });
    });

    /*
    */
    app.get('/xml/add', function (req, res) {
        var users = path.join(__dirname, '../../data/users.json');
        var user = {
            "user4" : {
                "name" : "mohit",
                "password" : "password4",
                "profession" : "teacher",
                "id": 4
            }
        };

        fs.readFile( users, 'utf8', function (err, data) {
            data = JSON.parse( data );
            data["user4"] = user["user4"];
            console.log('add');
            res.end( JSON.stringify(data));
        });
    });

    /*
    */
    app.get('/xml/delete', function (req, res) {
        var users = path.join(__dirname, '../../data/users.json');
        var id = 2;

        fs.readFile( users, 'utf8', function (err, data) {
            data = JSON.parse( data );
            delete data["user" + id];
            console.log('delete');
            res.end( JSON.stringify(data));
        });
    });

    /*
    */
    app.get('/xml/:id', function (req, res) {
        var users = path.join(__dirname, '../../data/users.json');
        fs.readFile( users, 'utf8', function (err, data) {
            users = JSON.parse( data );
            var user = users["user" + req.params.id]
            console.log('getUser');
            res.end( JSON.stringify(user));
        });
    });


};