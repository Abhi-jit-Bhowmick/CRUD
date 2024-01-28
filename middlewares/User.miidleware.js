const Password = process.env.ROUTE_PASSWORD;

const verifyAuth = (req, res, next) => {
    const { authorization } = req.headers
    console.log("Authorization::", authorization)
    if (!authorization) {
        return res.status(404).json({ "Message": "No Authorization" })
    }
    if (authorization !== Password) {
        return res.status(404).json({ "Message": "No Authorization" })
    }
    next()
}

module.exports = { verifyAuth }