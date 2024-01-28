const { data } = require("../db/User.json")



// To send the User Title
const getUserTitle = (req, res) => {
    res.status(200).send("<h1>User DataBase ... </h1>")
}


// To Send User Data(Data Object) to the Clint
const getUserData = (req, res) => {
    res.status(200).json(data)
}

// To Send User Data Based on UUID
const getUserDataByUUID = (req, res) => {
    const { UUID } = req.params;

    const result = data.find((e) => e.login.uuid === UUID);

    if (!result) {
        res.status(404).json({ "message": "No Data Found..." })
    } else {
        res.status(200).json(result)
    }
}


// To Send User Dta Based on Query Parameters
const getUserDataByQuery = (req, res) => {
    const { age, gender } = req.query;
    let results;
    if (gender && age) {
        results = data.filter(
            (item) => item.gender === gender && Number(item.dob.age) >= Number(age)
        );
        // res.json(results);
    } else if (gender) {
        results = data.filter((item) => item.gender === gender);
        // res.json(results);
    } else if (age) {
        results = data.filter((item) => Number(item.dob.age) >= Number(age));
        // res.json(results);
    }

    if (results.length === 0) {
        res.status(200).json({ "Message": "No data Matched" })
    } else {
        res.status(200).json(results)
    }
}



module.exports = {
    getUserTitle,
    getUserData,
    getUserDataByUUID,
    getUserDataByQuery
}