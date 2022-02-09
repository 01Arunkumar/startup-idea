var age ;
function checkDriverAge(age){
    if (age< 18){
        alert("ur too small to start");
    } else if(age === 18){
        alert("ur are ready to start");
    } else {
        alert("you go there");
    }
  
}
checkDriverAge(age);

var age= prompt("enter ur age");
function checkDriverAge2 (age){
    if (age< 18){
        alert("good morning");
    } else if(age === 18){
        alert("good afternoon");
    } else {
        alert("good night");
    }
    return age;
}
checkDriverAge2 (age);