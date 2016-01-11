var models = require('./models');

exports.createJobPost = function (new_post, tags) {
    console.log(new_post, tags);
    new models.JobPost(new_post).save()
        .then(function (post) {
            tags.map(id=> {
                var jobpost_id = post.toJSON().id;
                var skill_id = parseInt(id);
                new models.JobPostSkillRel({jobpost_id, skill_id}).save();
            });
        });
};

exports.findByCompany = function (company_id, cb) {
    new models.JobPost({company_id}).fetchAll({withRelated: ['post_rel.skill']}).then(p=>cb(p));
};

exports.findByUser = function (skills, cb) {
    var groups = models.JobPostSkillRels.forge();
    groups.on('fetching', function (collection, columns, options) {
        options.query.whereIn('skill_id', skills);
    });
    groups.fetch({withRelated:['jobpost.post_rel.skill']})
        .then(function (groups) {
            cb(groups)
        });
};

