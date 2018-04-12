var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Log = sequelize.import('../models/log');

//create a workout log instance
router.post('/', function(req, res) {
    var description = req.body.log.description;
    var result = req.body.log.result;
    var owner = req.user.id;
    var def = req.body.log.def;

    Log
    .create({
        description: description,
        result: result,
        owner: owner,
        def: def
    })
    .then(
        function createSuccess(createLog) {
            res.json(createLog);
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
});


// get all logs for user
router.get('/', function(req, res) {
        var userid = req.user.id;
    
        Log
            .findAll({
                where: { owner: userid }
            })
            .then(
                function findAllSuccess(data) {
                    res.json(data);
                },
                function findAllError(err) {
                    res.send(500, err.message);
                }
            );
    });

//get single log for a user
router.get('/:id', function(req, res) {
    var data = req.params.id;
    var userid = req.user.id;
    
    Log
        .findOne({
            where: { id: data, owner: userid }
        }).then(
            function findOneSuccess(data) {
                console.log(data)
                res.json(data);
            },
            function findOneError(err) {
                res.send(500, err.message);
            }
        );
});
 

//update an item
router.put('/:id', function(req, res) {
        var data = req.params.id; 
        var log = req.body.log.result;
        var description = req.body.log.description;
        var def = req.body.log.def;

        Log
            .update({ 
                result: log,
                description: description,
                def: def
            },
            {where: {id:data}, returning: true, plain: true} 
            ).then(
                function updateSuccess(putLog) { 

                    var updatedLog = putLog[1];
                    res.json(updatedLog);            
                },
                function updateError(err){ 
                    res.send(500, err.message);
                }
            )
    });


// delete an item
router.delete('/:id', function(req, res) {
        var userid = req.user.id; 
        var data = req.params.id; 
    
        Log
            .destroy({ 
                where: { id: data, owner: userid } 
            }).then(
                function deleteLogSuccess(data){ 
                    res.send("You removed a log");
                },
                function deleteLogError(err){ 
                    res.send(500, err.message);
                }
            );
    });


module.exports = router;