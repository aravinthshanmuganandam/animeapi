function refresh(){
    location.reload()
}
    function search() {
    var value = document.getElementById("myInput").value
    if (value == "" || null) {
        alert("input box empty")
    }
    else {
        animeinfo()
    }
}
async function animeinfo() {
    try {
        const api = "https://api.jikan.moe/v3";
        var value = document.getElementById("myInput").value
        var data = await fetch(api + "/search/anime?q=" + value + "&page=1")
        var res = await data.json();
        console.log(res)
        var len = res.results.length
        for (var i = 0; i < len; i++) {
            const element = res.results[i]
            var img = document.createElement("img")
            img.src = element.image_url
            document.getElementById("cn91").append(img)
            var title = document.createElement("div")
            title.innerText = "Title : " + element.title
            document.getElementById("cn91").append(title)
            var start = document.createElement("div")
            start.innerText = "Start Date : " + element.start_date
            document.getElementById("cn91").append(start)
            var end = document.createElement("div")
            end.innerText = "End Date : " + element.end_date
            document.getElementById("cn91").append(end)
            var type = document.createElement("div")
            type.innerText = "Type : " + element.type
            document.getElementById("cn91").append(type)
            var imdb = document.createElement("div")
            imdb.innerText = "IMDB Rating : " + element.score
            document.getElementById("cn91").append(imdb)
            var synp = document.createElement("p")
            synp.innerText = "Fore read : " + element.synopsis
            document.getElementById("cn91").append(synp)
        }
    } catch (error) {
        console.error()
    }
    }
