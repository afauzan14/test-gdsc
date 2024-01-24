function checkInput(req, res, next) {
    const { title, description } = req.body

    if (!title || !description) {
        let err = new Error('Title and description are required fields.');
        err.status = 400;
        return next(err)
    }
    next()
}

module.exports = {checkInput}