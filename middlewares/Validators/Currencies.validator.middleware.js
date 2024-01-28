// const Joi = require("joi");

// const currenciesSchema = Joi.object().keys({
//     id: Joi.string()
// })


const validateCurrenciesID = (req, res, next) => {
    const { id } = req.params;

    if (Number(id)) {

        return res.status(404).json({ "Message": "Id should to be a string" })
    }


    next()
}


module.exports = validateCurrenciesID