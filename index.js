
function calculate()
{
    var input= document.getElementById("input").value;
    var vowels=['a','e','i','o','u','A','E','I','O','U'];
    var v=0,c=0,d=0,s=0,sp=0;
    for(i=0; i<input.length; i++)
    {
        if(vowels.includes(input[i]))
        v=v+1;
        else if ((input[i] > "A" && input[i] <= 'Z') || (input[i] > "a" && input[i] <= 'z'))
        c=c+1;
        else if(input[i]==" ")
        s=s+1;
        else if(input[i]>=0 && input[i]<=9)
        d=d+1;
        else
        sp=sp+1;
    }
document.getElementById("Entered").innerHTML=input;
document.getElementById("Vowels").innerHTML=v;
document.getElementById("Consonants").innerHTML=c;
document.getElementById("Digits").innerHTML=d;
document.getElementById("Spaces").innerHTML=s;
document.getElementById("SpecialCharacters").innerHTML=sp;
}
