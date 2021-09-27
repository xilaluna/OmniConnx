//tests only for database

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const User = require('../models/userModel');
const { mongoose } = require('../models');
const should = chai.should();

// setting up test data for user model 
const testUser = {
    "first_name": "test_user_first_name"
};

describe('User model tests', () => {
//tests only for user model

    //Establishing connection to local mongo database
    before(function (done) {
        mongoose.connect('mongodb://localhost/testDatabase');
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function() {
            console.log('We are connected to test database!');
            done();
        });
    });

    after(function(done){
        mongoose.connection.db.dropDatabase(function(){
            mongoose.connection.close(done);
        });
    });
})