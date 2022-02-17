User(#id : int, email : txt, age : int, name : txt, desc : txt)  
Photos(#id : int, path : txt, user=>User, isMain : boolean)  
Likes(#sender=>User, #receiver=>User) with sender!=receiver  
Match(#userA=>User, #userB=>User) with userA!=userB  
Interaction(#id : int, #origin=>User, #destination=>User, message : txt, date : Date) with origin!=destination  
MessageNotification(#id : int, user=>User, created_at : Date)  
MatchNotification(#id : int, user=>User, created_at : Date)  
