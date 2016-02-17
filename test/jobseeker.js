var server = require('./../index');
var request = require('supertest')(server);
describe('JobSeeker Page', function () {
    var cookie;
    it('login jobseeker', function testSlash(done) {
        request
            .post('/login?username=novpotrebitel&password=novpotrebitel')
            .expect(302)
            .expect('Location', '/jobseeker_page')
            .end(function (err, res) {
                cookie=res.header['set-cookie'];
                if (err) {
                    done(err);
                }else {
                    done();
                }
            });
    });
    it('get current jobseeker', function testSlash(done) {
        console.log(cookie);
        request
            .get('/jobseeker/current')
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
    it('change current jobseeker', function testSlash(done) {
        var testData = {
            job_seeker_name: 'Test FrameWork Change',
            preferred_pos: 'Test FrameWork Changed',
            skills_tags_ids: [222,2918]
        };
        request
            .post('/jobseeker/edit/' + encodeURIComponent(JSON.stringify(testData)))
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
    it('get current jobseeker jobposts', function testSlash(done) {
        console.log(cookie);
        request
            .get('/jobpost/jobseeker')
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
    it('get current jobseeker applied jobposts', function testSlash(done) {
        console.log(cookie);
        request
            .get('/jobpost/jobseeker/applied')
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
    it('get current jobseeker applied jobposts', function testSlash(done) {
        console.log(cookie);
        request
            .get('/jobpost/skills')
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
});

