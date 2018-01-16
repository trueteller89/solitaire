var request = require('supertest');
var app = require('../index.js').app;

it ('should return home page', (done) => {
	request(app)
	.get('/fake')
	.expect('fake route tested')
	.end(done);
})