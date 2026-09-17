import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Le nom est requis'],
        trim: true,
        minlength: [2, 'Le nom doit contenir au moins 2 caractères'],
        maxlength: [100, 'Le nom ne peut pas dépasser 100 caractères'],
    },
    mail: {
        type: String,
        required: [true, "L'email est requis"],
        trim: true,
        lowercase: true,
        unique: true,
        match: [EMAIL_REGEX, "L'email n'est pas valide"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
});

const User = model('User', userSchema);

export default User;
