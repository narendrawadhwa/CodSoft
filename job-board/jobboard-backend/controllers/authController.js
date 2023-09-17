
const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');


exports.signup = async (req, res, next) => {
    const {email} = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
        return next(new ErrorResponse("E-mail already registred", 400));
    }
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        next(error);
    }
}

exports.signin = async (req, res, next) => {
    
    try {
        const {email, password} = req.body;
        //validation
        if (!email) {
            return next(new ErrorResponse("Please add an email", 403));
        }
        if (!password) {
            return next(new ErrorResponse("Please add password", 403));
        }
        //Check user email
        const user = await User.create(req.body);
        if (!user) {
            return next(new ErrorResponse("Invalid Credentials", 403));
        }
        //Check password
        const isMatched = await user.comparePassword(password);
        if (!isMatched) {
            return next(new ErrorResponse("Invalid Credentials", 403));
        }
    } catch (error) {
        next(error);
    }
}

