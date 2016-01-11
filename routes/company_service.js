module.exports = function (express, isAllowedRole, db) {

    var router = express.Router();

    router.get('/current',
        require('connect-ensure-login').ensureLoggedIn(),
        isAllowedRole('company'),
        function (req, res) {
            res.json(req.user.company);
        });

    router.post('/edit/:company',
        require('connect-ensure-login').ensureLoggedIn(),
        isAllowedRole('company'),
        function (req, res) {
            var company = JSON.parse(req.params.company);
            company.id = req.user.company.id;
            db.company.editCompany(company);
            res.sendStatus(200);
        });

    return router;
};
