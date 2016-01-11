var models=require('./models');

exports.findAll = function(cb){
    new models.Skill().fetchAll().then(function(skills){
        cb(skills.toJSON());
    });
};