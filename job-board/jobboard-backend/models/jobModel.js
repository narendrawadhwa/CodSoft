
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const experienceLevels = ["Fresher", "1-3 Yrs", "3-5 Yrs", "5-7 Yrs", "7-9 Yrs", "9-11 Yrs", "11+ Yrs"];

const jobSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        required: [true, 'Title is required'],
        maxlength: 70,
    },

    description: {
        type: String,
        trim: true,
        required: [true, 'Description is required'],
    },
    salary: {
        type: String,
        trim: true,
        required: [true, 'Salary is required'],
    },
    location: {
        type: String,
    },
    available: {
        type: Boolean,
        default: true
    },
    jobType: {
        type: ObjectId,
        ref: "JobType",
        required: true
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    createdAtDate: {
        type: Date,
        default: Date.now,
    },
    experience: {
        type: String,
        enum: experienceLevels,
        default: "Fresher", 
        required: true
    },



}, { timestamps: true })

module.exports = mongoose.model("Job", jobSchema);