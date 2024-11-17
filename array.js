const array =[1,2,3,4,5,6,7,8,9,10];
const odd=[];
const even=[];
for(let i=0; i<array.length;i++){
    if (array[i]%2 ===0)
    {
        odd.push(array[i]);
    }
    else{
        even.push(array[i]);
    }
}
document.getElementById('demo').innerHTML =  array;


document.getElementById('odd1').innerHTML = odd;


document.getElementById('even1').innerHTML =  even;
