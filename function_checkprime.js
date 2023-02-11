// Create a Function to check the number is prime or not

function checkprime(num){
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==2){
        console.log("Yes The Number Is Prime");
    }
    else{
        console.log("No The Number Is Not Prime");
    }
}
checkprime(num);