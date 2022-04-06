const ensureUser = (req, res, next) => {
    if(req.user){
        return next();
    }
    return res.redirect("/")
}

module.exports = { ensureUser }