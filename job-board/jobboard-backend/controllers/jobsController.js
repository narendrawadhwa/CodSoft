const Job = require('../models/jobModel');
const JobType = require('../models/jobTypeModel');
const ErrorResponse = require('../utils/errorResponse');


//create job
exports.createJob = async (req, res, next) => {
    try {
        let company = ''; 

        // Check if the user has a role of 1 (company)
        if (req.user.role === 1) {
            company = req.user.fullName; 
        }

        const job = await Job.create({
            title: req.body.title,
            description: req.body.description,
            salary: req.body.salary,
            location: req.body.location,
            jobType: req.body.jobType,
            user: req.user.id,
            createdAtDate: req.body.createdAtDate,
            experience: req.body.experience,
            skills: req.body.skills.split(',').map(skill => skill.trim()), 
            company: company, 
        });

        res.status(201).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}



//single job
exports.singleJob = async (req, res, next) => {
    try {
        const job = await Job.findById(req.params.id)
            .populate({
                path: 'user',
                model: 'User',
                select: 'fullName' // Include only the 'fullName' field from the user document
            });

        res.status(200).json({
            success: true,
            job
        });
    } catch (error) {
        next(error);
    }
};


//update job by id.
exports.updateJob = async (req, res, next) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.job_id, req.body, { new: true }).populate('jobType', 'jobTypeName').populate('user', 'fullName');
        res.status(200).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}


//show jobs
exports.showJobs = async (req, res, next) => {

    //enable search 
    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}


    // filter jobs by category ids
    let ids = [];
    const jobTypeCategory = await JobType.find({}, { _id: 1 });
    jobTypeCategory.forEach(cat => {
        ids.push(cat._id);
    })

    let cat = req.query.cat;
    let categ = cat !== '' ? cat : ids;

     //jobs by location
     let locations = [];
     const jobByLocation = await Job.find({}, { location: 1 });
     jobByLocation.forEach(val => {
         locations.push(val.location);
     });
     let setUniqueLocation = [...new Set(locations)];
     let location = req.query.location;
     let locationFilter = location !== '' ? location : setUniqueLocation;



    //enable pagination
    const pageSize = 5;
    const page = Number(req.query.pageNumber) || 1;
    // const count = await Job.find({}).estimatedDocumentCount();
    const count = await Job.find({ ...keyword, jobType: categ, location: locationFilter}).countDocuments();

    try {
        const jobs = await Job.find({ ...keyword, jobType: categ, location: locationFilter }).sort({ createdAt: -1 }).skip(pageSize * (page - 1)).limit(pageSize)
        res.status(200).json({
            success: true,
            jobs,
            page,
            pages: Math.ceil(count / pageSize),
            count,
            setUniqueLocation
        })
    } catch (error) {
        next(error);
    }
}