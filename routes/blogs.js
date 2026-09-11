import express from 'express';
import blogController from '../controllers/blogController.js'

const router = express.Router(); // On utilise le router d'express

router.get('', blogController.getAllBlogs)
router.get('/author/:author', blogController.getBlogsByAuthor)
router.get('/author-search/:name', blogController.searchBlogsByAuthorName)
router.get('/search/:title', blogController.searchBlogsByTitle)
router.get('/comment/:id', blogController.getComment)
router.get('/:id', blogController.getBlogById)

router.post('', blogController.createBlog)

router.put('', blogController.updateArticle)
router.put('/comment', blogController.addComment)

router.delete('', blogController.deleteArticle)


export default router;