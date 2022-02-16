User(#id : int, email : txt, age : int, name : txt, desc : txt)  
Photos(#id : int, path : txt, user=>User)  
Likes(#sender=>User, #receiver=>User) with sender!=receiver  
Match(#userA=>User, #userB=>User) with userA!=userB  
Interaction(#id : int, #origin=>User, #destination=>User, message : txt, date : Date) with origin!=destination  
