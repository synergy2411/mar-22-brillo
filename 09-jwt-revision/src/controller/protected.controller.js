const jwt = require("jsonwebtoken");
const MY_SECRET = "This is my Secret key";

const protectedRoute = (req, res) => {
    jwt.verify(req.token, MY_SECRET, (err, data)=>{
        if(err) {
            console.log(err);
            return res.send(err);
        }
        console.log("DATA -> ", data);
        return res.send({message : "Protected API"})
    })
}

module.exports={
    protectedRoute
}