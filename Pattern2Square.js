let numberOfRows=prompt("Enter number of rows you want")
let rows=numberOfRows;
let str="\n";
for(var i=1;i<=rows;i++)
{
    for(var j=1;j<=rows;j++)
    {
        if((i==1 || i==rows)||(j==1 || j==rows))
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
console.log(str)
