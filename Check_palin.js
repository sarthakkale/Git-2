//Check The Given string is Palindrome Or Not

function Checkpalind(str){

let rversestr = "";

for (let i=str.length-1;i>=0;i--){
    rversestr = rversestr + str[i];
}
if(str==rversestr){
    console.log("The given string is palindrome");
}
else{
    console.log("The given string is not palindrome");
}
}

let str = "nitin";

Checkpalind(str)