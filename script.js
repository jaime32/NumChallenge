var length=2,
    array=[];

function myFunction(){
    let item=document.getElementById("ascNum").value;
    if (item < -100 || item > 100){
    alert('Number was not accpeted')
    item.pop()
}

if(Array.length < 4){
    while(array.length<length) {
        array.push(+prompt("Enter num"));
    }
    let item=document.getElementById("ascNum").value;
    array.push(item)
    array.sort(function(a,b){return a-b});
    document.getElementById('list1').innerHTML=array.toString();
    array.sort(function(a,b){return b-a});
    document.getElementById('list2').innerHTML=array.toString();
}

}
