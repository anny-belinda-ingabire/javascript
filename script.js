let tbody = document.querySelector('tbody');
let url ='http://localhost/crudjavascript';






function getMobiles(){


fetch(url)
.then(response=>response)
.then(data=>{
    console.log(data)
    crudjavascript = data;
    updateTable();

})
    
    
}


getMobiles();
function updateTable(){
    
}


