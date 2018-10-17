var request = require('supertest');

request = request('http://localhost:3000');

var currentUser;
var client;
var accessToken;
var refreshToken;
var expires;



describe('test', function() {
 
    it('should be able to grant client_credentials', function(done) {
        request.post('/oauth/token')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({
            grant_type: 'client_credentials',
            client_id: client.clientId,
            client_secret: client.clientSecret
        })
        .end(function(err, res) {
            if (err) throw err;
            if (!res.body.access_token) throw 'missing access_token';
            if (!res.body.refresh_token) throw 'missing refresh_token';
            if (!res.body.expires_in) throw 'missing expires';
            accessToken = res.body.access_token;
            refreshToken = res.body.refresh_token;
            expires = res.body.expires_in;
            done();
        });
    });
});
