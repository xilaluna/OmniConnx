//tests only for database

const chai = require('chai');
const server = require('../server');
const User = require('../models/userModel');
const should = chai.should();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// setting up test data for user model 
const testUser = {
    "first_name": "test_user_first_name"
};

describe('User model tests', () => {
    console.log("Running user model tests:\n")
    //tests only for user model

        // //Establishing connection to local mongo database
        // before(function (done) {
        //     mongoose.connect('mongodb://localhost/testDatabase');
        //     const db = mongoose.connection;
        //     db.on('error', console.error.bind(console, 'connection error'));
        //     db.once('open', function() {
        //         console.log('We are connected to test database!');
        //         done();
        //     });
        // });

        // // TODO: create test user and test if it exists in database 

        // after(function(done){
        //     mongoose.connection.db.dropDatabase(function(){
        //         mongoose.connection.close(done);
        //     });
        //     done();
        // });

    mongoose.connect('mongodb://localhost/index'); 
    mongoose.connection
    .once('open', () => console.log('Testing connected to database!'))
    .on('error', (error) => {
        console.warn('Error : ',error);
    });//Called hooks which runs before something.
    beforeEach((done) => {
        mongoose.connection.collections.pokemons.drop(() => {
            //this function runs after the drop is completed
            done(); //go ahead everything is done now.
        }); 
    });

})