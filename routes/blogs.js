import express from 'express';
import blogController from '../controllers/blogController.js'

const router = express.Router(); // On utilise le router d'express

// On gère une requête HTTP GET sur la racine du site (/)
/*
router.get('/', (req, res) => // `req` correspond au contenu de la requête, ici on ne s'en sert pas
    res.status(200).send("Coucou") // res est ce qui va être renvoyé au client. Ici un statut HTTP 200 pour dire que tout va bien, et le contenu de la page.
)
*/

router.get('', blogController.getAllBlogs)
router.get('/author/:author', blogController.getBlogsByAuthor)
router.get('/comment/:id', blogController.getComment)
router.get('/:id', blogController.getBlogById)


router.post('', blogController.createBlog)

router.put('', blogController.updateArticle)
router.put('/comment', blogController.addComment)

router.delete('', blogController.deleteArticle)


export default router;