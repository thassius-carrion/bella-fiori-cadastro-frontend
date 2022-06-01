
fetch('http://localhost:8000/home/products')
.then(response => response.json())
.then(data => { 
    popularDados(data)
})

function fazPost(url, body) {
    console.log(body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
    request.onload = function() {
        console.log(this.responseText)
    }
    return request.responseText
}

function cadastrarProduto(){
    event.preventDefault()
    let url = "http://localhost:8000/home/products"
    let name = document.getElementById("name").value
    let price =  document.getElementById("price").value
    let details = document.getElementById("details").value

    body = {
        "name": name,
        "price": price,
        "details": details
    }

    fazPost(url, body)
}

function popularDados(jsonObject) {
    let myTable = document.getElementById("productTable");

    for (let i = 0; i < jsonObject.length; i++) {
        let myRow = myTable.insertRow(-1);

        let cell = myRow.insertCell(0);
        cell.appendChild(document.createTextNode(jsonObject[i].id));

        cell = myRow.insertCell(1);
        cell.appendChild(document.createTextNode(jsonObject[i].name));

        cell = myRow.insertCell(2);
        cell.appendChild(document.createTextNode(jsonObject[i].price));

        cell = myRow.insertCell(3);
        cell.appendChild(document.createTextNode(jsonObject[i].details));
    }
}




