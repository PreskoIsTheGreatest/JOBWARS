module.exports = function (express, passport,db) {
    var router = express.Router();

    router.post('/login',
        passport.authenticate('local', {failureRedirect: '/'}),
        function (req, res) {
            var user = req.user;
            var redirect_page = "";
            if (user.role == 'company') {
                redirect_page = "/company_page";
            } else if (user.role == 'jobseeker') {
                redirect_page = '/jobseeker_page';
            }
            res.redirect(redirect_page);
        });

    router.post('/jobseeker/register/:newuser', function (req, res) {
        var new_user = JSON.parse(req.params.newuser);
        db.login_user.isExist(new_user.username,function(isExist){
            if(!isExist){
                res.sendStatus(401);
            }else{
                db.login_user.createJobSeekerUser(new_user);
                res.sendStatus(200);
            }
        });
    });

    router.post('/company/register/:newuser', function (req, res) {
        var new_user = JSON.parse(req.params.newuser);
        db.login_user.isExist(new_user.username,function(isExist){
            if(!isExist){
                res.sendStatus(401);
            }else{
                db.login_user.createCompanyUser(new_user);
                res.sendStatus(200);
            }
        });
    });

    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    return router;
}
;
