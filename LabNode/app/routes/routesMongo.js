var user = require('../../data/users');

function getUsers(res){
    user.find(function(err, users) {
       if (err)
            res.send(err)

       res.json(users);
    });
};

module.exports = function(app) {

    app.get('/mongo/listUsers', function(req, res) {
        getUsers(res);
    });

    app.get('/mongo/add', function(req, res) {
        user.create({
            name : 'Name test',
            password : '123456',
            profession : 'prof test',
            id : '001'
        }, function(err) {
            if (err)
                res.send(err);
            getUsers(res);
        });

    });

};