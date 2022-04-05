














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


mutation{
  createUser(data:{name :"sumit k", age:34}){
    id name age
  }
}













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