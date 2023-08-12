let tbody = document.querySelector('tbody');
let url ='http://localhost/crudjavascript/mobiles';
let mobiles =[];






function getMobiles(){


fetch(url)
.then(response=>response.json())
.then(data=>{
    console.log(data)
    mobiles = data;
    updateTable();

})
    
    
}


getMobiles();
function updateTable(){
    let data = "";
   if(crudjavascript.length>0){
    for(i=0;i<getMobiles.length;i++){
data+= `<tr>
<td>${crudjavascript[i]['name']}</td>
<td>${crudjavascript[i]['price']}</td>
<td>${crudjavascript[i]['ram']+"GB"}</td>
<td>${crudjavascript[i]['storage']}</td>



</tr>
`
    }
    console.log(data)
   } 
}


