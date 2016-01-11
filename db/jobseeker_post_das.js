var models = require('./models');

exports.findApplied=(jobpost_id,cb)=>{
    models.JobSeekerPost.where({jobpost_id:parseInt(jobpost_id)})
        .fetchAll({withRelated:['jobseeker.skill_rel.skill']})
        .then(res=>cb(res));
};

exports.findAppliedByUser=(job_seeker_id,cb)=>{
    models.JobSeekerPost.where({jobseeker_id:parseInt(job_seeker_id)})
        .fetchAll({withRelated:['jobpost.post_rel.skill']}).then(res=>cb(res.toJSON()));
};

exports.applyToJobPost=(jobseeker_id,jobpost_id,cb)=>{
    new  models.JobSeekerPost({jobseeker_id,jobpost_id}).save().then(()=>cb());
};