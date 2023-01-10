let promptValues=prompt("Enter number of rows");
let n=promptValues;
let str='\n';
var x1=n/2;
var x = Math.floor( x1 );
x++;
var y=x;

 for(var i=1;i<=n;i++)
 {
       for(var j=1;j<=n;j++)
       {
           if(j==x||j==n-x+1)
           {
               str+="*";
           }
           else
           {
               str+=" ";

           }
       }
       if(i<y)
       {
           x--;
       }
       else
       {
           x++;
       }
       str+="\n";
      
 }
 console.log(str);
