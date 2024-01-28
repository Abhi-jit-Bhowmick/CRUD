const validaor = require("validator");
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            maxlength: 25,
            required: true,
            validate: (incomingName) => {
                const first = incomingName.split(" ")[0];
                // return first === "Mrs." || "Mr." || "Mis." ? true : flase
                if (first === "Mr.") {
                    return true
                } else if (first === "Mrs.") {
                    return true
                } else if (first === "Mis.") {
                    return true
                } else {
                    return false
                }
            },
        },

        twiterHandle: {
            type: String,

        },

        email: {
            type: String,
            required: true,
            maxlength: 50,
            validate: (incomingEmail) => validaor.isEmail(incomingEmail)
        },

        image: {
            type: String,
            validate: (incomingImgURL) => validaor.isURL(incomingImgURL),
        },

        phoneNumber: { type: Number }

    },
    { _id: false }
)




const blogSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    author: [authorSchema],
    content: { type: String, default: "" },
    publishedAt: { type: Date, default: null },
}, { timestamps: true });



const blogModel = mongoose.model("Blogs", blogSchema);
module.exports = blogModel;
