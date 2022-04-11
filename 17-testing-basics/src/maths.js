const sum = (n1, n2) => n1 + n2;

const div = (n1, n2) => {
    if(n1 === 0){
        return 0
    }
    if(n2 === 0){
        return 0
    }
    return n1 / n2;
}

module.exports = {
    sum, div
}