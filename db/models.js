var connection = require('./connection');
var bookshelf = connection.bookshelf;

Company = bookshelf.Model.extend({
    tableName: 'company',
    login_user: function () {
        return this.hasMany(LoginUser);
    }
});

var JobPost = bookshelf.Model.extend({
    tableName: 'jobpost',
    seeker_rel: function () {
        return this.hasMany(JobSeekerPost);
    },
    post_rel: function () {
        return this.hasMany(JobPostSkillRel);
    }
});

var Skill = bookshelf.Model.extend({
    tableName: 'skill',
    jobseeker_skill: function () {
        return this.hasMany(JobSeekerSkillRel);
    },
    post_rel: function () {
        return this.hasMany(JobPostSkillRel);
    }
});

var JobPostSkillRel = bookshelf.Model.extend({
    tableName: 'jobpost_skill_rel',
    jobpost: function () {
        return this.belongsTo(JobPost);
    },
    skill: function () {
        return this.belongsTo(Skill);
    }
});

var JobPostSkillRels = bookshelf.Collection.extend({
    model: JobPostSkillRel
});

var JobSeeker = bookshelf.Model.extend({
    tableName: 'jobseeker',
    jobseeker_post: function () {
        return this.hasMany(JobSeekerPost);
    },
    skill_rel: function () {
        return this.hasMany(JobSeekerSkillRel);
    },
    login_user: function () {
        return this.hasMany(LoginUser);
    }
});

var JobSeekerSkillRel = bookshelf.Model.extend({
    tableName: 'jobseeker_skill_rel',
    jobseeker: function () {
        return this.belongsTo(JobSeeker);
    },
    skill: function () {
        return this.belongsTo(Skill);
    }
});

var JobSeekerPost = bookshelf.Model.extend({
    tableName: 'jobseeker_post_rel',
    jobseeker: function () {
        return this.belongsTo(JobSeeker);
    },
    jobpost: function () {
        return this.belongsTo(JobPost);
    }
});

var LoginUser = bookshelf.Model.extend({
    tableName: 'login_user',
    company: function () {
        return this.belongsTo(Company);
    },
    jobseeker: function () {
        return this.belongsTo(JobSeeker);
    }
});

exports.Company = Company;
exports.LoginUser = LoginUser;
exports.JobSeekerPost = JobSeekerPost;
exports.JobSeekerSkillRel = JobSeekerSkillRel;
exports.JobSeeker = JobSeeker;
exports.JobPostSkillRels = JobPostSkillRels;
exports.JobPostSkillRel = JobPostSkillRel;
exports.Skill = Skill;
exports.JobPost = JobPost;
