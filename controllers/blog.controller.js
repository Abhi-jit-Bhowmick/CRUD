const Blogs = require("../models/blogs.model");

const createNewBlog = async (req, res) => {
    try {

        const newBlogDoc = new Blogs({ ...req.body });
        const result = await newBlogDoc.save();
        return res.status(200).json(result)

    } catch (error) {
        console.log(error)
        return res.status(404).json(error)
    }
}


const getAllBlogs = async (req, res) => {
    try {
        const allBlogs = await Blogs.find({});
        return res.status(200).json(allBlogs)
    } catch (error) {
        return res.status(404).json({ "message": "Could Not Fetch Blogs from DB", error })
    }
}


const deleteBlogsWithID = async (req, res) => {
    try {
        const { _id } = req.params;
        console.log("ID::", _id)
        const result = await Blogs.findOneAndDelete({ _id });
        return res.status(200).json(result)
    } catch (error) {
        return res.status(404).json({ message: "Couldn't delete blog post. Please try again" })
    }
}


const findOneAndUpdateBlogs = async (req, res) => {
    try {
        const { _id } = req.params;
        const filter = { _id };
        const update = req.body;

        const result = await Blogs.findOneAndUpdate(filter, update, { new: true });

        return res.status(200).json(result)
    } catch (error) {
        return res.status(404).json({ "Message": "Id Is not exist" })
    }
}

const blogSearch = async (req, res) => {
    const { email, title } = req.query;
    console.log(req.query)
    try {
        const searchBlogs = await Blogs.find(
            {
                $or: [

                    { title: title },
                    { author: { $elemMatch: { email: email } } }
                ]
            }
        );
        res.status(200).json(searchBlogs)
    } catch (error) {
        res.status(404).json({ "message": "Couldn't Fetched data " })
    }

}

module.exports = { createNewBlog, getAllBlogs, deleteBlogsWithID, findOneAndUpdateBlogs, blogSearch }