const ensureUser = (req, res, next) => {
    if(req.user){               // available because done(null, foundUser)
        return next();
    }
    return res.render("login")
} 

module.exports = {
    ensureUser
}