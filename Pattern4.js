let promptValues=prompt("Enter number of rows");
let n=promptValues;
let str='\n';
 for(var i=0;i<n/2;i++)
    {
         
        for(var j=0;j<=i;j++)
        {
            
              str+="*";
        }
         str+="\n";
    }
    for(var i=n/2;i<n;i++)
    {
        for(var j=i+1;j<n;j++)
        {
            str+="*";
        }
         str+="\n";
    }
    console.log(str);