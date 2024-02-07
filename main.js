




function isPalindrome(str){
   

    const cleanStr=str.toLowerCase().replace(/[^a-z0-9]/g,"") ;
    console.log(cleanStr) ;

    returnstr= cleanStr.split('').reverse().join(''); 
    return cleanStr==returnstr;
}



function palindromChecker(){
 const input=document.getElementById('input-text').value;
 
 const result=document.getElementById('result');
 const result1=isPalindrome(input);
 if(result1){
     result.textContent=`"${input}" is a palindrome`;
     

 }else{
     result.textContent=`"${input}" is not a palindrome`;
 }

 result.classList.add('fadeIn');
 document.getElementById('input-text').value="";

 
}

document.getElementById('check').addEventListener("click",palindromChecker);




