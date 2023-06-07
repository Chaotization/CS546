//import mongo collections, bcrypt and implement the following data functions
import {users} from '../config/mongoCollections.js';
import validation from '../helpers.js';
import bcrypt from 'bcrypt'


export const createUser = async (
    firstName,
    lastName,
    emailAddress,
    password,
    role
) => {
    firstName = validation.checkLegitName(firstName, 'First name');
    lastName = validation.checkLegitName(lastName, 'Last name');
    emailAddress = validation.checkEmail(emailAddress);
    password = validation.checkPassword(password);
    role = validation.checkRole(role);
    const userCollection = await users();
    const checkExist = await userCollection.findOne({emailAddress: emailAddress});
    if (checkExist) throw "Sign in to this account or enter an email address that isn't already in user.";
    const user = {
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress,
        password: await bcrypt.hash(password, 16),
        role: role
    }
    const insertInfo = await userCollection.insertOne(user);
    if (!insertInfo.acknowledged || !insertInfo.insertedId) throw "Could not add user.";
    return {insertedUser: true};
};

export const checkUser = async (emailAddress, password) => {
    emailAddress = validation.checkEmail(emailAddress);
    password = validation.checkPassword(password);
    const userCollection = await users();
    let checkExist = await userCollection.findOne({emailAddress: emailAddress});
    if (!checkExist) throw "Either the email address or password is invalid";
    const checkPassword = await bcrypt.compare(
        password,
        checkExist.password
    );
    if (!checkPassword) throw "Either the email address or password is invalid"
    return {
        firstName: checkExist.firstName,
        lastName: checkExist.lastName,
        emailAddress: checkExist.emailAddress,
        role: checkExist.role
    };
};
