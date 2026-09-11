import Blog from '../models/blog.js';

async function getAllBlogs(req, res) {
    try {
        console.log("Getting all blogs");
        const blogs = await Blog.find();
        res.send(blogs);
    } catch (err) {
	    res.status(500).send(err);
    }
}

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
}

async function getBlogsByAuthor(req, res) {
    try {
        console.log("Getting blog");
	//console.log(req.params.id)
        const blog = await Blog.find({author: req.params.author});
	    console.log(blog)
        res.send(blog);
    } catch (err) {
	    res.status(500).send(err);
    }
}

async function getComment(req, res) {
    try {
        console.log("Getting comment");
        console.log(req.query.id)
        const blog = await Blog.findById(req.params.id, {comments: 1});
	    console.log(blog)
        res.send(blog);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

async function addComment(req, res) {
    try {
        const blogDoc = await Blog.findById(req.body.id, { comments: 1 });

        if (!blogDoc) {
            return res.status(404).send({ error: "Blog not found" });
        }

        blogDoc.comments.push({
            user: req.body.user,
            content: req.body.content,
            note: req.body.note
        });

        const blog = await Blog.updateOne(
            { _id: req.body.id },
            {
                comments: blogDoc.comments,
                updatedAt: Date.now()
            }
        );

        res.send(blog);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
async function updateArticle(req, res) {
    try {
        console.log("updating an article");
        const blog = await Blog.updateOne({_id: req.body.id}, {
            title: req.body.title,
            content: req.body.content,
            updatedAt: Date.now(),
        });
	    console.log(blog)
        res.send(blog);
    } catch (err) {
	    res.status(500).send(err);
    }
}

async function deleteArticle(req, res) {
    try {
        console.log("delete an article");
        const blog = await Blog.deleteOne({_id: req.body.id});
        console.log(blog)
        res.send(blog);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function createBlog(req, res) {
   try{
      console.log("Create a blog")
      console.log(req.body.title)
      const blog = await Blog.create({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        createdAt: Date.now(),
      })
      console.log(blog)   
      res.send(blog)
   } catch (err) {
	    res.status(500).send(err);
   }
}


export default {
    getAllBlogs,
    createBlog,
    getBlogById,
    getBlogsByAuthor,
    updateArticle,
    deleteArticle,
    getComment,
    addComment
};
