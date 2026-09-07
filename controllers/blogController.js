import Blog from '../models/blog.js';

async function getAllBlogs(req, res) {
    try {
        console.log("Getting all blogs");
        const blogs = await Blog.find();
        res.send(blogs);
    } catch (err) {
	    res.status(500).send(err);
    }
};

async function getBlogById(req, res) {
    try {
        console.log("Getting blog with id");
	//console.log(req.params.id)
        const blog = await Blog.findById(req.params.id);
	console.log(blog)
        res.send(blog);
    } catch (err) {
	    res.status(500).send(err);
    }
};

async function getBlogsByAuthor(req, res) {
    try {
        console.log("Getting blog with id");
	//console.log(req.params.id)
        const blog = await Blog.find({author: req.params.author});
	console.log(blog)
        res.send(blog);
    } catch (err) {
	    res.status(500).send(err);
    }
};

async function createBlog(req, res) {
   try{
      console.log("Create a blog")
      console.log(req.body.title)
      const blog = await Blog.insertOne({
	title: req.body.title,
	author: req.body.author,
	content: req.body.content
      })
      console.log(blog)   
      res.send(blog)
   } catch (err) {
	    res.status(500).send(err);
   }
}
export default { getAllBlogs, createBlog, getBlogById, getBlogsByAuthor };
