var server = require('./../index');
var request = require('supertest')(server);
describe('Testing Entry Page', function () {
    var newCompany;
    var newJobSeeker;
    before('init new users', function () {
        var date = new Date();
        var newCompanyObj ={username: 'testComp' + date, password: 'testComp' + date}
        var newJobSeekerObj = {username: 'testSeek' + date, password: 'testSeek' + date}
        newCompany = JSON.stringify(newCompanyObj);
        newJobSeeker = JSON.stringify(newJobSeekerObj);
    });
    it('responds to /', function (done) {
        request
            .get('/')
            .expect(200, done);
    });
    describe('Testing Register Company and JobSeeker', function () {
        it('register company', function (done) {
            request.post('/company/register/' + newCompany)
                .expect(200)
                .end(function (err, res) {
                    if (err) {
                        done(err);
                    } else {
                        done();
                    }
                });
        });
        it('register jobseeker', function (done) {
            request.post('/jobseeker/register/' + newJobSeeker)
                .expect(200)
                .end(function (err, res) {
                    if (err) {
                        done(err);
                    } else {
                        done();
                    }
                });
        });

    });
    describe('Testing Login Company and JobSeeker', function () {
        it('login company', function (done) {
            request
                .post('/login?username=novakompaniq&password=novakompaniq')
                .expect(302)
                .expect('Location', '/company_page')
                .end(function (err, res) {
                    if (err) {
                        done(err);
                    } else {
                        done();
                    }
                });
        });
        it('login jobseeker', function (done) {
            request
                .post('/login?username=novpotrebitel&password=novpotrebitel')
                .expect(302)
                .expect('Location', '/jobseeker_page')
                .end(function (err, res) {
                    if (err) {
                        done(err);
                    } else {
                        done();
                    }
                });
        });
    });
});