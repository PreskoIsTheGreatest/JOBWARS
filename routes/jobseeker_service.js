module.exports = function (express, isAllowedRole, db) {
    var router = express.Router();

    router.get('/current',
        require('connect-ensure-login').ensureLoggedIn(),
        isAllowedRole('jobseeker'),
        function (req, res) {
            res.json(req.user.jobseeker);
        });

    router.post('/edit/:editable',
        require('connect-ensure-login').ensureLoggedIn(),
        isAllowedRole('jobseeker'),
        function (req, res) {
            var current_job_seeker = req.user.jobseeker;
            var jobseeker_data = JSON.parse(req.params.editable);
            var current_skills = current_job_seeker.skill_rel.map(s=>s.skill.id);

            var old_skills = new Set(current_skills);
            var new_skills = new Set(jobseeker_data.skills_tags_ids);

            var delete_union = new Set([...new_skills, ...old_skills]);
            var create_union = new Set(delete_union);

            [...new_skills].map(s=>delete_union.delete(s));
            [...old_skills].map(s=>create_union.delete(s));

            var jobseeker = {
                id: current_job_seeker.id,
                full_name: jobseeker_data.job_seeker_name,
                desired_position: jobseeker_data.preferred_pos
            };

            db.jobseeker.editSkills(jobseeker, create_union, delete_union);
            res.sendStatus(200);
        });
    return router;
};
