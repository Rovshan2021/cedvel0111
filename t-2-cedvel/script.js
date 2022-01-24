let slct = document.querySelector("#slct");
let cedvel = document.getElementById("tbl");
let cedvel1 = document.getElementById("tbl1")
let getir = document.querySelector("#getir");
let goster = document.querySelector("#goster");
let a = document.querySelector("a")
let link;

onload = function () {
    let opt = `<option selected disabled>Menu sec</option>`;
    
    for(let i = 0; i<slct.length; i++){
        opt+= `<option value="${slct}" >Posts</option>
        <option value="${slct}" >Posts</option>
        `
    }
    slct.innerHTML = opt;
}



function Cedvel(){
    link = fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
        response.json().then(value => {
            th = `
            <thead>
              <tr>
                <th scope="col">UserId</th>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
              </tr>
            </thead>
            `
            cedvel.innerHTML = th;
            value.forEach(element => {
                td1 = `
                <thead>
                    <tr>
                        <th scope="col">${element.userId}</th>
                        <th scope="col">${element.id}</th>
                        <th scope="col">${element.title}</th>
                        <th scope="col">${element.body}</th>
                    </tr>
                </thead>
                `,
                cedvel.innerHTML += td1; 
                cedvel.style.display = "none";
                td2 = `
                <thead>
                    <tr>
                        <th scope="col">${element.userId}</th>
                        <th scope="col">${element.id}</th>
                        <th scope="col">${element.name}</th>
                        <th scope="col">${element.email}</th>
                        <th scope="col">${element.body}</th>
                    </tr>
                </thead>
                `
                cedvel1.innerHTML += td2;
                
                cedvel1.style.display = "none";
            });
        })
    });
    
}
Cedvel()



