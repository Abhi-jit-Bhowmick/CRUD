const { data } = require("../db/Currencies.json")



// Get Currencies Title..
const getCurrenciesTitle = (req, res) => {
    res.status(200).send("<h1>Currencies Data Base..</h1>")
}



// get Currencies Data
const getCurrenciesData = (req, res) => {
    res.status(200).json(data)
}


// get CurrenciesData based on id
const getCurrenciesDataByID = (req, res) => {
    const { id } = req.params;


    let result = data.find((e) => e.id.toLowerCase() === id.toLowerCase());
    if (!result) {
        res.status(404).json({ "Message": "Data not Matched" })
    } else {
        res.status(200).json(result)
    }
}

module.exports = {
    getCurrenciesTitle,
    getCurrenciesData,
    getCurrenciesDataByID
}