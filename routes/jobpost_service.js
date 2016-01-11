module.exports = function (express, isAllowedRole, db) {
    var router = express.Router();

    router.post('/create/:new_post',
        require('connect-ensure-login').ensureLoggedIn(),
        isAllowedRole('company'),
        function (req, res) {
            var new_post = JSON.parse(req.params.new_post);
            var post_obj = {
                company_id: req.user.company.id,
                header: new_post.header,
                description: new_post.description
            };
            db.jobpost.createJobPost(post_obj, new_post.tags);
            res.sendStatus(200);
        });

    router.get('/company',
        require('connect-ensure-login').ensureLoggedIn(),
        isAllowedRole('company'),
        function (req, res) {
            var company_id = parseInt(req.user.company.company_id);
            db.jobpost.findByCompany(company_id, r=>res.json(r));
        });

    router.get('/company/object',
        require('connect-ensure-login').ensureLoggedIn(),
        isAllowedRole('company'),
        function (req, res) {
            var company_id = parseInt(req.user.company.company_id);
            db.jobpost.findByCompany(company_id, r=> {
                var posts = r.toJSON();
                var result = {posts: posts};
                res.json(result);
            });
        });

    router.get('/applied/:jobpost_id',
        require('connect-ensure-login').ensureLoggedIn(),
        isAllowedRole('company'),
        function (req, res) {
            var job_post_id = JSON.parse(req.params.jobpost_id);
            db.jobseeker_post.findApplied(job_post_id, a=> res.json(a));
        });

    router.get('/jobseeker',
        require('connect-ensure-login').ensureLoggedIn(),
        isAllowedRole('jobseeker'),
        function (req, res) {
            var skills_ids = req.user.jobseeker.skill_rel.map(r=>parseInt(r.skill.id));
            db.jobpost.findByUser(skills_ids, (result)=>res.json(result));
        });

    router.get('/jobseeker/render',
        require('connect-ensure-login').ensureLoggedIn(),
        isAllowedRole('jobseeker'),
        function (req, res) {
            var skills_ids = req.user.jobseeker.skill_rel.map(r=>parseInt(r.skill.id));
            db.jobpost.findByUser(skills_ids, result=> {
                var preRenderArr = result.toJSON().map(el=>el.jobpost);
                    var applied = req.user.jobseeker.jobseeker_post.map(el=>el.jobpost);
                    var appliedIds = applied.map(a=>parseInt(a.id));
                    var renderArray = preRenderArr.map(el=> {
                        var isIn = (appliedIds.indexOf(parseInt(el.id)) !== -1);
                        el.applied = isIn;
                        return el;
                    });
                    res.json(renderArray);
            });
        });

    router.post('/jobseeker/apply/:job_post_id',
        require('connect-ensure-login').ensureLoggedIn(),
        isAllowedRole('jobseeker'),
        function (req, res) {
            var job_seeker_id = req.user.jobseeker.id;
            var job_post_id = req.params.job_post_id;
            db.jobseeker_post.applyToJobPost(job_seeker_id,
                job_post_id,
                ()=>res.sendStatus(200)
            );
        });

    router.get('/jobseeker/applied',
        require('connect-ensure-login').ensureLoggedIn(),
        isAllowedRole('jobseeker'),
        function (req, res) {
            var jobseeker_id = req.user.jobseeker.id;
            db.jobseeker_post.findAppliedByUser(jobseeker_id, r=>res.json(r));
        });

    router.get('/skills',
        function (req, res) {
            db.skill.findAll(function (skills) {
                res.send(skills);
            });
        });

    return router;
};
