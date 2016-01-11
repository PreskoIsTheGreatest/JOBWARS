var models = require('./models');

exports.editSkills = (job_seeker, created, deleted)=> {
    new models.JobSeeker(job_seeker).save()
        .then(()=> {
            return Promise.all([...deleted]
                .map(r=> {
                    new models.JobSeekerSkillRel({
                        jobseeker_id: job_seeker.id
                    }).where({skill_id: r}).destroy();
                }))
        })
        .then(()=> {
            return Promise.all([...created].map(r=> {
                    if (r) {
                        new models.JobSeekerSkillRel({
                            jobseeker_id: job_seeker.id,
                            skill_id: r
                        }).save();
                    }
                }))
        })
        .then(()=>console.log('done'));
};