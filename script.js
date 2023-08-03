let tbody = document.querySelector('tbody');
let url ='http://localhost/crudjavascript'





function getMobiles(){


fetch(url)
.then(response=>{response.json()
})

}
getMobiles()


