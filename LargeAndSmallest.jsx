function BiggestAndSmallest()
{
let arr=[1,5,8,9];
let n=arr.length;
let max=arr[0];
let min=arr[0];
let i;
for(i=0;i<n;i++)
  {
    if(arr[i]>max)
    {
        max=arr[i];
    }
    else if(arr[i]<min)
    {
        min=arr[i];

    }
return {max,min};
  }
}
console.log(BiggestAndSmallest());
