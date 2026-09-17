import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const commentSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, "L'auteur du commentaire est requis"],
    },
    content: {
        type: String,
        required: [true, 'Le contenu du commentaire est requis'],
        trim: true,
        maxlength: [1000, 'Le commentaire ne peut pas dépasser 1000 caractères'],
    },
    note: {
        type: Number,
        required: [true, 'La note est requise'],
        min: [0, 'La note doit être comprise entre 0 et 5'],
        max: [5, 'La note doit être comprise entre 0 et 5'],
    },
});

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Le titre est requis'],
        trim: true,
        minlength: [3, 'Le titre doit contenir au moins 3 caractères'],
        maxlength: [200, 'Le titre ne peut pas dépasser 200 caractères'],
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, "L'auteur est requis"],
    },
    content: {
        type: String,
        required: [true, 'Le contenu est requis'],
        trim: true,
        minlength: [10, 'Le contenu doit contenir au moins 10 caractères'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
    comments: [commentSchema],
});

const Blog = model('Blog', blogSchema);

export default Blog;
