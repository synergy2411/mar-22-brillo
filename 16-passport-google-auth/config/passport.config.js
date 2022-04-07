const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const ProfileModel = require("../model/profile.model");

passport.serializeUser((user, done) => {
    done(null, {id : user.id})
})

passport.deserializeUser(async ({id}, done) => {
    const userFound = await ProfileModel.findById(id)
    done(null, userFound)               // attach the user with request object -> req.user
})

passport.use(new GoogleStrategy({
    clientID : "923681364401-uuk2vn6c9j2221hfqb8dnglpe362bier.apps.googleusercontent.com",
    clientSecret : "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",
    callbackURL : "http://localhost:9000/auth/redirect"
}, async (accessToken, refreshToken, profile, done ) => {
    try{
        const userFound = await ProfileModel.findOne({googleId : profile._json.sub})
        if(userFound){
            done(null, userFound)
        }else{
            const newProfile = new ProfileModel({
                username : profile._json.name,
                googleId : profile._json.sub,
                avatar : profile._json.picture
            })
            const createdProfile = await newProfile.save();
            done(null, createdProfile);
        }
    }catch(err){
        done(err)
    }
    
}))