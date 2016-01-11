var bcrypt = require('bcrypt-nodejs');
var models = require('./models');

exports.findByName = function (username, cb) {
    new models.LoginUser({username: username}).fetch({
        withRelated:['company','jobseeker.skill_rel.skill','jobseeker.jobseeker_post.jobpost.post_rel.skill']
    }).then(function (user) {
        cb(null, user.toJSON());
    });
};

exports.findById = function (id, cb) {
    new models.LoginUser({id: id}).fetch(
        {withRelated:['company','jobseeker.skill_rel.skill','jobseeker.jobseeker_post.jobpost.post_rel.skill']
        }).then(function (user) {
        cb(null, user.toJSON());
    });
};

exports.createCompanyUser = function (user) {
    new models.Company().save().then(function (company) {
        new models.LoginUser({
            username: user.username,
            password: bcrypt.hashSync(user.password),
            company_id: parseInt(company.id),
            role: 'company'
        }).save();
    });
};

exports.createJobSeekerUser = function (user) {
    new models.JobSeeker().save().then(function (job_seeker) {
        new models.LoginUser({
            username: user.username,
            password: bcrypt.hashSync(user.password),
            jobseeker_id: parseInt(job_seeker.id),
            role: 'jobseeker'
        }).save();
    });
};

exports.isExist = function (username,cb) {
    new models.LoginUser({username: username}).fetch().then(function (user) {
        cb(user===null);
    });
};