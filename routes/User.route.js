const router = require("express").Router();

//! Importing the Controllers --->
const {
    getUserTitle,
    getUserData,
    getUserDataByUUID,
    getUserDataByQuery

} = require("../controllers/User.controller");
const { verifyAuth } = require("../middlewares/User.miidleware");
const { validateSearchQuery } = require("../middlewares/Validators/User.Validator.middleware");


// To get User Data on Search by query Selector based on  Age and Gender
router.get("/user/data/search", validateSearchQuery, getUserDataByQuery)


// To get User Data Title
router.get("/user/title", getUserTitle)


// To get USER DATA (Data Object) 
router.get("/user/data", getUserData)


// To get User Data based on Search UUID
router.get("/user/data/:UUID", getUserDataByUUID)





//! Exporting the routes
module.exports = router