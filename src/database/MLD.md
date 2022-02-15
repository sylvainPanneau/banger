user(#id : int, email : txt, age : int, name : txt, desc : txt)  
photos(#id : int, path : txt, user=>User)  
likes(#sender=>User, #receiver=>User) with sender!=receiver  
interaction(#id : int, #origin=>User, #destination=>User, message : txt, date : Date) with origin!=destination  
