# mutation{
#   updateUser(id:"624e89480fc91c5f951c5eec", data:{
#     age:40
#   }){
#     id name age
#   }
# }

# query {
#   authors{
#     id name age
#   }
# }



# query{
#   comments{
#     id
#   }
# }

# mutation{
#   deletePost(id:"624e8e1241b719aac4e7140b"){
#     id title
#   }
# }

# query {
#   posts{
#     id title
#   }
# }



# mutation{
#   deleteComment(id:"624e8f7f18978fc4ac5dedc0"){
#     id text
#   }
# }


# query{
#   comments{
#     id text 
#     creator{
#       id name
#     }
#     post{
#       id title
#     }
#   }
# }

# mutation{
#   createComment(data:{
#     text:"loved it", 
#     postId:"624e8e1241b719aac4e7140b",
#   	authorId:"624e8d8041b719aac4e71405"
#   }){
#     id text
#   }
# }

# query{
#   posts{
#     id title body published author{
#       id name
#     }
#   }
# }


# mutation{
  
#   createPost(data:{ 
#     title:"Course 101", 
#     body:"Awesome course", 
#     authorId:"624e89480fc91c5f951c5eec"}){
#     id title body 
#   }
# }


# mutation{
#   createUser(data:{name:"John Doe", age: 22}){
#     id name age
#   }
# }


# query{
#   authors{
#     id name
#   }
# }


# query {
#   authors{
#     id name
#   }
# }

# mutation{
#   deleteAuthor(id:"A002"){
#     id name
#   }
# }












# mutation{
#   updateUser(id:"A001", data:{
# 		age: 34
#     name:"Sumit k"
#   }){
#     id
#     name
#     age
#   }
# }


# query{
#   posts{id title}
# }










# mutation{
#   deletePost(id:"P002"){
#     id title
#   }
# }

# query {
#   comments{
# 		id text    
#   }
# }



# mutation{
  
#   deleteComment(id:"C101"){
#     id text
#   }
  
# }

# query{
#   comments{id}
# }



# mutation {
#   createComment(data:{
#     text:"My Super Comment",
#     postId:"P002",
#     authorId:"A002"
#   }){
#     id text
#   }
# }

# query {
#   comments{
#     id text 
#     post{
#       title id
#     }
#     creator{
#       name id
#     }
#   }
# }


# mutation{
#   createPost(data:{ 
#     title:"Awesome GraphQL"
#     body:"Nice course",
#     authorId:"A001"
#   }){
#     id title body published
#   }
# }


# query {
#   posts{
#     id title author{id name}
#   }
# }


# mutation{
#   createUser(data:{name :"sumit k", age:34}){
#     id name age
#   }
# }













# mutation{
  
#   createUser(name:"Alice", age:23){
#     id name age
#   }
  
# }

# query{
#   authors{
#     id name
#   }
# }

























# query{
  
  # posts{
  #   id
  #   title
  #   body
  #   published
  #   comments{
  #     id 
  #     text
  #   }
  #   author{
  #     id 
  #     name
  #     age
  #   }
  # }
  
  
  # authors {
  #   id name age
  #   posts{
  #     id title body
  #   }
  #   comments{
  #     id text
  #   }
  # }
  
  
  # comments{
  #   id text 
  #   creator {
  #     id
  #     name 
  #     age
  #   }
  # 	post{
  #     id title
  #   }
  # }
  
  # authors {
  #   id name age 
  #   posts {
  #     id title body published
  #   }
  # }
  
  
  # posts{
  #   id title body published 
  #   author { id name age }
  # }
  
  
  # posts{
  #   id title body published
  # }
  
  # authors {
  #   id name age
  # }
  
  # author (name:"jo") {
  #   name age
  # }
# }