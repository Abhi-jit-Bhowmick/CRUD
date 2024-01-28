const Joi = require("joi");

const schema = Joi.object().keys({
    age: Joi.number().integer().min(10).max(100),
    gender: Joi.string().valid("male", "female")
})

const validateSearchQuery = (req, res, next) => {
    const { age, gender } = req.query;

    const { error } = schema.validate({ age, gender });

    if (error) {
        return res.status(404).json(error)
    }
    next()

}

module.exports = { validateSearchQuery }