
let token = null;

console.log("LOADED", token );

const setToken = token => {
    token = token
}

const getToken = () => {
    console.log("GETTER -> ", token)
    return token;
};

module.exports = { setToken, getToken };