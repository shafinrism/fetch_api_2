const url = `https://jsonplaceholder.typicode.com/users`

fetch(url)
.then(res => res.json())
.then(users => getdata(users))

function getdata(users){
  
  for(const user of users){
    const main = document.getElementById('main')
    let div = document.createElement("div")

    div.innerHTML = `

        <h2>ID : ${user.id}</h2>
        <h2>Name : ${user.name}</h2>
        <h3>Email : ${user.email}</h3>
        <h3>City : ${user.address.city}</h3>
        <button onclick="handleDetails(${user.id})">ID -${user.id}-    Details</button>     
         `
      main.appendChild(div)
  }
}
getdata ()


function handleDetails(id){
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(res => res.json())
  .then(data =>getDetailsData(data))

}


function getDetailsData(data){
  main.style.display = "none"
  document.getElementById("details").style.display = "block"
  
  const {id,username,email,phone} = data
  document.getElementById("details").innerHTML = `
        <h1>${id}</h1>
        <h2>${username}</h2>
        <h3>${email}</h3>
        <h4>${phone}</h4>

        
  `
}
