let tbody = document.querySelector('tbody');
let url =' http://localhost:5050/mobiles ' 


// let mobiles =[];

function getMobiles(){
fetch(url)
  .then(response=>{
console.log(response)
  })

getMobiles();

    // fetch(url)
    // .then(response=>response.json())
    // .then(data=>{
    //      console.log(data)
    //     mobiles = data;
    //     updateTable();

    // }) 
    


// getMobiles();
// function updateTable(){
//     if(mobiles.length>0){
//         for(i= 0; i<mobiles.length;i++){

//      