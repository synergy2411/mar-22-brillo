const LUCKY_NUMBER = Math.round(Math.random() * 100)

function getDailyFortune(){
    return {
        message : "Today is your lucky day",
        luckyNumber : LUCKY_NUMBER
    }
}

module.exports = getDailyFortune;