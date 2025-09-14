function Even()
{
  let arr=[1,2,3,4];
  let sum=0;
  let i;
  let result;
  let n=arr.length;
  for(i=0;i<n;i++)
    {
      if(arr[i]%2===0)
      {
        sum+=arr[i];
      }
    }
  return sum;
}

console.log(Even());
