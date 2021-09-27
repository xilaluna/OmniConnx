const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const User = require('../models/userModel')
const should = chai.should()

// setting up test data for user model 
const testUser = {
    "first_name": "test_user_first_name"
}

describe('UserSchema', () => {
    
})