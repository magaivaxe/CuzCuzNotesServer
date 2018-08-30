insert into Users(idUser,pw_user)
	values ('user','user');
    
insert into Notes(idNote,content)
	values (1,'acheter du pain'),(2,'acheter de la farine'),(3,'travailler demain');
    
insert into User_Notes(idUser,idNote)
	values ('user',1),('user',2),('user',3);
    