const average=()=>{
let arr=[1,2,3,4];
let avg=0;
let sum=0;
let n=arr.length;
for(let i=0;i<n;i++)
  {
     sum+=arr[i];
  }
    avg=sum/n;
    return avg;
}
console.log(average());
