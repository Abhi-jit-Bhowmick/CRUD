const router = require("express").Router();
const {
    createNewBlog,
    getAllBlogs,
    deleteBlogsWithID,
    findOneAndUpdateBlogs,
    blogSearch

} = require("../controllers/blog.controller");


// add new Blogs // Create 
router.post("/new", createNewBlog);

// Search by Query
router.get("/search", blogSearch)

// get all Blogs // READ
router.get("/allBlogs", getAllBlogs)


// delete Blogs with Id // DELETE
router.delete("/:_id", deleteBlogsWithID)


// Update Blogs with ID // UPDATE
router.patch("/:_id", findOneAndUpdateBlogs)



module.exports = router;