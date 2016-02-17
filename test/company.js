var server = require('./../index');
var request = require('supertest')(server);
describe('Company Page', function () {
    var cookie;
    it('login company', function testSlash(done) {
        request
            .post('/login?username=novakompaniq&password=novakompaniq')
            .expect(302)
            .expect('Location', '/company_page')
            .end(function (err, res) {
                cookie=res.header['set-cookie'];
                if (err) {
                    done(err);
                }else {
                    done();
                }
            });
    });
    it('get current company', function testSlash(done) {
        console.log(cookie);
        request
            .get('/company/current')
            .set('cookie', cookie)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .end(function (err, res) {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it('change current company', function testSlash(done) {
        var testData = {
            "name": "test",
            "email": "test@abv.bg",
            "website": "http://test.bg",
            "description": "test",
            "bulstat": 10000
        };
        request
            .post('/company/edit/' + encodeURIComponent(JSON.stringify(testData)))
            .set('cookie', cookie)
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it('get current company jobposts', function testSlash(done) {
        console.log(cookie);
        request
            .get('/jobpost/company')
            .set('cookie', cookie)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .end(function (err, res) {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it('create jobpost', function testSlash(done) {
        //tags has the ids of the skills
        var testData = {
            "header":"Automatic Test Created Java Developer JobPost",
            "description": "This is a jobpost,which is created from mocha testing framework",
            "tags":[222,2918]
        };
        request
            .post('/jobpost/create/' + JSON.stringify(testData))
            .set('cookie', cookie)
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

