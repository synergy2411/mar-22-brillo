const passport = require("passport");
const LocalStrategy = require("passport-local");
const UserModel = require("../model/user.model");

// Use the Cookie Session and encypt the Cookie with user.id
passport.serializeUser((user, done) => {
    return done(null, {id : user.id})
})
// Decode the cookie and get the user.id from it
passport.deserializeUser(async({id}, done) => {
    try{
        const userFound = await UserModel.findById(id)
        done(null, userFound)
    }catch(err){
        done(err)
    }
})

passport.use(new LocalStrategy(async (username, password, done) => {
    try{
        const foundUser = await UserModel.findOne({username, password})
        if(foundUser){
            return done(null, foundUser)
        }else{
            return done("User not found")
        }
    }catch(err){
        return done(err)
    }
    
}))