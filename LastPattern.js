rows=prompt("Enter number of rows");
var str="\n";
for (let i = 1 ; i <= rows; i++ ) 
{
    for (let j = 1; j < i; j++ ) 	
    {
        str+=" ";
    }
    for (let k = i; k <= rows; k++ ) 	
    {
           
            str+=" "+k;
    }
    str+="\n";
}

for (let i = rows - 1; i >= 1; i-- ) 
{
    for (let j = 1; j < i; j++ ) 	
    {
            str+=" ";
    }
    for (let k = i; k <= rows; k++ ) 	
    {
           str+=" "+k;
    }
    str+="\n";
}
console.log(str)
    