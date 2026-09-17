function sendError(res, err) {
    if (err.name === 'ValidationError') {
        const errors = Object.fromEntries(
            Object.entries(err.errors).map(([field, e]) => [field, e.message])
        );
        return res.status(400).send({ error: 'Erreur de validation', details: errors });
    }

    if (err.code === 11000) {
        return res.status(409).send({ error: 'Cette valeur existe déjà', details: err.keyValue });
    }

    if (err.name === 'CastError') {
        return res.status(400).send({ error: `Valeur invalide pour le champ "${err.path}"` });
    }

    return res.status(500).send(err);
}

export default sendError;
