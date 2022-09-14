


function searchNum(myArray,num){
    let leftArray=[];
    let rightArray=[];

    const i= Math.floor(myArray.length/2);

    leftArray=myArray.slice(0,i)
    rightArray=myArray.slice(i)
    if(myArray[i]>num){
        myArray=leftArray
    }
    if(myArray[i]<num){
        myArray=rightArray;
    }
    
    
    if(myArray[i]==num){return myArray[i]}
    else{searchNum(myArray,num)}
    console.log(myArray)
}
console.log(searchNum([3,5,7,12,17,24],17));


function searchArraysOfNumbers(longArray,shotArray){
    let array=[]
    let i=0;
    let j=0;
    let cutarraylen=shotArray.length
    while(shotArray[i]==longArray[j]){
        array=longArray.splice(j,cutarraylen)
        j++
    }

}