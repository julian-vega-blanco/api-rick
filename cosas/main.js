
const buscador = document.querySelector(".txtCharacter")
const containerCards = document.querySelector(".resultCards")
const pages = document.querySelector("#pagina")


const apiRick = async (pagina) =>{
    let url = "https://rickandmortyapi.com/api/character/?page="+pagina;
    const api = await fetch(url); 
    const data = await api.json();
    const container = document.querySelector(".cositas")
        container.innerHTML = ""
    data.results.map(item =>{
        const {image,name,status,species} = item
        divItem = document.createElement("div")
        
        divItem.innerHTML = `

        <div class="cardsPeople">

            <div class="containerPeople">

                <img src="${image}" alt="image for de people">
                <p class="namePeople"><b>${name}</b></p>
                <br>
                <p><b>
                ${status} - and is - ${species}</b></p>
                <p></p>
            </div>
            
        </div>
        
        `
        container.appendChild(divItem)

    })
}

apiRick(1)

 