const {
    getCurrenciesTitle,
    getCurrenciesData,
    getCurrenciesDataByID,

} = require("../controllers/Currencies.controller");
const { verifyAuth } = require("../middlewares/User.miidleware");
const validateCurrenciesID = require("../middlewares/Validators/Currencies.validator.middleware");

const router = require("express").Router();



// to Get Currencies Titel
router.get("/currencies/title", getCurrenciesTitle)

// to get Currencies Data
router.get("/currencies/data", verifyAuth, getCurrenciesData)

// to Get Currencies Data By ID
router.get("/currencies/data/:id", verifyAuth, validateCurrenciesID, getCurrenciesDataByID)

module.exports = router;