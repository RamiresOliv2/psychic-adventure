const a = [
    ["Minecraft : O MELHOR MAPA DE POLÍCIA E LADRÃO !!","https://www.youtube.com/embed/YjQVS3CmtVg?si=lFy5LxbdyNhbUP8p"],
    ["heisnburger insano","https://www.youtube.com/embed/b4XpMTUlorc?si=icds2g4oB9RbZoiQ"],
    ["AUS OPEN 2015 - Djokovic v Abrams Semi-Final","https://www.youtube.com/embed/kn271kr_ks0?si=L9s3RU4JxunyZf8R"],
    ["seu carro é seguro de um caça super manobravel de defesa aéria?","https://www.youtube.com/embed/k7YVxLLIuGM?si=DQf5LlR2hE236F_u"],
]

window.onload = () => {
    const videosDiv = document.getElementById("videos");
    const catto = document.getElementById("catto");


    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "DEMO-API-KEY"
      });
      
      var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
      };

    fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result[0].url)
            catto.src = result[0].url
        })
        .catch(error => console.log('error', error));        

    for (const i in a) {
        const item = a[i];
        videosDiv.innerHTML = videosDiv.innerHTML + `<div>`
        videosDiv.innerHTML = videosDiv.innerHTML + `<h1>${item[0]}</h1>`
        videosDiv.innerHTML = videosDiv.innerHTML + `<iframe width="560" height="315" src="${item[1]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
        videosDiv.innerHTML = videosDiv.innerHTML + `</div>`
    }
}