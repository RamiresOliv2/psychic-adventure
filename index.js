const a = [
    "https://www.youtube.com/embed/YjQVS3CmtVg?si=lFy5LxbdyNhbUP8p"
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
        const url = a[i];
        videosDiv.innerHTML = videosDiv.innerHTML + `<iframe width="560" height="315" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }
}