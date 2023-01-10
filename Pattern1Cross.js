let promptValues=prompt("Enter number of rows");
let n=promptValues;
let str='\n';
for(let i=0;i<n;i++)
{
    for(let j=0;j<n;j++)
    {
        if((i==j)||(j==(n-i-1)))
        {
            str+="*";
        }
        else
        {
            str+=" ";
        }
    }
    str+="\n";
}
console.log(str);