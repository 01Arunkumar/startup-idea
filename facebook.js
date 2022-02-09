var dataBase=[
    {
    userName : "deepak",
    password : "secret"
    },
    {
        userName : "sandeep",
        password : "1234" 
    },{
        userName : "suresh",
        password : "123s"  
    }
];

var newsFeed = [
    {
        userName : "Bob",
        age  : 24,
        salary :25000
    },
    {
        userName :"chintu",
        age :5,
        salary : -10000
    }
];

var is_userName = prompt("enter ur userName");
var is_password = prompt("enter ur password");


var is_userValid= function(user, pass){
      for (var i=0; i < dataBase.length; i++ ){
          if( is_userName === dataBase[i].userName && is_password === dataBase[i].password){
               return true;
          }
        }
        return false;
    } 
    
    

function signIn(user, pass){
        if(is_userValid(user, pass)){
            console.log(newsFeed);
        }else{
            alert("enter correct credentials");
        }
}
signIn(is_userName,is_password);
