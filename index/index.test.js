const request = require('supertest');
const expect = require('expect')
var app = require('../index.js').app;

it ('should return home page', (done) => {
	request(app)
	.get('/fake')
	.expect('fake route tested')
	.end(done);
})

it ('should return top players', (done) => {
	request(app)
	.get('/topplayers')
	.expect(200)
	.expect((res)=>{
		expect(res.body).toInclude({
			name:'Ivan S',
			points: 100
		})
	})
	.end(done);
})