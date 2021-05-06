// api_routes.js

const express = require('express');
const cors = require('cors');
const router = express.Router();

const fs = require('fs')
let rawdata = fs.readFileSync('./courses.json');
let coursesAPI = JSON.parse(rawdata);

router.use(cors());
router.use(function(req, res, next) {
    res.header("Acces-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});





// Define routes
router.get('/', (req,res) => {
    let outputJSON = {
        courses : coursesAPI["courses"]
    }
    res.json(outputJSON);
})

// course code route
router.get('/by_course_code/:qcode', (req,res) => {
    let query = req.params['qcode']
    filtered_courses = coursesAPI["courses"].filter(q => q.course_code.toLowerCase().includes(query.toLowerCase()))
    let outputJSON = {
        courses: filtered_courses
    }
    res.json(outputJSON);
})

// course title route
router.get('/by_title/:qtitle', (req,res) => {
    let query = req.params['qtitle']
    filtered_courses = coursesAPI["courses"].filter(q => q.title.toLowerCase().includes(query.toLowerCase()))
    let outputJSON = {
        courses: filtered_courses
    }
    res.json(outputJSON);
})

// course instructor route
router.get('/by_instructor/:qname', (req,res) => {
    let query = req.params['qname']
    filtered_courses = coursesAPI["courses"].filter(q => q.instructor.toLowerCase().includes(query.toLowerCase()))
    let outputJSON = {
        courses: filtered_courses
    }
    res.json(outputJSON);
})

// course level route
router.get('/by_level/:qlevel', (req,res) => {
    let query = req.params['qlevel']
    filtered_courses = coursesAPI["courses"].filter(q => q.course_level.toLowerCase() == (query.toLowerCase()))
    let outputJSON = {
        courses: filtered_courses
    }
    res.json(outputJSON);
})

// combined query route
router.get('/combined_query/:qname/:qlevel', (req,res) => {
    let name = req.params['qname']
    let level = req.params['qlevel']
    filtered_courses = coursesAPI["courses"].filter(q => (q.instructor.toLowerCase().includes(name.toLowerCase()) && q.course_level.includes(level)))
    let outputJSON = {
        courses: filtered_courses
    }
    res.json(outputJSON);
})


module.exports = router;
