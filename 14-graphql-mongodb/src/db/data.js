let users = [
  { id : "A001" , name : "pallavi" , age : 23 },
  { id : "A002" , name : "deeksha" , age : 22 },
  { id : "A003" , name : "shruti" , age : 23  },
  { id : "A004" , name : "ruchita" , age : 22 },
] 

let posts = [
  { id : "P01" , title : "Swimming" , body : "Learn swimming" , published : false , author : "A001"},
  { id : "P02" , title : "Yoga" , body : "Do some yoga practise" , published : false , author : "A002" },
  { id : "P03" , title : "Shopping" , body : "Let's go shopping"  , published : true , author : "A003" },
  { id : "P04" , title : "Travelling" , body : "Go on a long vaccation" , published : false , author : "A001" },
  { id : "P05" , title : "Watching movies" , body : "watch thrilling movies" , published : true , author : "A004" }
] 


let comments = [
  { id : "C01" , text : "Nice post" , creator : "A001" , post : "P01" },
  { id : "C02" , text : "Good Book" , creator : "A002" , post  : "P02" },
  { id : "C03" , text : "I did not like it" , creator : "A001" , post  : "P03" },
  { id : "C04" , text : "Good Work keep it up" , creator : "A003" , post  : "P01" },
  { id : "C05" , text : "Posts are good" , creator : "A004" , post  : "P04" },
  { id : "C06" , text : "Wonderful " , creator : "A003" , post : "P01" }
]


module.exports = { users , posts , comments }